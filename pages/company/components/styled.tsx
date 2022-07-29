import {styled} from '@/stitches.config'

export const JudgeStarWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fs: 16,
  ff: '$fr',
  color: '#616A67',
})

export const OrangeNumWrap = styled('div', {
  color: '#FF6500',
  ff: '$system',
  fw: 600,
  fs: 16,
})

export const StarItem = styled('div', {
  variants: {
    size: {
      large: {
        mr: 14,
      },
      small: {
        mr: 5,
      },
    },
  },
})

export const TabItemWrap = styled('div', {
  fs: 18,
  mr: 82,
  pb: 16,
  userSelect: 'none',
  variants: {
    active: {
      true: {
        color: '$primary',
        fw: 600,
        ff: '$system',
        borderBottom: '2px solid $primary',
      },
      false: {
        color: '#3C4441',
        ff: '$fr',
        borderBottom: '2px solid transparent',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const BtnWrap = styled('div', {
  color: '$primary',
  fs: 16,
  textDecoration: 'underline',
  float: 'right',
  clear: 'both',
  userSelect: 'none',
  ml: 10,
})

export const ExpandContextWrap = styled('div', {
  fs: 16,
  ff: '$fr',
  color: '#3C4441',
  lineHeight: '26px',
  mt: 13,
  mb: 17,
})

export const ExpandBtnWrap = styled('div', {
  color: '$primary',
  fs: 16,
  textDecoration: 'underline',
  userSelect: 'none',
  ml: 10,
  display: 'inline',
})

export const Flex = styled('div', {
  display: 'flex',
})

export const TitleText = styled('div', {
  color: '#3C4441',
  fs: 30,
  fw: 600,
  flexShrink: 0,
})

export const ContextWrap = styled('div', {
  fs: 16,
  ff: '$fr',
  color: '#3C4441',
  lineHeight: '26px',
  mt: 13,
  mb: 17,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 3,
  '-webkit-box-orient': 'vertical',
  position: 'relative',
  textAlign: 'justify',

  '&::before': {
    content: '',
    height: 52,
    float: 'right',
  },
  '&::after': {
    content: '',
    width: '999vw',
    height: '999vw',
    position: 'absolute',
    bg: '$w',
  },
})

export const Main = styled('main', {
  minWidth: 1184,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  bg: '#EFF2F1',
})

export const CompanyHead = styled('div', {
  w: 1184,
  h: 130,
  m: 'auto',
  p: '30px 0',
})

export const LeftWrap = styled('div', {
  w: 884,
})

export const TabWrap = styled('div', {
  bg: '$w',
  display: 'flex',
  p: '17px 0 0 40px',
})

export const RightWrap = styled('div', {
  w: 284,
  ml: 16,
  bg: '$w',
  p: 20,
  borderRadius: 2,
})

export const CompanyBodyWrap = styled('div', {
  bg: '#F5F6F8',
  pt: 16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

export const JobItemWrap = styled('div', {
  w: 884,
  h: 98,
  p: 20,
  bg: '$w',
  mt: 16,
  position: 'relative',
  borderRadius: 2,
})

export const JobItemHoverDiv = styled('div', {
  position: 'absolute',
  bg: '$w',
  right: 0,
  top: 0,
  zIndex: 2,
})

export const OutlinedText = styled('label', {
  color: '#616A67',
  fs: 16,
  fw: 400,
  ff: '$fr',
  textDecoration: 'underline',
})
export const RealInput = styled('input', {
  display: 'none',
})

export const FindJobItemWrap = styled('div', {
  w: 884,
  h: 161,
  p: 20,
  bg: '$w',
  mt: 16,
  position: 'relative',
  borderRadius: 2,
})

export const FindCompanyContainer = styled('div', {
	width: 1184,
	m: 'auto',
	marginTop: '16px',

	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
})

export const FindCompanyItemWrap = styled('div', {
	bg: '$w',
	borderRadius: 2,
	width: 'calc((100% - 3 * 1%) / 4.0)',
	marginBottom: '16px',
	paddingTop: '30px',
	paddingBottom: '30px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
})

export const FindCompanyItemImage = styled('img', {
	width: '70px',
	height: '70px',
	'object-fit': 'contain'
})

export const FindCompanyItemTitle = styled('div', {
	marginTop: '20px',
	color: '#3C4441',
	fontSize: '18px'
})

export const FindCompanyItemDetail = styled('div', {
	marginTop: '10px',
	color: '#616A67',
	fontSize: '14px'
})

export const FindCompanyItemButtonContainer = styled('div', {
	border: '1px solid #00000010',
	marginTop: '30px',
	padding: '10px 40px',
	color: '#000000',
	fontSize: '18',
})

export const FindCompanyItemButtonTitleSelected = styled('span', {
	color: '#00DA8A',
})

