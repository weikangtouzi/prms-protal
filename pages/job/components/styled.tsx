import {styled} from '@/stitches.config'

export const Flex = styled('div', {
  display: 'flex',
})

export const InputFilterBtn = styled('div', {
  h: 54,
  w: 140,
  bg: '$w',
  display: 'flex',
  alignItems: 'center',
  fs: 16,
  color: '#616A67',
  ff: '$fr',
  userSelect: 'none',
  pr: 15,
  variants: {
    active: {
      true: {
        borderTop: '1px solid $primary',
        borderBottom: '1px solid $primary',
      },
      false: {
        borderTop: '1px solid rgba(0,0,0,0.2)',
        borderBottom: '1px solid rgba(0,0,0,0.2)',
      },
    },
  },
})

export const InputWrap = styled('div', {
  mt: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  mr: 134,
})

export const RealInput = styled('input', {
  borderRight: 'none',
  outline: 'none',
  fs: 16,
  h: 54,
  w: 796,
  p: '16px 20px',
  '&::placeholder': {
    fw: 400,
    opacity: 0.3,
    ff: '$fr',
  },
  variants: {
    active: {
      true: {
        borderTop: '1px solid $primary',
        borderLeft: '1px solid $primary',
        borderBottom: '1px solid $primary',
      },
      false: {
        borderTop: '1px solid rgba(0,0,0,0.2)',
        borderLeft: '1px solid rgba(0,0,0,0.2)',
        borderBottom: '1px solid rgba(0,0,0,0.2)',
      },
    },
  },
})

export const HangyeWrap = styled(Flex, {
  position: 'absolute',
  bg: '$w',
  h: 272,
  left: 0,
  top: 54,
  right: 0,
  zIndex: 9,
  overflowY: 'scroll',
  pt: 10,
  pb: 10,
  pl: 30,
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})

export const HYItemWrap = styled(Flex, {
  fs: 16,
  color: '#616A67',
  ff: '$fr',
  w: 190,
  h: 42,
  pl: 20,
  alignItems: 'center',
  variants: {
    active: {
      true: {
        bg: '#F2F7F5',
      },
      false: {
        bg: '$w',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const LocationWrap = styled(Flex, {
  fs: 16,
  ff: '$fr',
  alignItems: 'center',
  mr: 14,
  ml: 5,
  variants: {
    active: {
      true: {
        color: '#FF6500',
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

export const HotCity = styled(LocationWrap, {
  fs: 14,
  ml: 20,
  mr: 0,
})
