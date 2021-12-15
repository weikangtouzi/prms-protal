import type {ReactElement} from 'react'
import {useState} from 'react'
import Image from 'next/image'
import InfoLayout from '@/layouts/info'
import {styled} from '@/stitches.config'

import Pagination from '@/components/pagination'

import Icon from '@/components/icon'
const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'

const RightWrap = styled('div', {
  w: 884,
  h: 578,
  mt: 16,
  ml: 16,
  mb: 135,
})

const Flex = styled('div', {
  display: 'flex',
})

const TabWrap = styled('div', {
  w: 884,
  h: 60,
  bg: '$w',
  m: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  pt: 17,
  fs: 18,
  mb: 16,
})

const TabItem = styled('div', {
  userSelect: 'none',
  variants: {
    active: {
      true: {
        color: '$primary',
        fw: 600,
        ff: '$system',
      },
      false: {
        color: '#616A67',
        fw: 400,
        ff: '$fr',
      },
    },
  },
})

const TabBottomLine = styled('div', {
  h: 2,
  mt: 16,
  variants: {
    active: {
      true: {
        bg: '$primary',
      },
      false: {
        bg: '$w',
      },
    },
  },
})

const SelectItem = styled(Flex, {
  w: 108,
  h: 42,
  ff: '$fr',
  userSelect: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    active: {
      true: {
        bg: '$primary',
        color: '$w',
      },
      false: {
        bg: '$w',
        color: '#616A67',
      },
    },
  },
})

const Tabs = ({
  css = {},
  list,
  active,
  onClickItem,
}: {
  css?: any
  list: string[]
  active: number
  onClickItem: (e: any) => void
}) => {
  const [listActive, setListActive] = useState(0)
  const [listShow, setListShow] = useState(false)
  return (
    <TabWrap css={css}>
      {list.map((l, idx) => (
        <Flex css={{position: 'relative'}} key={l}>
          <TabItem
            active={idx === active}
            onClick={() => {
              onClickItem(idx)
            }}
          >
            {l}
            <TabBottomLine active={idx === active} />
          </TabItem>
          {idx === 2 ? (
            <Icon
              onClick={() => {
                setListShow(!listShow)
              }}
              name='icon-icon_xialaxuanxiang2'
            />
          ) : null}
          {idx === 2 && listShow ? (
            <Flex css={{position: 'absolute', flexDirection: 'column', top: 45, left: 0, zIndex: 3}}>
              {['全部', '待确认', '已接受', '已拒绝'].map((m, index) => (
                <SelectItem
                  onClick={() => {
                    setListActive(index)
                    setListShow(false)
                  }}
                  active={listActive === index}
                  key={m}
                >
                  {m}
                </SelectItem>
              ))}
            </Flex>
          ) : null}
        </Flex>
      ))}
    </TabWrap>
  )
}

const tabList = ['投递成功', '被查看', '约面试', '不合适']

const JobItemWrap = styled('div', {
  w: 884,
  h: 161,
  p: 20,
  bg: '$w',
  mt: 16,
  position: 'relative',
  borderRadius: 2,
})

const TitleText = styled('div', {
  color: '#3C4441',
  fs: 30,
  fw: 600,
  flexShrink: 0,
})

interface JobIProps {
  item: any
  activeIndex: number
}

const tdlist = [
  {
    id: 1,
    job: 'iOS开发',
    subs: '深圳｜1-3年｜本科｜全职',
    money: '15-20K',
    time: '2021-10-01 10:00',
    company: '公司名称',
    companyText: 'A轮｜50-150人｜移动互联网，数据服务',
    hr: '陈小姐 · HR · ',
    headImg: imgUrl,
    fl: ['公司福利', '年终奖', '周末双休'],
    isZxJl: true,
    isTdSuccess: true,
    onLine: true,
    ckTime: '2021-10-01 18:00',
    location: '深圳市南山区粤海街道软件基地',
  },
  {
    id: 2,
    job: 'iOS开发',
    subs: '深圳｜1-3年｜本科｜全职',
    money: '15-20K',
    time: '2021-10-01 10:00',
    company: '公司名称',
    companyText: 'A轮｜50-150人｜移动互联网，数据服务',
    hr: '陈小姐 · HR · ',
    headImg: imgUrl,
    fl: ['公司福利', '年终奖', '周末双休'],
    isZxJl: false,
    isTdSuccess: true,
    onLine: true,
    ckTime: '2021-10-01 18:00',
    location: '深圳市南山区粤海街道软件基地',
  },
  {
    id: 3,
    job: 'iOS开发',
    subs: '深圳｜1-3年｜本科｜全职',
    money: '15-20K',
    time: '2021-10-01 10:00',
    company: '公司名称',
    companyText: 'A轮｜50-150人｜移动互联网，数据服务',
    hr: '陈小姐 · HR · ',
    headImg: imgUrl,
    fl: ['公司福利', '年终奖', '周末双休'],
    isZxJl: false,
    isTdSuccess: true,
    onLine: true,
    ckTime: '2021-10-01 18:00',
    location: '深圳市南山区粤海街道软件基地',
  },
]

