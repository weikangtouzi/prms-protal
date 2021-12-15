import type {ReactNode} from 'react'
import Footer from './footer'
import Navbar from './navbar'
import MainLayout from './main'

export default function Layout({children}: {children: ReactNode}) {
  return (
    <MainLayout>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </MainLayout>
  )
}
