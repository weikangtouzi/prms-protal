import {createStitches} from '@stitches/react'

export const {styled, getCssText} = createStitches({
  theme: {
    fonts: {
      system: 'PingFangSC-Semibold, PingFang SC;',
      fr: ' PingFangSC-Regular, PingFang SC;',
    },
    colors: {
      primary: '#00DA8A',
      w: 'rgba(255, 255, 255, 100)',
      gray: 'rgba(0,0,0,0.4)',
      dangerous: '#FF0000',
    },
    fontSizes: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      26: '26px',
      28: '28px',
      50: '50px',
    },
  },
  utils: {
    m: (value: any) => ({margin: value}),
    mt: (value: any) => ({marginTop: value}),
    mr: (value: any) => ({marginRight: value}),
    mb: (value: any) => ({marginBottom: value}),
    ml: (value: any) => ({marginLeft: value}),
    mx: (value: any) => ({marginLeft: value, marginRight: value}),
    my: (value: any) => ({marginTop: value, marginBottom: value}),
    p: (value: any) => ({padding: value}),
    pt: (value: any) => ({paddingTop: value}),
    pr: (value: any) => ({paddingRight: value}),
    pb: (value: any) => ({paddingBottom: value}),
    pl: (value: any) => ({paddingLeft: value}),
    px: (value: any) => ({paddingLeft: value, paddingRight: value}),
    py: (value: any) => ({paddingTop: value, paddingBottom: value}),
    size: (value: any) => ({width: value, height: value}),

    w: (value: any) => ({width: value}),
    h: (value: any) => ({height: value}),
    fs: (value: any) => ({fontSize: value}),
    fw: (value: any) => ({fontWeight: value}),
    ff: (value: any) => ({fontFamily: value}),
    bg: (value: any) => ({backgroundColor: value}),

    flexCenter: () => ({display: 'flex', justifyContent: 'center'}),
    flexDirectionCenter: (value: any) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: value,
    }),
  },
})
