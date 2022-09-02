import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {IdProvider} from '@radix-ui/react-id'
import '../styles/globals.css'
import Layout from '@/layouts'
import HTGlobalTool from '@/common/global/HTGlobalTool'
HTGlobalTool
import HTToast from '@/components/modal/HTToast'
import HTHud from '@/components/modal/HTHud'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/lib/locale/zh_CN'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => (
  	<Layout>
  		{ page }
  	</Layout>
  ))

  return (
  	<ConfigProvider locale={locale}>
	    {
	  		getLayout(
	  			<Component {...pageProps} />
	  		)
	  	}
	    <HTToast ref={ref => { global.Toast = ref }} />
	    <HTHud ref={ref => { global.Hud = ref }} />
    </ConfigProvider>
  )
}
