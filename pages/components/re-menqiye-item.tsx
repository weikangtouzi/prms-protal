import {useState} from 'react'
import Image from 'next/image'
import {ReMenQiYeItemWrap, ReZhaoZhiYe, ReZhaoArrayText, ReMenQiYeBtn} from './styled'

const ReMenQiYeItem = ({item, css}: any) => {
  const {img, name, needs = [], peopleNum, id} = item
  const [active, setActive] = useState(false)
  return (
    <ReMenQiYeItemWrap
      css={css}
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      <Image className='image-4-radius image-shrink' src={img} width={70} height={70} alt='logo' />
      <a href={`/company/${id}`} target='_blank' rel='noreferrer'>
        <ReZhaoZhiYe css={{fw: 400, mt: 20, mb: 10}} active={active}>
          {name}
        </ReZhaoZhiYe>
      </a>
      <ReZhaoArrayText>
        {needs.map((n: string, idx: number) => (
          <span key={n}>
            {n}
            {idx === needs.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
          </span>
        ))}
      </ReZhaoArrayText>
      <div
        onClick={(e: any) => {
          e.stopPropagation()
        }}
      >
        <a href={`/company/${id}?tab=zhaopin`} target='_blank' rel='noreferrer'>
          <ReMenQiYeBtn>
            <ReZhaoZhiYe css={{fw: 400}} active>
              {peopleNum}&nbsp;
            </ReZhaoZhiYe>
            个热招职位
          </ReMenQiYeBtn>
        </a>
      </div>
    </ReMenQiYeItemWrap>
  )
}

export default ReMenQiYeItem
