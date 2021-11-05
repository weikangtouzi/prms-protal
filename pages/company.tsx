import type { ReactElement } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Company.module.css';

export default function Company() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>company</main>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

Company.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
