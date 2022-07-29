import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {Main, Flex} from '../components/styled'
import {HotCity} from './components/styled'
import SearchInput from './components/search-input'
import LocationItem from './components/location-item'
import FindJobItem from '../company/components/find-job-item'
import Pagination from '@/components/pagination'
import {Select} from '@/components/select'

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
const jobList = [
  {
    id: 1,
    job: 'iOS开发',
    isUrgent: true,
    time: '17:48',
    subs: '深圳｜1-3年｜本科｜全职',
    money: '15-20K',
    company: '公司名称',
    companyText: 'A轮｜50-150人｜移动互联网，数据服务',
    fl: ['公司福利', '周末双休', '年终奖'],
    jobTitle: '产品总监（OA办公方向）',
    details:
      '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
    location: '深圳-南山区-软件基地',
    img: imgUrl,
    headImg: imgUrl,
    hr: '陈小姐 · HR',
    onLine: true,
  },
  {
    id: 2,
    job: 'iOS开发',
    subs: '深圳｜1-3年｜本科｜全职',
    company: '公司名称',
    companyText: 'A轮｜50-150人｜移动互联网，数据服务',
    fl: ['公司福利', '周末双休', '年终奖'],
    money: '15-20K',
    jobTitle: '产品总监（OA办公方向）',
    time: '2021-10-01 发布',
    subscribed: false,
    details:
      '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
    location: '深圳-南山区-软件基地',
    headImg: imgUrl,
    img: imgUrl,
    hr: '陈小姐 · HR',
    onLine: false,
  },
  {
    id: 3,
    job: 'iOS开发',
    isUrgent: false,
    time: '17:48',
    company: '公司名称',
    companyText: 'A轮｜50-150人｜移动互联网，数据服务',
    fl: ['公司福利', '周末双休', '年终奖'],
    subs: '深圳｜1-3年｜本科｜全职',
    jobTitle: '产品总监（OA办公方向）',
    money: '15-20K',
    subscribed: false,
    details:
      '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
    location: '深圳-南山区-软件基地',
    img: imgUrl,
    headImg: imgUrl,
    hr: '陈小姐 · HR',
    onLine: true,
  },
  {
    id: 4,
    job: 'iOS开发',
    isUrgent: true,
    company: '公司名称',
    companyText: 'A轮｜50-150人｜移动互联网，数据服务',
    subs: '深圳｜1-3年｜本科｜全职',
    jobTitle: '产品总监（OA办公方向）',
    money: '15-20K',
    time: '2021-10-01 发布',
    subscribed: false,
    details:
      '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
    location: '深圳-南山区-软件基地',
    img: imgUrl,
    headImg: imgUrl,
    hr: '陈小姐 · HR',
    onLine: true,
  },
]

const gzjyList = [
	{ value: '在校/应届', key: 0 },
	{ value: '3年及以下', key: 1 },
	{ value: '3-5年', key: 3 },
	{ value: '5-10年', key: 5 },
	{ value: '10年以上', key: 10 },
	{ value: '经验不限', key: null },
]

const xlList = [
	{ value: '大专', key: 'JuniorCollege' },
  { value: '本科', key: 'RegularCollege' },
  { value: '硕士', key: 'Postgraduate' },
  { value: '博士', key: 'Doctor' },
  { value: '不要求', key: null },
]

const xzList = [
	{ value: '不限', key: null },
  { value: '5k以下', key: [0, 5000] },
  { value: '5-8k', key: [5000, 8000] },
  { value: '8-10k', key: [8000, 10000] },
  { value: '10-15k', key: [10000, 15000] },
  { value: '15-20k', key: [15000, 20000] },
  { value: '20-25k', key: [20000, 25000] },
  { value: '25-30k', key: [25000, 30000] },
  { value: '30k以上', key: [30000, 0] }
]

const gmList = [
	{ value: '少于15人', key: 'LessThanFifteen' },
  { value: '15-50人', key: 'FifteenToFifty' },
  { value: '50-100人', key: 'FiftyToOneHundredFifty' },
  { value: '100-500人', key: 'OneHundredFiftyToFiveHundreds' },
  { value: '500-2000人', key: 'FiveHundredsToTwoThousands' },
  { value: '2000人以上', key: 'MoreThanTwoThousands' },
]

const hotcitys = ['全国', '重庆', '上海', '北京']
const ls = ['我的', '益田假日', '深圳湾', '深圳湾2', '深圳湾3', '深圳湾4', '深圳湾5']

