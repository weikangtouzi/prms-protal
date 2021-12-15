import {JudgeStarWrap, StarItem, OrangeNumWrap} from './styled'
import Icon from '@/components/icon'

interface JuSProps {
  starNum: number
  label: string
  size?: 'large' | 'small'
}
export default function JudgeStar({starNum, label, size = 'small'}: JuSProps) {
  const stars = [0, 0, 0, 0, 0]
  const n = starNum.toFixed(1).toString()

  return (
    <JudgeStarWrap>
      {label}
      {stars.map((_, idx) => (
        <StarItem key={idx} size={size}>
          {size === 'large' ? (
            <Icon name={idx < starNum ? 'icon-icon_pingfenda' : 'icon-icon_weipingfenda'} />
          ) : (
            <Icon
              withClassName={false}
              css={{size: 24}}
              name={idx < starNum ? 'icon-icon_pingfenxiao' : 'icon-icon_weipingfenxiao'}
            />
          )}
        </StarItem>
      ))}
      <OrangeNumWrap>{n}</OrangeNumWrap>
    </JudgeStarWrap>
  )
}
