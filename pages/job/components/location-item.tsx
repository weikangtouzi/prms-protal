import Icon from '@/components/icon'
import {Flex, LocationWrap} from './styled'

interface LProps {
  text: string
  noIcon?: boolean
}

export default function LocationItem({text, noIcon = false}: LProps) {
  return (
    <Flex>
      <LocationWrap>{text}</LocationWrap>
      {noIcon ? null : <Icon name='icon-icon_xialaxuanxiang' />}
    </Flex>
  )
}
