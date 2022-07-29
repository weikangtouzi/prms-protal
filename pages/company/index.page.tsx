import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {styled} from '@/stitches.config'
import Pagination from '@/components/pagination'
import { FindCompanyContainer } from './components/styled'
import FindCompanyItem from './components/find-company-item'
import SearchInput from '@/pages/job/components/search-input'

const Main = styled('main', {
  minWidth: 1184,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  bg: '#EFF2F1',
})

const TopDiv = styled('div', {
  w: 1184,
  m: 'auto',
  mt: 20,
  bg: '$w',
  p: '20px 10px 5px 20px',
})


const TitleText = styled('div', {
  color: '#616A67',
  fs: 16,
  ff: '$fr',
  flexShrink: 0,
})

const TopItemWrap = styled('div', {
  display: 'flex',
  mb: 5,
})

const TopRightWrap = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  mt: 1,
})

const SelectionItem = styled('div', {
  fs: 14,
  ff: '$fr',
  mr: 20,
  mb: 15,
  userSelect: 'none',
  variants: {
    active: {
      true: {
        color: '$primary',
      },
      false: {
        color: '#616A67',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

const locations = ['全国', '北京', '上海', '广州', '杭州', '天津', '西安', '苏州', '武汉', '厦门']
const hy = [
  '不限',
  '电子商务',
  '电子商务2',
  '电子商务3',
  '电子商务4',
  '电子商务5',
  '电子商务6',
  '电子商务12',
  '电子商务13',
  '电子商务14',
  '电子商务15',
  '电子商务16',
  '电子商务125',
  '电子商务126',
  '电子商务112',
  '电子商务113',
  '电子商务114',
  '电子商务115',
  '电子商务116',
]

export default function Company() {
  const router = useRouter()
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState(0)

  const [keyword, setKeyword] = useState('')

  const [lActive, setLActive] = useState(0)
  const [companyList, setComponentList] = useState([])

  const pageSize = 20
  const reloadItemList = (pageIndex) => {
  	HTAPI.UserSearchEnterprise({
      keyword: keyword,
      page: pageIndex - 1,
      pageSize: pageSize,
	  }).then(response => {
	  	const count = response?.count ?? 0
	  	const itemList = response?.data ?? []
	  	setTotal(Math.ceil(count / pageSize))
	  	setComponentList(itemList)
	  })
  }
  
  useEffect(() => {
  	setKeyword(router?.query?.keyword ?? '')
  }, [router.query])
  useEffect(() => {
  	if (current == 1) {
  		reloadItemList(1)
  	} else {
  		setCurrent(1)
  	}
  }, [keyword])

  useEffect(() => {
  	reloadItemList(current)
  }, [current])

  return (
    <Main>
    	<SearchInput keyword={keyword} setKeyword={setKeyword} onClickSearch={(keyword) => setKeyword(keyword)} />
      {/*<TopDiv>
        <TopItemWrap>
          <TitleText>公司地点：</TitleText>
          <TopRightWrap>
            {locations.map((l, idx) => (
              <SelectionItem
                onClick={() => {
                  setLActive(idx)
                }}
                active={idx === lActive}
                key={l}
              >
                {l}
              </SelectionItem>
            ))}
          </TopRightWrap>
        </TopItemWrap>
        <TopItemWrap>
          <TitleText>行业类型：</TitleText>
          <TopRightWrap>
            {hy.map((l, idx) => (
              <SelectionItem
                onClick={() => {
                  setLActive(idx)
                }}
                active={idx === lActive}
                key={l}
              >
                {l}
              </SelectionItem>
            ))}
          </TopRightWrap>
        </TopItemWrap>
        <TopItemWrap>
          <TitleText>融资阶段：</TitleText>
          <TopRightWrap>
            {locations.map((l, idx) => (
              <SelectionItem
                onClick={() => {
                  setLActive(idx)
                }}
                active={idx === lActive}
                key={l}
              >
                {l}
              </SelectionItem>
            ))}
          </TopRightWrap>
        </TopItemWrap>
        <TopItemWrap>
          <TitleText>公司规模：</TitleText>
          <TopRightWrap>
            {locations.map((l, idx) => (
              <SelectionItem
                onClick={() => {
                  setLActive(idx)
                }}
                active={idx === lActive}
                key={l}
              >
                {l}
              </SelectionItem>
            ))}
          </TopRightWrap>
        </TopItemWrap>
      </TopDiv>*/}
      <FindCompanyContainer>
      {
      	companyList.map((item, index) => {
      		return (
      			<FindCompanyItem key={index} item={item} index={index} />
      		)
      	})
      }
      </FindCompanyContainer>
      <Pagination
        css={{justifyContent: 'center', mt: 30, mb: 80}}
        current={current}
        setCurrent={setCurrent}
        total={total}
      />
    </Main>
  )
}
