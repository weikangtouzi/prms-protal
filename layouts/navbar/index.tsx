import {useState, useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Icon from '@/components/icon'
import {styled} from '@/stitches.config'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogTitle,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './styled'
import {ConfirmDialog} from '@/components/dialogs'
import HTAuthManager from '@/common/auth/common/model/HTAuthManager'
import { reloadEnterpriseLocation } from '@/utils/utils'
import Script from 'next/script'

const links = [
  {title: '首页', href: '/'},
  {title: '找工作', href: '/job'},
  {
  	title: '招聘会', 
  	// href: '/recruitment'
  },
  {title: '找企业', href: '/company'},
  {
  	title: '找资讯', 
  	// href: '/news'
  },
]

const LinkButton = styled('div', {
  w: 100,
  h: 25,
  fs: 18,
  fw: 600,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  justifyContent: 'center',
  variants: {
    active: {
      true: {
        color: '$primary',
      },
      false: {
        color: '#3C4441',
      },
    },
  },
})

const NavWrap = styled('div', {
  h: 60,
  position: 'sticky',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: '$w',
  zIndex: 1,
})

const DLink = styled(LinkButton, {
  opacity: 1,
  p: 0,
  marginLeft: '5px',
  width: 'auto',
})

const Notify = styled('div', {
  ml: 294,
  mr: 6,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
})

const LogoDiv = styled(Notify, {
  ml: 0,
  mr: 25,
  flexShrink: 0,
  cursor: 'pointer'
})

const Flex = styled('div', {display: 'flex'})
const WrapDiv = styled('div', {
  float: 'right',
  cursor: 'pointer',
})
const TitledText = styled('div', {
  color: '#8C9693',
  fs: 24,
  fw: 600,
})
const LeftTag = styled('div', {
  fs: 18,
  color: '#616A67',
  fw: 400,
  ml: 38,
})

const CityBtn = styled('div', {
  fs: 16,
  fw: 400,
  borderRadius: 2,
  w: 80,
  h: 38,
  ml: 20,
  textAlign: 'center',
  lineHeight: '36px',
  cursor: 'pointer',
  variants: {
    active: {
      true: {
        color: '$primary',
        border: '1px solid $primary',
      },
      false: {
        color: '#616A67',
        border: '1px solid #616A67',
      },
    },
  },
})

const SelectBtn = styled('div', {
  fs: 18,
  ml: 30,
  variants: {
    active: {
      true: {
        color: '$primary',
        fw: 600,
      },
      false: {
        color: '#616A67',
      },
    },
  },
})

const BottomBtn = styled('div', {
  w: 70,
  pt: 30,
  display: 'flex',
  textAlign: 'center',
  alignItems: 'flex-end',
  variants: {
    active: {
      true: {
        color: '$primary',
        fs: 18,
        fw: 600,
        lineHeight: '20px',
      },
      false: {
        color: '#616A67',
        fs: 14,
      },
    },
  },
})

const Divider = styled('div', {
  w: 436,
  h: 0,
  mt: 20,
  ml: 153,
  borderBottom: '1px solid rgba(0,0,0,0.1)',
})

const hots = [
  {text: '北京市', code: 'beijing'},
  {text: '上海市', code: 'shanghai'},
  {text: '广州市', code: 'guangzhou'},
  {text: '深圳市', code: 'shenzhen'},
]

const menus = [
  {
    text: '个人信息',
    href: '/me',
  },
  {
    text: '我的简历',
    href: '/resume',
  },
  {
    text: '求职管理',
    // href: '/submission',
  },
  {
    text: '我的收藏',
    // href: '/collections',
  },
  {
    text: '资产管理',
    // href: '/assets',
  },
]

const defaultBasicInfo = {
  username: '',
  image_url: '/qyshz.png',
}

const defaultTitle = ['省份/直辖市', '城市/区']
const defaultProvince = []
const citys = []

export default function Navbar() {
	const [location, setLocation] = useState('')
  const [current, setCurrent] = useState(0)
  const [activeCode, setActiveCode] = useState('')
  const [maxIndex, setMaxIndex] = useState(-1)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCounty, setSelectedCounty] = useState('')
  const [selectedZhen, setSelectedZhen] = useState('')
  const [provinceList, setProvinceList] = useState([])
  const [cityList, setCityList] = useState([])
  const [countyList, setCountyList] = useState([])
  const [zhenList, setZhenList] = useState([])

  const [basicInfo, setBasicInfo] = useState<{username: string; image_url: string} | undefined>()

  const requestLocation = (complete) => {
  	if (window?.AMap == null) {
  		return
  	}
  	AMap.plugin('AMap.CitySearch', function () {
		  var citySearch = new AMap.CitySearch()
		  citySearch.getLocalCity(function (status, result) {
		    if (status === 'complete' && result.info === 'OK') {
		    	setLocation(result.city)
		    	complete && complete(result.city)
		    }
		  })
		})
  }

  useEffect(() => {
  	HTAPI.request('/preludeDatas/regions_simplified.json', 'GET', {}, { needToken: false }).then(response => {
  		setProvinceList(response)
  	})
  	if ((HTAuthManager?.syncReadKeyValueList()?.userToken?.length ?? 0) > 0) {
  		HTAPI.UserGetBasicInfo({}, { showError: false }).then(({ username, image_url }) => {
		    setBasicInfo({
		      username,
		      image_url
		    })
			})
  	}
		requestLocation((city) => {
			setActiveCode(city)
		})
  }, [])

  

  const [zxOpen, setZxOpen] = useState(false)
  const [exitShow, setExitShow] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const pathname = router.pathname
    if (pathname.includes('/job')) {
      setCurrent(1)
    } else if (pathname.includes('/recruitment')) {
      setCurrent(2)
    } else if (pathname.includes('/company')) {
      setCurrent(3)
    } else if (pathname.includes('/news')) {
      setCurrent(4)
    } else {
    	setCurrent(0)
    }
  }, [router.pathname])

  let list = provinceList
  let bottomDiff = selectedProvince
  if (currentIndex === 1) {
    list = cityList
    bottomDiff = selectedCity
  } else if (currentIndex === 2) {
    list = countyList
    bottomDiff = selectedCounty
  } else if (currentIndex === 3) {
    list = zhenList
    bottomDiff = selectedZhen
  }

  return (
    <NavWrap>
    	<Script>
	  	{ 
	  		`
		  		window._AMapSecurityConfig = {
		  			securityJsCode: '6c80ddf8ab3584edae1e7e477c4d400f',
		      }
	      ` 
	    }
		  </Script>
	  	<Script src="https://webapi.amap.com/loader.js" onLoad={() => {
	  		AMapLoader.load({ 'key': '199579652d247454231ee5391b32ddd7' }).then(() => {
	  			requestLocation((city) => {
	  				setActiveCode(city)
	  			})
	  		})
	    }} />

      <LogoDiv onClick={() => {
      	router.push('/')
      }}>
        <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
      </LogoDiv>
      <Dialog modal open={modalVisible}>
        <DialogTrigger asChild>
          <LinkButton active css={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}} onClick={() => {
          	setModalVisible(true)
          	requestLocation()
          }}>
            <Icon name='icon-icon_dingwei' />
            {activeCode}
          </LinkButton>
        </DialogTrigger>
        <DialogContent
          onPointerDownOutside={(e) => {
            e.preventDefault()
          }}
        >
          <DialogClose asChild>
            <WrapDiv onClick={() => {
            	setModalVisible(false)
            }}>
              <Image src='/close.png' alt='Logo' width={32} height={32} />
            </WrapDiv>
          </DialogClose>
          <DialogTitle>
            <TitledText>切换城市</TitledText>
            <TitledText css={{fs: 16, fw: 400, ml: 18, color: '#616A67'}}>
              切换城市分站，让我们为您提供更准确的信息
            </TitledText>
          </DialogTitle>
          <DialogDescription>
            <Flex css={{alignItems: 'center', mb: 30}}>
              <LeftTag>当前定位：</LeftTag>
              <CityBtn
                onClick={() => {
                  setActiveCode(location)
                  setModalVisible(false)
                }}
              >
                {location}
              </CityBtn>
            </Flex>
            <Flex css={{alignItems: 'center', mb: 30}}>
              <LeftTag>热门城市：</LeftTag>
              {hots.map((h) => (
                <CityBtn
                  onClick={() => {
                    setActiveCode(h.text)
                    setModalVisible(false)
                  }}
                  active={activeCode === h.text}
                  key={h.code}
                >
                  {h.text}
                </CityBtn>
              ))}
            </Flex>
            <Flex>
              <LeftTag>全部地区：</LeftTag>
              {defaultTitle.map((sb, index) => (
                <SelectBtn
                  onClick={() => {
                    if (maxIndex < index - 1) {
                      setMaxIndex(index - 1)
                    }
                    setCurrentIndex(index)
                  }}
                  active={index <= maxIndex}
                  css={index === 0 ? {ml: 25} : {}}
                  key={sb}
                >
                  {index <= maxIndex ? [selectedProvince.name, selectedCity.name, selectedCounty.name, selectedZhen.name][index] || sb : sb}
                </SelectBtn>
              ))}
            </Flex>
            <Divider />
            <Flex css={{ml: 153, flexWrap: 'wrap'}}>
              {list.map((sb) => (
                <BottomBtn
                  onClick={() => {
                    if (currentIndex <= 0) {
                      setSelectedProvince(sb)
                      setCurrentIndex(0)
                      setCityList(sb.Cities)
                      setMaxIndex(0)
                      setSelectedCity('')
                      setSelectedCounty('')
                      setSelectedZhen('')
                    } else if (currentIndex === 1) {
                      setSelectedCity(sb)
                      setModalVisible(false)
                      setActiveCode(sb.name == '市辖区' ? selectedProvince.name : sb.name)
                      setMaxIndex(1)
                      setSelectedCounty('')
                      setSelectedZhen('')
                    } else if (currentIndex === 2) {
                      setSelectedCounty(sb)
                      setMaxIndex(2)
                      setSelectedZhen('')
                    } else if (currentIndex === 3) {
                      setSelectedZhen(sb)
                    }
                  }}
                  active={sb.name === bottomDiff.name}
                  key={sb.name}
                >
                  {sb.name}
                </BottomBtn>
              ))}
            </Flex>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      {links.map((l, index) => (
        <div href={l.href} onClick={() => {
        	if (!l.href) {
        		global.TODO_TOAST()
        		return
        	}
        	router.push(l.href)
        }} key={l.title} target='_blank' rel='noreferrer'>
          <LinkButton active={index === current} css={{mr: 10}}>
            {l.title}
          </LinkButton>
        </div>
      ))}
      <Notify>
        {/*<Image src='/cy-black.png' alt='notification' width={32} height={32} />*/}
      </Notify>
      <DropdownMenu>
        {basicInfo ? <DropdownMenuTrigger asChild>
          <Flex css={{alignItems: 'center', flexShrink: 0}}>
            <img className='use-image-round' src={basicInfo?.image_url || '/qyshz.png'} alt='user' width={30} height={30} />
            <DLink>{basicInfo.username}</DLink>
          </Flex>
        </DropdownMenuTrigger> : <a href='/login' target='_self'>
          <Flex css={{alignItems: 'center', flexShrink: 0}}>
            {/*<Image className='use-image-round' src={basicInfo.image_url} alt='user' width={30} height={30} />*/}
            <DLink>未登录</DLink>
          </Flex>
        </a>}


        <DropdownMenuContent align='end' sideOffset={5}>
          {menus.map((m) => {
            return (
              <DropdownMenuItem key={m.text} onSelect={() => {
              	if (m.href == null) {
              		global.TODO_TOAST()
              		return
              	}
              	router.push(m.href)
              }}>
                <a target='_blank' rel='noreferrer'>
                  {m.text}
                </a>
              </DropdownMenuItem>
            )
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => {
            	global.TODO_TOAST()
              // setZxOpen(true)
            }}
          >
            注销账户
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => {
          	reloadEnterpriseLocation()
          }}>切换身份</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem css={{color: '$primary'}}
          	onSelect={() => {
          		setExitShow(true)
            }}
          >
            退出 <Icon css={{size: 16, ml: 10}} name='icon-icon_kechengshoumai' />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ConfirmDialog
        open={zxOpen}
        onOpenChange={setZxOpen}
        title='确认要注销账户吗？'
        bodyText='如您注销当前账户，您在趁早找平台中留存的信息均将被清空切无法找回。'
      />
      <ConfirmDialog
        open={exitShow}
        onOpenChange={(result) => {
        	setExitShow(result)
        	if (!result) {
        		return
        	}
        	HTAuthManager.clearLoginInfo()
          router.push('/login')
        }}
        title='确认要退出登录吗？'
        bodyText='是否确定要退出登录。'
      />
    </NavWrap>
  )
}
