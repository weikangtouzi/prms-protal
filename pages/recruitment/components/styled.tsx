import {styled} from '@/stitches.config'

export const Flex = styled('div', {
  display: 'flex',
})

export const TopLeftPartWrap = styled('div', {
  w: 682,
  h: 392,
  position: 'relative',
  mr: 16,
})

export const TopLeftTitleWrap = styled('div', {
  bg: 'rgba(0,0,0,0.6)',
  position: 'absolute',
  bottom: 0,
  left: 0,
  color: '$w',
  p: '7px 22px 11px 20px',
  fs: 20,
  ff: '$fr',
})

export const WrapOneLine = styled('div', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '-webkit-line-clamp': 1,
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
})

export const ZItemWrap = styled('div', {
  w: 384,
  h: 392,
  bg: '$w',
  p: 20,
  mb: 16,
})
