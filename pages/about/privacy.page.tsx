import Image from 'next/image'
import {Main} from '../components/styled'
import {styled} from '@/stitches.config'
import AboutLeftMenu from './components/about-left-menu'

const Flex = styled('div', {
  display: 'flex',
})

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
const companyName = '趁早找隐私政策'
const companyText =
  '【更新日期: 2021年3月10日】\n尊敬的用户，我们对《趁早找用户协议》进行了更新，此版本主要更新内容涉及趁早找通用账号规则、候选人简历及付费服务相关问题、推广营销相关规则等内容，请您仔细阅读更新后的条款。\n正文:\n《趁早找网用户协议》(以 下简称“本协议”)作为趁早找网(以下简称“本网站”)提供服务的依据，确定用户在何种条件、以何种方式使用本网站及本网站的服务(具体载体包括但不限于网页、APP应用程序、微信公众号平台、微信小程序等)。请您认真阅读本协议(尤其是字体加粗 及/或下划线的内容)_ ,， 当您点击“注册”或者“登录”或其他方式确认即表示您已经仔细阅读并完全理解、同意本协议项下的全部条款;如您对本协议的任何条款表示异议，您应当立即停止访问趁早找网及使用相关服务。用户根据自身需求可以向本平台购买付费服务/产品，相关服务/产品的部分或全部利用本网站所提供的互联网信息业务和增值业务，在遵守本用户协议的规定基础上还需遵守《趁早找网在 线增值服务协议》(适用于在线 支付购买的产品)、服务合同等付费服务涉及的特殊条款;您应当在购买前认真阅读，一旦购买付费服务即视为接受相关条款。\n本协议包括基于本协议制定的各项规则，所有规则为本协议不可分割的一部分，与本协议具有同等效力。随着平台业务经营的发展及相关政策的变更，本网站用户协议将不时更新，我们会通过在网站公告、APP端推送、电子邮件等适当方式提醒您相关内容的更新。您也可以随时访问我们的用户协议页面(https://chenzaozhao.com/about/privacy)来获知最新版本。当您继续使用本网站及相关服务，则视为您接受协议的变更，否则您应当停止访问网站及使用服务。'

export default function About() {
  return (
    <Main css={{pt: 16, bg: '#F5F6F8'}}>
      <Flex>
        <AboutLeftMenu />
        <Flex
          css={{
            w: 884,
            ml: 16,
            flexDirection: 'column',
            p: 40,
            bg: '$w',
            mb: 114,
            color: '#3C4441',
            ff: '$fr',
            whiteSpace: 'break-spaces',
            lineHeight: '30px',
          }}
        >
          <Flex css={{fs: 24, fw: 600, mb: 40}}>隐私政策</Flex>
          {companyName}
          <Flex css={{mt: 20, mb: 20}}>
            {/*<Image src={imgUrl} width={804} height={350} alt='h' />*/}
          </Flex>
          {companyText}
        </Flex>
      </Flex>
    </Main>
  )
}
