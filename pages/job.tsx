import type { ReactElement } from 'react';
import Layout from '../components/layout';

export default function Job() {
    return <main>Job</main>;
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