function JobItem({item, activeIndex}: JobIProps) {
  const {job, subs, money, time, company, companyText, fl = [], headImg, hr, onLine, isZxJl, isTdSuccess, ckTime} = item

  return (
    <JobItemWrap>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: 20,
          borderBottom: '1px dashed rgba(0,0,0,0.1)',
        }}
      >
        <Flex css={{flexDirection: 'column', w: 282}}>
          <Flex css={{alignItems: 'center'}}>
            <TitleText css={{fs: 18, mr: 10}}>{job}</TitleText>
          </Flex>
          <Flex css={{alignItems: 'center', mt: 13}}>
            <TitleText css={{color: '#FF6500', fs: 18}}>{money}</TitleText>
            <TitleText css={{fs: 14, fw: 400, color: '#616A67', ml: 15, ff: '$fr'}}>{subs}</TitleText>
          </Flex>
        </Flex>
        <Flex css={{w: 350, alignItems: 'center'}}>
          <Image src={headImg} width={58} height={58} alt='xxx' />
          <Flex css={{flexDirection: 'column', ml: 10}}>
            <TitleText css={{color: '#3C4441', fs: 16, ff: '$fr', fw: 400}}>{company}</TitleText>
            <TitleText css={{color: '#616A67', fs: 14, ff: '$fr', fw: 400, mt: 16}}>{companyText}</TitleText>
          </Flex>
        </Flex>

        <Flex css={{flexDirection: 'column', justifyContent: 'center', w: 206, alignItems: 'flex-end'}}>
          <Flex css={{alignItems: 'center'}}>
            <TitleText css={{color: '#3C4441', fs: 16, ff: '$fr', fw: 400, textAlign: 'right'}}>{time}</TitleText>
            <TitleText css={{color: activeIndex === 0 ? '$primary' : '#3C4441', fs: 16, ff: '$fr', fw: 600, ml: 10}}>
              {isTdSuccess ? '投递成功' : '投递失败'}
            </TitleText>
          </Flex>
          <TitleText css={{color: '#616A67', fs: 16, ff: '$fr', fw: 400, mt: 16}}>
            使用简历: {isZxJl ? '在线简历' : '附件简历'}
          </TitleText>
        </Flex>
      </Flex>
      <Flex css={{justifyContent: 'space-between', mt: 13, mr: activeIndex === 0 ? 210 : 0}}>
        <Flex css={{w: 282}}>
          <TitleText css={{fs: 14, fw: 400, color: '#616A67'}}>{hr}</TitleText>
          {onLine ? <TitleText css={{fs: 14, fw: 400, color: '$primary', ml: 15}}>在线</TitleText> : null}
        </Flex>
        <Flex css={{w: 350}}>
          {fl.map((f: string) => (
            <TitleText
              key={f}
              css={{fs: 14, fw: 400, color: '#616A67', ff: '$fr', bg: '#EFF2F1', p: '4px 10px', mr: 20}}
            >
              {f}
            </TitleText>
          ))}
        </Flex>
        {activeIndex === 1 || activeIndex === 3 ? (
          <Flex css={{flexDirection: 'column', justifyContent: 'center', w: 206, alignItems: 'flex-end'}}>
            <Flex css={{alignItems: 'center'}}>
              <TitleText css={{color: '#3C4441', fs: 16, ff: '$fr', fw: 400, textAlign: 'right'}}>{ckTime}</TitleText>
              <TitleText css={{color: activeIndex === 1 ? '$primary' : '#FF2000', fs: 16, ff: '$fr', fw: 600, ml: 10}}>
                {activeIndex === 1 ? '被查看' : '不合适'}
              </TitleText>
            </Flex>
          </Flex>
        ) : null}
      </Flex>
    </JobItemWrap>
  )
}

