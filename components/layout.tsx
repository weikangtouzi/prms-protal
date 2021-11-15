import Footer from './footer';
import Navbar from './navbar';
import MainLayout from './main-layout';

export default function Layout({ children }: any) {
    return (
        <MainLayout>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </MainLayout>
    );
}
