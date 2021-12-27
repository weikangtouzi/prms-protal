import {styled} from '@/stitches.config'

export const Main = styled('main', {
  // minHeight: '100vh',
  minWidth: 1184,
  display: 'flex',
  justifyContent: 'center',
  bg: '#EFF2F1',
})

export const LeftWrap = styled('div', {
  w: 884,
  bg: '$w',
  mt: 16,
  mr: 16,
  p: '40px 20px',
  mb: 90,
})

export const RightWrap = styled('div', {
  w: 284,
})

export const RightPartWrap = styled('div', {
  w: 284,
  mt: 16,
  bg: '$w',
  p: 20,
})

export const ResuTitle = styled('div', {
  color: '#3C4441',
  fs: 24,
  fw: 600,
})

export const LeftTitleWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  pb: 40,
  borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
  m: '0 20px',
})

export const RightBtn = styled('div', {
  color: '$primary',
  fs: 18,
  fw: 600,
  userSelect: 'none',
})

export const UploadText = styled('div', {
  fs: 14,
  color: '#616A67',
  lineHeight: '24px',
  mt: 20,
})

export const RealInput = styled('input', {
  display: 'none',
})

export const UploadPrimaryBtn = styled('label', {
  w: '100%',
  borderRadius: '2px',
  mt: 20,
  h: 54,
  bg: '$primary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const UploadBtnText = styled('div', {
  fw: 600,
  color: '$w',
  fs: 16,
  ml: 10,
})

export const ResumeItemWrap = styled('div', {
  // w: 264,
  h: 42,
  // mr: 10,
  position: 'relative',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const FloatLeftWrap = styled('div', {
  position: 'absolute',
  w: 438,
  bg: '$w',
  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  borderRadius: 2,
  left: -448,
  top: 0,
  p: 20,
})

export const ResumeDivText = styled('div', {
  ml: 10,
})

export const VerticalDivider = styled('div', {
  w: 2,
  h: 21,
  bg: '$primary',
  mr: 10,
})

export const EditWrap = styled('div', {
  bg: '#F5F6F8',
  p: '20px 68px 16px 0px',
  // w: 844,
  mt: 19,
})

export const FormItemLabel = styled('div', {
  fs: 16,
  ff: '$fr',
  color: '#616A67',
})

export const FormItemWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const FormWrap = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
})

export const RadioItem = styled('div', {
  w: 140,
  h: 42,
  fs: 16,
  borderRadius: 2,
  fw: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  variants: {
    active: {
      true: {
        bg: '$primary',
        color: '$w',
      },
      false: {
        bg: '$w',
        color: '#3C4441',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const NormalText = styled('div', {
  fs: 16,
  color: '#3C4441',
  ml: 0,
  ff: '$fr',
  whiteSpace: 'pre',
})
