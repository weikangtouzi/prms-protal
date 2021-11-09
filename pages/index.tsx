import type { ReactElement } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { styled } from '../stitches.config';

const Main = styled('main', {
    minHeight: '100vh',
    minWidth: 1184,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
});

export default function Home() {
    return (
        <Main>
            欢迎使用 <a href='https://nextjs.org'>趁早找</a>
        </Main>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return {
        props: {},
    };
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
