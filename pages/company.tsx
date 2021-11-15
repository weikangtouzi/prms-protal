import type { ReactElement } from 'react';
import Layout from '../components/layout';

export default function Company() {
    return <main>company</main>;
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