interface JobInterViewProps {
  item: any
}

function JobInterviewItem({item}: JobInterViewProps) {
  const {job, money, time, company, companyText, headImg, hr, onLine, isTdSuccess, location} = item

  return (
    <JobItemWrap>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: 20,
          borderBottom: '1px dashed rgba(0,0,0,0.1)',
        }}
      >
        <Flex css={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <Flex css={{w: 455, alignItems: 'center'}}>
            <Image src={headImg} width={58} height={58} alt='xxx' />
            <Flex css={{flexDirection: 'column', ml: 10}}>
              <TitleText css={{color: '#3C4441', fs: 16, ff: '$fr', fw: 400}}>{company}</TitleText>
              <TitleText css={{color: '#616A67', fs: 14, ff: '$fr', fw: 400, mt: 16}}>{companyText}</TitleText>
            </Flex>
          </Flex>

          <Flex css={{flexDirection: 'column', w: 125, mr: 12}}>
            <Flex css={{alignItems: 'center'}}>
              <TitleText css={{fs: 18, mr: 10}}>{job}</TitleText>
            </Flex>
            <Flex css={{alignItems: 'center', mt: 13}}>
              <TitleText css={{color: '#FF6500', fs: 18}}>{money}</TitleText>
            </Flex>
          </Flex>
        </Flex>

        <Flex css={{flexDirection: 'column', justifyContent: 'center', w: 215, alignItems: 'flex-end'}}>
          <Flex css={{alignItems: 'center'}}>
            <TitleText
              css={{color: isTdSuccess ? '$primary' : '#FF2000', fs: 16, ff: '$fr', fw: 400, textAlign: 'right'}}
            >
              {isTdSuccess ? '已接受' : '待确认'}
            </TitleText>
          </Flex>
          <TitleText css={{color: '#616A67', fs: 16, ff: '$fr', fw: 400, mt: 16}}>面试时间：{time}</TitleText>
        </Flex>
      </Flex>
      <Flex css={{mt: 13, mr: 215}}>
        <Flex css={{w: 455, alignItems: 'center', color: '#616A67', fs: 14, ff: '$fr'}}>
          面试地址：
          <TitleText css={{fs: 14, fw: 600, color: '#000000'}}>{location}</TitleText>
        </Flex>

        <Flex css={{w: 125}}>
          <TitleText css={{fs: 14, fw: 400, color: '#616A67'}}>{hr}</TitleText>
          {onLine ? <TitleText css={{fs: 14, fw: 400, color: '$primary', ml: 15}}>在线</TitleText> : null}
        </Flex>
      </Flex>
    </JobItemWrap>
  )
}

export default function Qz() {
  const [active, setActive] = useState(0)
  const [current, setCurrent] = useState(2)

  return (
    <RightWrap>
      <Tabs list={tabList} active={active} onClickItem={setActive} />
      {tabList.length > 0 ? (
        <>
          {active === 2 ? (
            <>
              {tdlist.map((td) => (
                <JobInterviewItem item={td} key={td.id} />
              ))}
            </>
          ) : (
            <>
              {tdlist.map((td) => (
                <JobItem item={td} key={td.id} activeIndex={active} />
              ))}
            </>
          )}
        </>
      ) : (
        <Flex css={{fs: 18, color: '#3C4441', flexDirection: 'column', alignItems: 'center', fw: 600}}>
          <Icon name='icon-icon_wuwenjian' withClassName={false} css={{w: 88, h: 119, mb: 29, mt: 147}} />
          当前没有符合条件的投递记录
        </Flex>
      )}

      <Pagination
        css={{mb: 80, mt: 30, justifyContent: 'center'}}
        current={current}
        setCurrent={setCurrent}
        total={4}
      />
    </RightWrap>
  )
}

Qz.getLayout = function getLayout(page: ReactElement) {
  return <InfoLayout>{page}</InfoLayout>
}
