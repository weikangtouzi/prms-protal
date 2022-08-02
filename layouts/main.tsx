import Head from 'next/head'
import Script from 'next/script'

export default function MainLayout({children}: any) {
  return (
    <>
      <Head>
        <title>趁早找</title>
        <meta name='description' content='趁早找' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content={'width=1184, user-scalable=no'} />
      </Head>
      <Script src='//at.alicdn.com/t/font_2924631_pi79zozwhfd.js' />
      <main>{children}</main>
    </>
  )
}
