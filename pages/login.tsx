import type { ReactElement } from 'react';
import MainLayout from '../components/mainLayout';
import styles from '../styles/Login.module.css';

export default function Login() {
    return <main className={styles.main}>login page 欢迎使用趁早找</main>;
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

Login.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
