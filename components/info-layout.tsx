import { styled } from '../stitches.config';
import Layout from './layout';
import LeftMenu from './left-menu';

const Main = styled('main', {
    minHeight: 'calc(100vh - 395px)',
    minWidth: 1184,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5F6F8',
});

export default function InfoLayout({ children }: any) {
    return (
        <Layout>
            <Main>
                <LeftMenu />
                {children}
            </Main>
        </Layout>
    );
}
