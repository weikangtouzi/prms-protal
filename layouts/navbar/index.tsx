import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

const links = [
  {title: '首页', href: '/'},
  {title: '找工作', href: '/job'},
  {title: '招聘会', href: '/recruitment'},
  {title: '找企业', href: '/company'},
  {title: '找资讯', href: '/news'},
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
  zIndex: 100,
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
  {text: '北京', code: 'beijing'},
  {text: '上海', code: 'shanghai'},
  {text: '广州', code: 'guangzhou'},
  {text: '深圳', code: 'shenzhen'},
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
    href: '/job',
  },
  {
    text: '我的收藏',
    href: '/collect',
  },
  {
    text: '资产管理',
    href: '/assets',
  },
]

const defaultTitle = ['省', '市', '区、县', '街道、镇']
const defaultProvince = ['安徽', '湖南', '浙江', '山东', '湖北', '河南', '河北', '黑龙江', '新疆']
const citys = ['合肥', '深圳', '马鞍山', '哈尔滨', '北京', '上海', '天津', '阜阳', '杭州']

export default function Navbar() {
  const [current, setCurrent] = useState(0)
  const [activeCode, setActiveCode] = useState('quanguo')
  const [maxIndex, setMaxIndex] = useState(-1)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCounty, setSelectedCounty] = useState('')
  const [selectedZhen, setSelectedZhen] = useState('')
  const [provinceList] = useState(defaultProvince)
  const [cityList, setCityList] = useState(citys)
  const [countyList] = useState([])
  const [zhenList] = useState([])

  const [zxOpen, setZxOpen] = useState(false)

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
      <LogoDiv>
        <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
      </LogoDiv>
      <Dialog modal>
        <DialogTrigger asChild>
          <LinkButton active css={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Icon name='icon-icon_dingwei' />
            全国
          </LinkButton>
        </DialogTrigger>
        <DialogContent
          onPointerDownOutside={(e) => {
            e.preventDefault()
          }}
        >
          <DialogClose asChild>
            <WrapDiv>
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
                  setActiveCode('quanguo')
                }}
                active={activeCode === 'quanguo'}
              >
                全国站
              </CityBtn>
            </Flex>
            <Flex css={{alignItems: 'center', mb: 30}}>
              <LeftTag>热门城市：</LeftTag>
              {hots.map((h) => (
                <CityBtn
                  onClick={() => {
                    setActiveCode(h.code)
                  }}
                  active={activeCode === h.code}
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
                  {index <= maxIndex ? [selectedProvince, selectedCity, selectedCounty, selectedZhen][index] || sb : sb}
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
                      setCityList(citys)
                      setMaxIndex(0)
                      setSelectedCity('')
                      setSelectedCounty('')
                      setSelectedZhen('')
                    } else if (currentIndex === 1) {
                      setSelectedCity(sb)
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
                  active={sb === bottomDiff}
                  key={sb}
                >
                  {sb}
                </BottomBtn>
              ))}
            </Flex>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      {links.map((l, index) => (
        <LinkButton
          active={index === current}
          onClick={() => {
            setCurrent(index)
          }}
          css={{mr: 10}}
          key={l.title}
        >
          <Link href={l.href}>{l.title}</Link>
        </LinkButton>
      ))}
      <Notify>
        <Image src='/cy-black.png' alt='notification' width={32} height={32} />
      </Notify>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Flex css={{alignItems: 'center', flexShrink: 0}}>
            <Image src='/qyshz.png' alt='user' width={30} height={30} />
            <DLink>hhh</DLink>
          </Flex>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' sideOffset={5}>
          {menus.map((m) => {
            return (
              <DropdownMenuItem
                onSelect={() => {
                  router.push(m.href)
                }}
                key={m.text}
              >
                {m.text}
              </DropdownMenuItem>
            )
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => {
              setZxOpen(true)
            }}
          >
            注销账户
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>切换身份</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem css={{color: '$primary'}}>
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
    </NavWrap>
  )
}
