import type {ReactElement} from 'react'
import {useState} from 'react'
import {styled} from '@/stitches.config'
import InfoLayout from '@/layouts/info'
import Icon from '@/components/icon'
import {Select} from '@/components/select'
import Pagination from '@/components/pagination'

const RightWrap = styled('div', {
  w: 884,
  // h: 578,
  mt: 16,
  ml: 16,
  mb: 135,
})

const Flex = styled('div', {
  display: 'flex',
})

const TopCardWrap = styled(Flex, {
  bg: '#EFF2F1',
  p: 30,
  mb: 16,
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
  type: string
  detail: string
  money: number
  status: string
  tradeId: string
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
    title: '类型',
    dataIndex: 'type',
    css: {w: 125},
    render: function _renderType(t: string) {
      let iconName = 'icon-icon_kechengshoumai'
      let text = '课程售卖'

      if (t === '1') {
      } else if (t === '2') {
        iconName = 'icon-icon_tixian'
        text = '提现'
      } else if (t === '3') {
        iconName = 'icon-icon_chongzhi'
        text = '充值'
      } else if (t === '4') {
        iconName = 'icon-icon_shuaxinjianli'
        text = '刷新简历'
      } else if (t === '5') {
        iconName = 'icon-icon_tixian'
        text = '增值服务'
      }
      return (
        <Flex css={{alignItems: 'center'}}>
          <Icon name={iconName} />
          <Flex css={{ml: 10}}>{text}</Flex>
        </Flex>
      )
    },
  },
  {
    title: '详情',
    dataIndex: 'detail',
    css: {w: 267, pr: 40},
  },
  {
    title: '金额',
    dataIndex: 'money',
    css: {w: 108},
    render: function _renderMoney(m: number) {
      const nm = m.toFixed(2)
      if (m > 0) {
        return <Flex css={{color: '$primary'}}>+{nm}</Flex>
      }

      return <Flex css={{color: '#FF2000'}}>{nm}</Flex>
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    css: {w: 81},
    render: function _renderMoney(s: string) {
      if (s === '成功') {
        return <Flex css={{color: '$primary'}}>{s}</Flex>
      }

      return <Flex css={{color: '#FF2000', pr: 22}}>{s}</Flex>
    },
  },
  {
    title: '交易号',
    dataIndex: 'tradeId',
    css: {w: 107},
  },
  {
    title: '交易时间',
    dataIndex: 'time',
    css: {w: 124},
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
    type: '1',
    money: 300,
    status: '成功',
    tradeId: '123456887',
    action: '/',
    detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
  },
  {
    id: '2',
    time: '2021-10-21',
    type: '2',
    money: -300,
    status: '交易失败 已退款',
    tradeId: '123456887',
    action: '/',
    detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
  },
  {
    id: '3',
    time: '2021-10-21',
    type: '3',
    money: 300,
    status: '成功',
    tradeId: '123456887',
    action: '/',
    detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
  },
  {
    id: '4',
    time: '2021-10-21',
    type: '4',
    money: -1900,
    status: '成功',
    tradeId: '123456887',
    action: '/',
    detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
  },
  {
    id: '5',
    time: '2021-10-21',
    type: '5',
    money: 300,
    status: '成功',
    tradeId: '123456887',
    action: '/',
    detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
  },
]

export default function Zc() {
  const [current, setCurrent] = useState(2)
  return (
    <RightWrap>
      <TopCardWrap>
        <Flex
          css={{
            background: 'linear-gradient(225deg, #00EFBE 0%, #00DA8A 100%)',
            w: 397,
            h: 171,
            color: '$w',
            fw: 600,
            flexDirection: 'column',
            p: '20px 20px 35px 25px',
            boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
            borderRadius: 4,
          }}
        >
          <Flex css={{fs: 16, alignItems: 'center', justifyContent: 'space-between'}}>
            <Flex>早点币</Flex>
            <Flex
              css={{
                w: 80,
                h: 42,
                alignItems: 'center',
                justifyContent: 'center',
                bg: '$w',
                borderRadius: 2,
                color: '$primary',
              }}
            >
              充值
            </Flex>
          </Flex>
          <Flex css={{fs: 36, ml: 15, mt: 25}}>0.00</Flex>
        </Flex>
        <Flex
          css={{
            bg: '$w',
            w: 397,
            h: 171,
            fw: 600,
            ml: 30,
            flexDirection: 'column',
            p: '20px 20px 35px 25px',
            boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
            borderRadius: 4,
          }}
        >
          <Flex css={{fs: 16, alignItems: 'center', justifyContent: 'space-between'}}>
            <Flex>课程售卖收入</Flex>
            <Flex
              css={{
                w: 80,
                h: 42,
                alignItems: 'center',
                justifyContent: 'center',
                bg: '$primary',
                borderRadius: 2,
                color: '$w',
              }}
            >
              提现
            </Flex>
          </Flex>
          <Flex css={{fs: 36, ml: 15, mt: 25}}>0.00</Flex>
        </Flex>
      </TopCardWrap>
      <Flex css={{bg: '$w', p: 30, alignItems: 'center', mb: 16}}>
        <Flex css={{color: '#616A67', ff: '$fr'}}>分类：</Flex>
        <Select placeholderCss={{color: '#616A67'}} onSelect={() => {}} iconName='icon-icon_xialaxuanxiang2' />
        <Flex css={{color: '#616A67', ff: '$fr', ml: 30}}>类型：</Flex>
        <Select
          placeholder='请选择（多选）'
          placeholderCss={{color: '#616A67'}}
          onSelect={() => {}}
          iconName='icon-icon_xialaxuanxiang2'
        />
        <Flex
          css={{
            w: 80,
            h: 42,
            bg: '$primary',
            color: '$w',
            ml: 68,
            mr: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          查询
        </Flex>
        <Flex
          css={{
            w: 80,
            h: 42,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(0,0,0,0.1)',
            color: '#616A67',
          }}
        >
          重置
        </Flex>
      </Flex>
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

Zc.getLayout = function getLayout(page: ReactElement) {
  return <InfoLayout>{page}</InfoLayout>
}
