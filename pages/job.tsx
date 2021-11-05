import type { ReactElement } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Job.module.css';

export default function Job() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>Job</main>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

Job.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
