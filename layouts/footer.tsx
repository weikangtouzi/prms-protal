import Image from 'next/image'
import {styled} from '@/stitches.config'

const FooterWrap = styled('footer', {
  w: '100%',
  h: 335,
  flexDirectionCenter: 'column',
  ff: '$fr',
})

const TopWrap = styled('div', {
  display: 'flex',
  h: 274,
  w: 1184,
  p: '60px 0',
})

const BottomWrap = styled('div', {
  w: 1184,
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#616A67',
  fs: 14,
  display: 'flex',
  h: 60,
  flex: 1,
})

const TopLeftWrap = styled('div', {
  w: 547,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
})
const TopRightWrap = styled('div', {})

const BottomBtn = styled('div', {
  border: '1px solid $primary',
  w: 200,
  h: 46,
  fs: 14,
  color: '$primary',
  textAlign: 'center',
  lineHeight: '46px',
})

const TextWrap = styled('div', {
  color: '#3C4441',
  fs: 18,
  fw: 400,
  mt: 20,
  mb: 32,
})

const FirstLine = styled('div', {
  mb: 30,
})
const FirstLineText = styled('div', {
  w: 192,
  fs: 18,
  color: '#3C4441',
  display: 'inline-block',
})

export default function Footer() {
  return (
    <FooterWrap>
      <TopWrap>
        <TopLeftWrap>
          <Image src='/logo-black.png' alt='ht' width={94.62} height={30.62} />
          <TextWrap>德兴市微康投资发展有限公司</TextWrap>
          <BottomBtn onClick={global.TODO_TOAST}>下载趁早找APP</BottomBtn>
        </TopLeftWrap>
        <TopRightWrap>
          <FirstLine>
            <FirstLineText>企业服务:</FirstLineText>
            <FirstLineText>用户帮助</FirstLineText>
            <FirstLineText>链接方式</FirstLineText>
          </FirstLine>
          <FirstLine css={{mb: 20}}>
            <FirstLineText css={{fs: 14}}>
              <a href='/job' target='_blank' rel='noreferrer'>
                职位搜索
              </a>
            </FirstLineText>
            <FirstLineText css={{fs: 14}}>
              <a href='/about/agreement' target='_blank' rel='noreferrer'>
                用户协议
              </a>
            </FirstLineText>
            <FirstLineText css={{fs: 14, w: 253}}>服务热线：400 1234 56（9:00-18:00）</FirstLineText>
          </FirstLine>
          <FirstLine css={{mb: 20}}>
            <FirstLineText css={{fs: 14}}>
              <a href='/company' target='_blank' rel='noreferrer'>
                公司搜素
              </a>
            </FirstLineText>
            <FirstLineText css={{fs: 14}}>
              <a href='/about/privacy' target='_blank' rel='noreferrer'>
                隐私政策
              </a>
            </FirstLineText>

            <FirstLineText css={{fs: 14, w: 253}}>企业服务邮箱：Wendy@chenzaozhao</FirstLineText>
          </FirstLine>
          <FirstLine>
            <FirstLineText css={{fs: 14}}>
              <a onClick={global.TODO_TOAST} target='_blank' rel='noreferrer'>
                招聘会
              </a>
            </FirstLineText>
            <FirstLineText css={{fs: 14}}>
              <a href='/about' target='_blank' rel='noreferrer'>
                关于我们
              </a>
            </FirstLineText>
          </FirstLine>
        </TopRightWrap>
      </TopWrap>
      <BottomWrap>
        <a target='_blank' rel='noopener noreferrer'>
          Copyright © {new Date().getFullYear()} 德兴市微康投资发展有限公司. All Rights Reserved
        </a>
      </BottomWrap>
      <BottomWrap>
        <a target='_blank' rel='noopener noreferrer'>
          赣ICP备2022011119号 
        </a>
      </BottomWrap>
      <BottomWrap>
        <a href='https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36118102000044' rel='noopener noreferrer'>
          赣公网安备36118102000044号
        </a>
      </BottomWrap>
    </FooterWrap>
  )
}
//  https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134