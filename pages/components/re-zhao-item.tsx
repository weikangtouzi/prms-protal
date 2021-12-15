import {useState} from 'react'
import Image from 'next/image'
import {
  ReZhaoItemWrap,
  ReZhaoFirstLine,
  ReZhaoZhiYe,
  ReZhaoPrice,
  ReZhaoArrayText,
  ReZhaoBottomPart,
  ReZhaoBottomRightPart,
} from './styled'

const ReZhaoItem = ({item}: any) => {
  const {zy, price, needs = [], companyImg, companyName, companyNeeds = []} = item
  const [active, setActive] = useState(false)
  return (
    <ReZhaoItemWrap
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      <ReZhaoFirstLine>
        <ReZhaoZhiYe active={active}>{zy}</ReZhaoZhiYe>
        <ReZhaoPrice>{price}</ReZhaoPrice>
      </ReZhaoFirstLine>
      <ReZhaoArrayText>
        {needs.map((n: string, idx: number) => (
          <span key={n}>
            {n}
            {idx === needs.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
          </span>
        ))}
      </ReZhaoArrayText>
      <ReZhaoBottomPart>
        <Image src={companyImg} alt='ht' width={48} height={48} />
        <ReZhaoBottomRightPart>
          <ReZhaoArrayText css={{fs: 16, color: '#3C4441', mb: 5}}>{companyName}</ReZhaoArrayText>
          <ReZhaoArrayText>
            {companyNeeds.map((n: string, idx: number) => (
              <span key={n}>
                {n}
                {idx === companyNeeds.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
              </span>
            ))}
          </ReZhaoArrayText>
        </ReZhaoBottomRightPart>
      </ReZhaoBottomPart>
    </ReZhaoItemWrap>
  )
}

export default ReZhaoItem
