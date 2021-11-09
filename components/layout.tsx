import Footer from './footer';
import Head from 'next/head';
import Navbar from './navbar';

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>趁早找</title>
                <meta name='description' content='趁早找' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
