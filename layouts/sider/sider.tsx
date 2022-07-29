import {useState} from 'react'
import {useRouter} from 'next/router'
import {styled} from '@/stitches.config'
import Icon from '@/components/icon'

const LeftMenuWrap = styled('div', {
  w: 284,
  pt: 20,
  bg: '$w',
  mt: 16,
  pb: 30,
})

const MenuTitle = styled('div', {
  color: '#8C9693',
  fs: 24,
  fw: 600,
  ml: 20,
  mb: 44,
})

const routes = [
  {
    title: '个人信息',
    url: '/me',
    sub: [
      {title: '基本信息', url: '/me'},
      {title: '账号安全', url: '/me/security'},
      {title: '操作记录', 
      	// url: '/me/logs'
    	},
    ],
  },
  {
    title: '求职管理',
    // url: '/submission',
    sub: [{title: '投递记录', url: '/submission'}],
  },
  {
    title: '我的收藏',
    // url: '/collections',
    sub: [
      {title: '收藏的职位', url: '/collections'},
      {title: '收藏的企业', url: '/collections/company'},
    ],
  },
  {
    title: '资产管理',
    // url: '/assets',
    sub: [
      {title: '我的钱包', url: '/assets'},
      {title: '银行卡', url: '/assets/cards'},
    ],
  },
  {
    title: '系统通知',
    // url: '/settings',
    sub: [{title: '消息中心', url: '/settings'}],
  },
]

const ChildItem = styled('div', {
  userSelect: 'none',
  ml: 40,
  fs: 16,
  w: 226,
  h: 42,
  pl: 23,
  lineHeight: '42px',
  variants: {
    active: {
      true: {
        color: '$primary',
        bg: '#F2F7F5',
      },
      false: {
        color: '#3C4441',
        bg: '$w',
      },
    },
  },
})

const FatherItemWrap = styled('div', {
  fs: 18,
  color: '#3C4441',
  fw: 600,
  ml: 40,
  mr: 18,
  mb: 10,
  mt: 23,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
})

interface MenuItem {
  title: string
  url: string
  sub?: MenuItem[]
}

function FatherItem({title, active = false, sub = []}: {title: string; active: boolean; sub: MenuItem[]}) {
  const [ac, setAc] = useState(active)
  const router = useRouter()
  const {pathname} = router

  return (
    <>
      <FatherItemWrap onClick={() => setAc(!ac)}>
        {title}
        {ac ? <Icon name='icon-icon_shangla' /> : <Icon name='icon-icon_xialaxuanxiang2' />}
      </FatherItemWrap>
      {ac
        ? sub.map((c) => (
            <ChildItem
              onClick={() => {
              	if (!c.url || !active) {
              		global.TODO_TOAST()
              		return
              	}
                router.push(c.url)
              }}
              key={c.title}
              active={pathname === c.url}
            >
              {c.title}
            </ChildItem>
          ))
        : null}
    </>
  )
}

export default function LeftMenu() {
  const router = useRouter()
  const {pathname} = router

  return (
    <LeftMenuWrap>
      <MenuTitle>用户中心</MenuTitle>
      {routes.map((mu) => (
        <FatherItem title={mu.title} key={mu.title} active={pathname.includes(mu.url)} sub={mu.sub} />
      ))}
    </LeftMenuWrap>
  )
}
