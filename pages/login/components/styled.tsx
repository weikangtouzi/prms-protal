import {styled} from '@/stitches.config'

export const Main = styled('main', {
  height: '100vh',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bg: '$primary',
})

export const LoginCard = styled('div', {
  w: 830,
  h: 593,
  borderRadius: '10px',
  bg: '#EEFEF8',
  boxShadow: '0px 6px 30px 0px rgba(73, 73, 73, 0.2)',
  display: 'flex',
})

export const LeftPart = styled('div', {
  h: '100%',
  w: 300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  p: '40px 60px 60px 40px',
  fontSize: 50,
  fontFamily: '$system',
  fontWeight: 600,
  color: 'rgb(0,0,0,0.5)',
  lineHeight: '70px',
})

export const RightPart = styled('div', {
  boxShadow: '0px 6px 30px 0px rgba(73, 73, 73, 0.2)',
  w: 530,
  h: '100%',
  bg: '$w',
  borderRadius: '10px',
  p: '20px 60px 60px 20px',
})

export const Tab = styled('div', {
  fw: 400,
  fs: 20,
  h: 48,
  w: '100%',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  variants: {
    active: {
      true: {
        color: '$primary',
        borderBottom: '1px solid $primary',
      },
      false: {
        color: '$gray',
        borderBottom: '1px solid $gray',
      },
    },
  },
})
export const TabWrap = styled('div', {
  display: 'flex',
  mt: 20,
})

export const Triangle = styled('div', {
  position: 'absolute',
  top: 11,
  left: -5,
  size: 0,
  borderRight: '5px solid $primary',
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
})
export const TipRectangle = styled('div', {
  position: 'relative',
  bg: '$primary',
  fs: 14,
  fw: 400,
  color: '$w',
  w: 138,
  p: '8px 20px',
  ml: 11,
})

export const FirstLine = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
})

export const Ht = styled('div', {
  color: '$primary',
  ff: '$fr',
  fz: 14,
  fw: 400,
})

export const BWrap = styled('div', {
  ml: 30,
})

export const YZWrap = styled('div', {
  display: 'flex',
})

export const LWrap = styled('div', {
  display: 'flex',
  fs: 14,
  mt: 20,
  fw: 400,
})

export const SmTitle = styled('div', {
  fs: 20,
  color: 'black',
  fw: 600,
  textAlign: 'center',
  mb: 32,
  mt: 22,
})
export const SmGreen = styled('b', {
  color: '$primary',
})

export const ZcIcon = styled('div', {
  fs: 20,
  color: '$primary',
  fw: 600,
  mt: 48,
  textAlign: 'center',
  textDecoration: 'underline',
  cursor: 'po',
})

export const ZcCard = styled(LoginCard, {
  w: 1000,
  h: 722,
})

export const ZcLeft = styled('div', {
  borderRadius: '10px',
  w: 900,
  h: '100%',
  boxShadow: '0px 6px 30px 0px rgba(73, 73, 73, 0.2)',
  bg: '$w',
})

export const ZcRight = styled('div', {
  display: 'flex',
  w: 190,
  flexDirection: 'column',
  h: '100%',
  justifyContent: 'space-between',
  p: '40px 27px 60px',
  alignItems: 'center',
})

export const BackTitle = styled('div', {
  p: '25px 19px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none'
})

export const BackText = styled('span', {
  ml: 9,
  color: '#3C4441',
  fw: 400,
  fs: 18,
  ff: '$fr',
})

export const LittleTitle = styled('div', {
  color: '#8C9693',
  fw: 600,
  fs: 24,
  ml: 59,
  mt: 24,
  mb: 30,
})

export const InputLabel = styled('div', {
  w: 100,
  fs: 18,
  color: '#616A67',
  textAlign: 'end',
})

export const RedStr = styled('span', {
  color: '#FF0000',
})

export const InputWrp = styled('div', {
  ml: 59,
  h: 42,
  display: 'flex',
  alignItems: 'center',
})

export const ZcText = styled('div', {
  fs: 50,
  fw: 600,
  opacity: 0.5,
  textAlign: 'center',
})
export const NextStepText = styled('span', {
  mr: 14,
})

export const NextButtonWrp = styled('div', {
  flexCenter: true,
})

export const IdentityWrap = styled('div', {
  p: '63px 63px 165px 12px',
  display: 'flex',
  flexWrap: 'wrap',
})

export const IdentityCard = styled('div', {
  w: 138,
  h: 87,
  fs: 18,
  fw: 600,
  mt: 50,
  ml: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  variants: {
    active: {
      true: {
        color: '$w',
        bg: '$primary',
      },
      false: {
        color: '#3C4441',
        bg: '#F5F6F8',
      },
    },
  },
})

export const QzyxText = styled('div', {
  fs: 18,
  fw: 600,
  color: '#3C4441',
  mt: 51,
  mb: 40,
  ml: 79,
})

export const QyzzImg = styled('div', {
  w: 480,
  h: 240,
})

export const FormWrap = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  ml: 79,
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

export const ForgetTip = styled('div', {
  ml: 'auto',
  mr: 0,
  cursor: 'pointer',
  userSelect: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
})