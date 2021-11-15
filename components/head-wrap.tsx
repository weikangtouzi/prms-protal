import Head from 'next/head';
import Script from 'next/script';

export default function HeadWrap() {
    return (
        <>
            <Head>
                <title>趁早找</title>
                <meta name='description' content='趁早找' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Script src='//at.alicdn.com/t/font_2924631_ubh0frx0gd.js' />
        </>
    );
}
