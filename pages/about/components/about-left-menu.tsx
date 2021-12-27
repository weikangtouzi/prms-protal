import {useRouter} from 'next/router'
import {styled} from '@/stitches.config'

const Flex = styled('div', {
  display: 'flex',
})
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

export default function AboutLeftMenu() {
  const router = useRouter()
  return (
    <Flex css={{w: 284, flexDirection: 'column'}}>
      {list.map((li) => (
        <Flex
          key={li.url}
          onClick={() => {
            router.push(li.url)
          }}
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
  )
}
