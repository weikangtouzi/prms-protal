import {useState} from 'react'
import {HYItemWrap} from './styled'

interface HYProps {
  children: any
  defaultActive?: boolean
  onClick: any
}

export default function HYItem({children, onClick, defaultActive = false}: HYProps) {
  const [active, setActive] = useState(false)

  return (
    <HYItemWrap
      active={active || defaultActive}
      onClick={onClick}
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      {children}
    </HYItemWrap>
  )
}
