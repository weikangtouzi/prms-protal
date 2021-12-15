import {styled} from '@/stitches.config'
import Layout from './index'
import LeftMenu from './sider/sider'

const Main = styled('main', {
  minHeight: 'calc(100vh - 395px)',
  minWidth: 1184,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  bg: '#F5F6F8',
})

export default function InfoLayout({children}: any) {
  return (
    <Layout>
      <Main>
        <LeftMenu />
        {children}
      </Main>
    </Layout>
  )
}
