import Image from 'next/image'
import {useRouter} from 'next/router'
import {styled} from '@/stitches.config'
import {Main} from '../components/styled'

const Flex = styled('div', {
  display: 'flex',
})

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
const companyName = '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展》'
const companyText =
  '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》'

const list = [
  {
    title: '关于我们',
    url: '/about',
  },
  {
    title: '用户协议',
    url: '/about/agreement',
  },
  {
    title: '隐私政策',
    url: '/about/privacy',
  },
]

export default function About() {
  const router = useRouter()
  return (
    <Main css={{pt: 16, bg: '#F5F6F8'}}>
      <Flex>
        <Flex css={{w: 284, flexDirection: 'column'}}>
          {list.map((li) => (
            <Flex
              onClick={() => {
                router.push(li.url)
              }}
              key={li.url}
              css={{
                mb: 16,
                bg: '$w',
                color: router.pathname === li.url ? '$primary' : '#3C4441',
                fw: 600,
                fs: 18,
                p: '15px 20px',
                userSelect: 'none',
              }}
            >
              {li.title}
            </Flex>
          ))}
        </Flex>
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
          <Flex css={{fs: 24, fw: 600, mb: 40}}>用户协议</Flex>
          {companyName}
          <Flex css={{mt: 20, mb: 20}}>
            <Image src={imgUrl} width={804} height={350} alt='h' />
          </Flex>
          {companyText}
        </Flex>
      </Flex>
    </Main>
  )
}
