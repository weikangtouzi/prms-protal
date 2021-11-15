import HeadWrap from './head-wrap';

export default function MainLayout({ children }: any) {
    return (
        <>
            <HeadWrap />
            <main>{children}</main>
        </>
    );
}
