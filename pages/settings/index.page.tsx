import type {ReactElement} from 'react'
import {useState} from 'react'
import InfoLayout from '@/layouts/info'
import {styled} from '@/stitches.config'

import Pagination from '@/components/pagination'
import {Tabs} from '@/components/tabs'

const RightWrap = styled('div', {
  w: 884,
  h: 578,
  mt: 16,
  ml: 16,
  mb: 135,
})

const Table = styled('table', {
  border: 'none',
  borderSpacing: 0,
})

const Thead = styled('thead', {
  bg: '#EFF2F1',
  color: '#616A67',
  fs: 16,
  h: 50,
  w: 884,
})

const Tr = styled('tr', {})

const Th = styled('th', {
  textAlign: 'left',
  ff: '$fr',
})

const Td = styled('td', {
  textAlign: 'left',
  h: 88,
  color: '#3C4441',
  fs: 14,
  ff: '$fr',
  bg: '$w',
  borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
})

const TdBetween = styled('td', {
  h: 16,
  bg: '#F5F6F8',
})
interface DataSourceItem {
  id: string
  detail: string
  time: string
  action: string
}
interface ColItem {
  title: string
  dataIndex: keyof DataSourceItem
  css: any
  render?: any
}

const columns: ColItem[] = [
  {
    title: '内容',
    dataIndex: 'detail',
    css: {w: 658, pr: 70},
  },
  {
    title: '时间',
    dataIndex: 'time',
    css: {w: 154},
  },
  {
    title: '操作',
    dataIndex: 'action',
    css: {w: 35, mr: 20},
  },
]

const dataSource = [
  {
    id: '1',
    time: '2021-10-21',
    detail:
      '【招聘通知】这是一段招聘通知的消息提示这是一段招聘通知的消息提示这是一段招聘通知的消息提示这是一段招聘通知的消息提示',
    action: '查看',
  },
  {
    id: '2',
    time: '2021-10-21',
    detail:
      '【学习通知】亲爱的wendy同学，您购买的XXXX课程尚未付款，订单还有3小时就失效了，请尽快支付。和我一起学习吧！',
    action: '查看',
  },
  {
    id: '3',
    time: '2021-10-21',
    detail:
      '【系统通知】这是一段系统通知的消息提示这是一段系统通知的消息提示这是一段系统通知的消息提示这是一段系统通知的消息提示',
    action: '查看',
  },
  {
    id: '4',
    time: '2021-10-21',
    detail:
      '【学习通知】这是一段招聘通知的消息提示这是一段招聘通知的消息提示这是一段招聘通知的消息提示这是一段招聘通知的消息提示',
    action: '查看',
  },
]

const rzTabs = ['全部', '招聘通知', '学习通知', '系统通知']

export default function Settings() {
  const [current, setCurrent] = useState(2)
  const [rzActive, setRzActive] = useState(0)

  return (
    <RightWrap>
      <Tabs list={rzTabs} css={{w: 884, mb: 16}} active={rzActive} onClickItem={setRzActive} />
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            {columns.map((c) => (
              <Th css={c.css} key={c.dataIndex}>
                {c.title}
              </Th>
            ))}
            <Th></Th>
          </Tr>
        </Thead>
        <tbody>
          <Tr>
            <TdBetween colSpan={7}></TdBetween>
          </Tr>
          {dataSource.map((d: DataSourceItem) => (
            <Tr key={d.id}>
              <Td css={{bg: '$w', w: 20, h: 88, borderBottom: '1px solid $w'}}></Td>
              {columns.map((col: ColItem) => (
                <Td key={col.dataIndex} css={col.css}>
                  {col.render ? col.render(d[col.dataIndex]) : d[col.dataIndex] || null}
                </Td>
              ))}
              <Td css={{bg: '$w', w: 20, h: 88, borderBottom: '1px solid $w'}}></Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <Pagination css={{ml: 284}} current={current} setCurrent={setCurrent} total={4} />
    </RightWrap>
  )
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <InfoLayout>{page}</InfoLayout>
}
