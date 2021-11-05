import type { ReactElement } from 'react';
import Layout from '../components/layout';
import styles from '../styles/News.module.css';

export default function News() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>news</main>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

News.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
