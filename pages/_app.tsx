import type { ReactElement, ReactNode } from 'react';
import { IdProvider } from '@radix-ui/react-id';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);

    return <IdProvider>{getLayout(<Component {...pageProps} />)} </IdProvider>;
}