export default function Job(props) {
	const router = useRouter()
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState(0)

  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [gzjy, setGzjy] = useState('')
  const [xl, setXl] = useState('')
  const [xz, setXz] = useState('')
  const [gm, setGm] = useState('')
  const [gzxz, setGzxz] = useState('')
  const [jobList, setJobList] = useState([])

  const pageSize = 20
  const reloadItemList = (pageIndex) => {
  	HTAPI.CandidateSearchJob({
	    filter: {
	        page: pageIndex - 1,
	        pageSize: pageSize,
	        category: category ? [category] : undefined,
	        experience: gzjy?.key,
	        education: xl?.key,
	        salaryExpected: xz?.key,
	        enterpriseSize: gm?.key
	    },
	    keyword: keyword
	  }).then(response => {
	  	const count = response?.count ?? 0
	  	const itemList = response?.data ?? []
	  	setTotal(Math.ceil(count / pageSize))
	  	setJobList(itemList)
	  })
  }
  useEffect(() => {
  	setKeyword(router?.query?.keyword)
  	setCategory(router?.query?.category)
  }, [router.query])
  useEffect(() => {
  	if (current == 1) {
  		reloadItemList(1)
  	} else {
  		setCurrent(1)
  	}
  }, [keyword, category, gzjy, xl, xz, gm])

  useEffect(() => {
  	reloadItemList(current)
  }, [current])

  return (
    <Main>
      <SearchInput keyword={keyword} setKeyword={setKeyword} onClickSearch={(keyword) => setKeyword(keyword)} />
      <Flex
        css={{
          bg: 'rgba(242,244,246,1)',
          flexDirection: 'column',
          pt: 20,
          mt: 20,
          width: '100%',
          alignItems: 'center',
        }}
      >
        {/*<Flex css={{w: 1184, p: '20px 20px 20px 16px', bg: '$w', flexDirection: 'column', mb: 20}}>
          <Flex>
            <LocationItem text='广东' />
            <LocationItem text='深圳' />
            <LocationItem text='南山区' />
            <LocationItem text='科技园' noIcon />
            <Flex>
              <HotCity css={{ml: 66}}>热门城市:</HotCity>
              {hotcitys.map((h) => (
                <HotCity key={h}>{h}</HotCity>
              ))}
            </Flex>
          </Flex>

          <Flex css={{ml: 85, mt: 20, pt: 20, borderTop: '1px dashed rgba(0,0,0,0.1)', flexWrap: 'wrap'}}>
            {ls.map((ll) => (
              <HotCity css={{ml: 0, mr: 30, color: '#3C4441'}} key={ll}>
                {ll}
              </HotCity>
            ))}
          </Flex>
        </Flex>*/}
        <Flex
          css={{
            w: 1184,
            h: 52,
            bg: '#EFF2F1',
            p: '0 20px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Flex>
            <Select
              css={{bg: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60}}
              placeholderCss={{fs: 16, ff: '$fr', color: '#616A67'}}
              placeholder='工作经验'
              value={gzjy}
              onSelect={setGzjy}
              list={gzjyList}
              valueCloseable
              iconName='icon-icon_xialaxuanxiang2'
            />
            <Select
              css={{bg: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60}}
              placeholderCss={{fs: 16, ff: '$fr', color: '#616A67'}}
              placeholder='学历要求'
              value={xl}
              onSelect={setXl}
              list={xlList}
              valueCloseable
              iconName='icon-icon_xialaxuanxiang2'
            />
            <Select
              css={{bg: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60}}
              placeholderCss={{fs: 16, ff: '$fr', color: '#616A67'}}
              placeholder='薪资要求'
              value={xz}
              onSelect={setXz}
              list={xzList}
              valueCloseable
              iconName='icon-icon_xialaxuanxiang2'
            />
            <Select
              css={{bg: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60}}
              placeholderCss={{fs: 16, ff: '$fr', color: '#616A67'}}
              placeholder='公司规模'
              value={gm}
              onSelect={setGm}
              list={gmList}
              valueCloseable
              iconName='icon-icon_xialaxuanxiang2'
            />
            {/*<Select
              css={{bg: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60}}
              placeholderCss={{fs: 16, ff: '$fr', color: '#616A67'}}
              placeholder='工作性质'
              value={gzxz}
              onSelect={setGzxz}
              list={gzjyList}
              valueCloseable
              iconName='icon-icon_xialaxuanxiang2'
            />*/}
          </Flex>
          <Flex onClick={() => {
          	setGzjy(null)
          	setXl(null)
          	setXz(null)
          	setGm(null)
          }} css={{fs: 16, ff: '$fr', color: 'rgba(0,0,0,0.3)', userSelect: 'none'}}>
            清空筛选条件
          </Flex>
        </Flex>
        <Flex>
          <Flex css={{flexDirection: 'column'}}>
            {jobList.map((j) => (
              <FindJobItem key={j.id} item={j}></FindJobItem>
            ))}
            <Pagination
              css={{justifyContent: 'center', mt: 30, mb: 80}}
              current={current}
              setCurrent={setCurrent}
              total={total}
            />
          </Flex>
          <Flex css={{w: 284, ml: 16, mt: 16, flexDirection: 'column', h: 662, justifyContent: 'space-between'}}>
            <Image alt='name' width={284} height={210} src={imgUrl} />
            <Image alt='name' width={284} height={210} src={imgUrl} />
            <Image alt='name' width={284} height={210} src={imgUrl} />
          </Flex>
        </Flex>
      </Flex>
    </Main>
  )
}
