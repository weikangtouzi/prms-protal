import {TabItemWrap} from './styled'

interface TabProps {
  title: string
  active: boolean
  onClick: any
  css?: any
}

export default function TabItem({title, active, css = {}, onClick}: TabProps) {
  return (
    <TabItemWrap onClick={onClick} css={css} active={active}>
      {title}
    </TabItemWrap>
  )
}
