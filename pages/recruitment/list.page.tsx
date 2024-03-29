// import {useRouter} from 'next/router'
import {useState} from 'react'
import {styled} from '@/stitches.config'
import {Main, InputWrap, RealInput, SearchWorldWrap, SearchWorldText} from '../components/styled'
import {Flex} from './components/styled'
import ZhaopinItem from './components/zhaopin-item'
import TabItem from '../company/components/tab-item'
import {Button} from '@/components/button'
import Pagination from '@/components/pagination'

const searchWords = ['深圳人才招聘', '招聘会名称']
const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'

const TabWrap = styled('div', {
  display: 'flex',
  w: 1184,
  mb: 30,
})

const list = [
  {
    id: 1,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办：主办方名称',
    time: '时间：2021年10月01日-2021年10月30',
  },
  {
    id: 2,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办：主办方名称',
    time: '时间：2021年10月01日-2021年10月30',
  },
  {
    id: 3,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办：主办方名称',
    time: '时间：2021年10月01日-2021年10月30',
  },
  {
    id: 4,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办方名称',
    time: '2021年10月01日-2021年10月30',
  },
]
export default function Recruitment() {
  // const router = useRouter()
  const [active, setActive] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [current, setCurrent] = useState(2)
  return (
    <Main>
      <InputWrap>
        <RealInput
          onFocus={() => {
            setActive(true)
          }}
          onBlur={() => {
            setActive(false)
          }}
          active={active}
          placeholder='搜索招聘会名称、主办公司'
        />
        <Button css={{w: 120, h: 54, mt: 0, borderRadius: 0}} text='搜索' />
      </InputWrap>
      <SearchWorldWrap>
        热门搜索：
        {searchWords.map((s) => (
          <SearchWorldText key={s}>{s}</SearchWorldText>
        ))}
      </SearchWorldWrap>
      <Flex
        css={{
          bg: 'rgba(242,244,246,1)',
          pt: 30,
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TabWrap>
          <TabItem
            onClick={() => {
              setActiveTab(1)
            }}
            title='视频招聘会'
            active={activeTab === 1}
          ></TabItem>
          <TabItem
            onClick={() => {
              setActiveTab(2)
            }}
            title='线下招聘会'
            active={activeTab === 2}
          ></TabItem>
        </TabWrap>
        {activeTab === 1 ? (
          <Flex css={{w: 1184, flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {list.map((l) => (
              <a key={l.id} href={`/recruitment/${l.id}`} target='_blank' rel='noreferrer'>
                <ZhaopinItem item={l}></ZhaopinItem>
              </a>
            ))}
          </Flex>
        ) : (
          <Flex css={{w: 1184, flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {list.map((l) => (
              <a key={l.id} href={`/recruitment/${l.id}`} target='_blank' rel='noreferrer'>
                <ZhaopinItem item={l}></ZhaopinItem>
              </a>
            ))}
          </Flex>
        )}
        <Pagination css={{mb: 80, mt: 20}} current={current} setCurrent={setCurrent} total={4} />
      </Flex>
    </Main>
  )
}
