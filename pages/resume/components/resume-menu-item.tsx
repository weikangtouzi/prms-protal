import {useState} from 'react'
import {ResumeItemWrap, ResumeDivText} from './styled'
import Icon from '@/components/icon'

interface MProps {
  item: {
    text: string
    name: string
    activeName: string
  }
  active: boolean
  onClick: any
}

export default function ResumeMenuItem({item, active, onClick}: MProps) {
  const {text, name, activeName} = item
  const [hoverOn, setHoverOn] = useState(false)

  return (
    <ResumeItemWrap
      css={{justifyContent: 'flex-start', h: 52, alignItems: 'center', pl: 10}}
      active={hoverOn}
      onClick={onClick}
      onMouseMove={() => {
        setHoverOn(true)
      }}
      onMouseLeave={() => {
        setHoverOn(false)
      }}
    >
      <Icon name={active ? activeName : name} />
      <ResumeDivText css={active ? {color: '$primary'} : {color: '#616A67', ff: '$fr'}}>{text}</ResumeDivText>
    </ResumeItemWrap>
  )
}
