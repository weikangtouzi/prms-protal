import Footer from './footer';
import MainLayout from './mainLayout';

import styles from './layout.module.css';

export default function Layout({ children }: any) {
    return (
        <MainLayout>
            <main>{children}</main>
            <Footer />
        </MainLayout>
    );
}
