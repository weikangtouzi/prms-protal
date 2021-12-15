import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {IdProvider} from '@radix-ui/react-id'
import {ApolloProvider} from '@apollo/client'
import {getApolloClient} from '../apollo'
import '../styles/globals.css'
import Layout from '@/layouts'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function getLayoutDefault(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getLayoutDefault
  const client = getApolloClient()

  return (
    <ApolloProvider client={client}>
      <IdProvider>{getLayout(<Component {...pageProps} />)} </IdProvider>
    </ApolloProvider>
  )
}
