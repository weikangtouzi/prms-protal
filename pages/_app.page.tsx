import type {ReactElement, ReactNode} from 'react'
import {useEffect} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {IdProvider} from '@radix-ui/react-id'
import '../styles/globals.css'
import Layout from '@/layouts'
import HTGlobalTool from '@/common/global/HTGlobalTool'
HTGlobalTool
import HTToast from '@/components/modal/HTToast'
import HTHud from '@/components/modal/HTHud'
import {ConfigProvider} from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/lib/locale/zh_CN'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

import HTAuthManager from '@/common/auth/common/model/HTAuthManager'

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
	useEffect(() => {
		let socket
		let callback = () => {
			socket && socket.close()
			socket = null

			const token = HTAuthManager.syncReadKeyValueList()?.userToken
			if ((token?.length ?? 0) <= 0) {
				return
			}
			socket = new WebSocket(process.env.NEXT_PUBLIC_URI.replace('https', 'wss') + '/ws', [
				'graphql-ws',
				'graphql-transport-ws',
			])
			socket.onopen = () => {
				const value = JSON.stringify({type: 'connection_init', payload: {Authorization: token}})
				socket.send(value)
			}
		}
		HTAuthManager.userTokenDidChangeListener.push(callback)
		callback()
	}, [])

	const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

	return (
		<ConfigProvider locale={locale}>
			{getLayout(<Component {...pageProps} />)}
			<HTToast
				ref={(ref) => {
					global.Toast = ref
				}}
			/>
			<HTHud
				ref={(ref) => {
					global.Hud = ref
				}}
			/>
		</ConfigProvider>
	)
}
