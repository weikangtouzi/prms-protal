import Image from 'next/image';
import Link from 'next/link';
import { styled } from '../stitches.config';

const links = [
    { title: '首页', href: '/' },
    { title: '找工作', href: '/job' },
    { title: '招聘会', href: '/recruitment' },
    { title: '找企业', href: '/company' },
    { title: '找资讯', href: '/news' },
];

const LinkButton = styled('div', {
    w: '104px',
    color: '$w',
    fontFamily: '$fang',
    fontSize: '$14',
    opacity: 0.65,
    paddingLeft: '24px',
});

const NavWrap = styled('div', {
    h: '65px',
    w: '100%',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(0, 21, 41, 100)',
    display: 'flex',
    alignItems: 'center',
    p: '0 114px',
    justifyContent: 'space-between',
});

const PlainDiv = styled('div', {
    display: 'flex',
    alignItems: 'center',
});

const DLink = styled(LinkButton, {
    opacity: 1,
    p: 0,
    marginLeft: '5px',
    width: 'auto',
});

const Divider = styled('span', {
    color: '$w',
    fontSize: '$16',
    m: '5px',
    lineHeight: '17px',
    verticalAlign: 'bottom',
});

const Notify = styled('div', {
    mr: '20px',
    display: 'flex',
    alignItems: 'center',
});

const LogoDiv = styled(Notify, {
    marginRight: '40px',
});

export default function Navbar() {
    return (
        <NavWrap>
            <PlainDiv>
                <LogoDiv>
                    <Image src='/logo.png' alt='Logo' width={120} height={32} />
                </LogoDiv>
                {links.map((l) => (
                    <LinkButton key={l.title}>
                        <Link href={l.href}>{l.title}</Link>
                    </LinkButton>
                ))}
            </PlainDiv>
            <PlainDiv>
                <Notify>
                    <Image src='/notification.svg' alt='notification' width={20} height={20} />
                </Notify>
                <Image src='/empty-user.svg' alt='user' width={30} height={30} />
                <DLink>
                    <Link href='/login'>
                        <a>
                            登录
                            <Divider>|</Divider>
                            注册
                        </a>
                    </Link>
                </DLink>
            </PlainDiv>
        </NavWrap>
    );
}
