import {styled} from '@/stitches.config'

export const Main = styled('main', {
  minHeight: '100vh',
  minWidth: 1184,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bg: '#EFF2F1',
})

export const InputWrap = styled('div', {
  mt: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

export const SearchWorldWrap = styled('div', {
  fs: 14,
  color: '#616A67',
  ff: '$fr',
  w: 916,
  display: 'flex',
  mt: 6,
  mb: 20,
})

export const SearchWorldText = styled('div', {
  color: '$primary',
  mr: 15,
  fs: 14,
  ff: '$fr',
  cursor: 'pointer'
})

export const BodyWrap = styled('div', {
  w: '100%',
  bg: '#F5F6F8',
})

export const FirstWrap = styled('div', {
  mt: 20,
  w: 1184,
  m: 'auto',
  position: 'relative',
})

export const FirstLeftWrap = styled('div', {
  w: 484,
  bg: '$w',
  p: '15px 0 15px',
  boxShadow: ' 0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  marginRight: 700
})

const FirstRightStyle = { width: 684, height: 362 }

export const FirstRightWrap = styled('div', {
  ml: 500,
  ...FirstRightStyle,
  bg: 'white',
})

export const FirstRight = styled('img', {
	...FirstRightStyle,
  objectFit: 'cover'
})

export const ZhiYeItems = styled('div', {
  position: 'relative',
  h: 42,
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'space-between',
  p: '0 20px',
  bg: '$w',
  borderRadius: 2,
  userSelect: 'none',
  '&:hover': {
    bg: '$primary',
  },
})

export const ZhiYeItemsWrapLeft = styled('div', {
	flex: 1,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden'
})

export const ZhiYeItemsLeftListContainer = styled('div', {
	display: 'flex', 
	flexDirection: 'row', 
	flex: 1, 
	overflow: 'hidden'
})

export const ZhiYeItemsRight = styled('div', {
  position: 'absolute',
  w: 618,
  p: '30px 30px 10px 30px',
  left: 484,
  bg: '$w',
  borderRadius: 2,
  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
})

export const FoldBtn = styled('div', {
  color: '$primary',
  ff: '$fr',
  mt: 15,
  ml: 20,
  userSelect: 'none',
})

export const ItemsHead = styled('div', {
  fs: 18,
  fw: 600,
  whiteSpace: 'nowrap',
  variants: {
    active: {
      true: {
        color: '$w',
      },
      false: {
        color: '#3C4441',
      },
    },
  },
})

export const ItemRightText = styled('div', {
  fs: 14,
  ml: 20,
  ff: '$fr',
  flexShrink: 0,
  variants: {
    active: {
      true: {
        color: '$w',
      },
      false: {
        color: '#616A67',
      },
    },
  },
})

export const Flex = styled('div', {
  display: 'flex',
})

export const BottomLine = styled('div', {
  borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
  ml: 20,
  w: 444,
  h: 0,
})

const PartTitleWrap = styled('div', {
  fs: 26,
  ff: '$fr',
  color: '#3C4441',
  mt: 40,
  flexDirectionCenter: 'column',
})

const PrimaryBottomLine = styled('div', {
  w: 60,
  borderBottom: '1px solid $primary',
  h: 0,
  mt: 5,
  mb: 30,
})

export const PartTitle = ({text}: any) => {
  return (
    <PartTitleWrap>
      {text} <PrimaryBottomLine></PrimaryBottomLine>
    </PartTitleWrap>
  )
}

export const ReZhaoWrap = styled('div', {
  w: 1184,
  m: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
})

export const ReZhaoItemWrap = styled('div', {
  w: 384,
  h: 188,
  mt: 16,
  borderRadius: 2,
  bg: '$w',
  p: '20px 18px 20px 20px',
  '&:hover': {
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  },
  userSelect: 'none',
})

export const ReZhaoZhiYe = styled('div', {
  fw: 600,
  fs: 18,
  variants: {
    active: {
      true: {
        color: '$primary',
      },
      false: {
        color: '#3C4441',
      },
    },
  },
})
export const ReZhaoPrice = styled('div', {
  color: '#FF6500',
  fw: 600,
  fs: 18,
})
export const ReZhaoFirstLine = styled('div', {
  display: 'flex',
  mb: 14,
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const ReZhaoArrayText = styled('div', {
  color: '#616A67',
  fs: 14,
  fw: 400,
  lineHeight: '20px',
})
export const ReZhaoBottomPart = styled('div', {
  mt: 21,
  borderTop: '1px dashed rgba(0,0,0,0.1)',
  pt: 20,
  display: 'flex',
})
export const ReZhaoBottomRightPart = styled('div', {
  ml: 10,
})

export const ReMenQiYeItemWrap = styled('div', {
  w: 284,
  h: 281,
  bg: '$w',
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: 30,
  '&:hover': {
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  },
  mb: 20,
  userSelect: 'none',
})

export const ReMenQiYeBtn = styled('div', {
  mt: 30,
  border: '1px solid rgba(0,0,0,0.1)',
  w: 224,
  h: 46,
  fs: 18,
  ff: '$fr',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ZhiChangItemWrap = styled('div', {
  w: 384,
  h: 310,
  bg: '$w',
  p: '20px 22px 20px 20px',
  mt: 16,
  '&:hover': {
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  },
})

export const ZhiChangLongItemWrap = styled('div', {
  w: 1184,
  h: 180,
  p: 20,
  bg: '$w',
  mt: 16,
  display: 'flex',
})

export const ZCRightWrap = styled('div', {
  w: 786,
  ml: 16,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})
