import {useState} from 'react'
import {styled} from '@/stitches.config'
import {ReZhaoWrap} from '../components/styled'
import ReMenQiYeItem from '../components/re-menqiye-item'
import Pagination from '@/components/pagination'

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

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
const qyList = [
  {id: 1, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联网'], peopleNum: 1344},
  {id: 2, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联网'], peopleNum: 134},
  {id: 3, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联'], peopleNum: 24},
  {id: 4, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联数据服'], peopleNum: 99},
  {id: 5, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联数据服'], peopleNum: 12345},
]

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
  const [current, setCurrent] = useState(2)
  const [lActive, setLActive] = useState(0)

  return (
    <Main>
      <TopDiv>
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
      </TopDiv>
      <ReZhaoWrap css={{mt: 16, mb: 0}}>
        {qyList.map((rz) => (
          <ReMenQiYeItem css={{mb: 16}} key={rz.id} item={rz} />
        ))}
      </ReZhaoWrap>
      <Pagination
        css={{justifyContent: 'center', mt: 30, mb: 80}}
        current={current}
        setCurrent={setCurrent}
        total={4}
      />
    </Main>
  )
}
