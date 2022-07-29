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
  	<>
	    {
	  		getLayout(
	  			<Component {...pageProps} />
	  		)
	  	}
	    <HTToast ref={ref => { global.Toast = ref }} />
	    <HTHud ref={ref => { global.Hud = ref }} />
    </>
  )
}
