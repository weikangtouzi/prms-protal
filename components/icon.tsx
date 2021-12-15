import {styled} from '@/stitches.config'

const IconWrap = styled('svg', {})

interface IProps {
  name: string
  withClassName?: boolean
  css?: any
  onClick?: any
}

export default function Icon({name, css, withClassName = true, onClick}: IProps) {
  return (
    <IconWrap onClick={onClick} className={withClassName ? 'icon' : ''} css={css} aria-hidden='true'>
      <use xlinkHref={`#${name}`}></use>
    </IconWrap>
  )
}
