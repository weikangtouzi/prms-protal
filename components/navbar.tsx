import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled } from '../stitches.config';

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    inset: 0,
});

function Root({ children, ...props }: any) {
    return (
        <DialogPrimitive.Root {...props}>
            <StyledOverlay />
            {children}
        </DialogPrimitive.Root>
    );
}

const StyledContent = styled(DialogPrimitive.Content, {
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: 25,
    '&:focus': { outline: 'none' },
});

const StyledTitle = styled(DialogPrimitive.Title, {
    margin: 0,
    fontWeight: 500,
    color: '$primary',
    fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
    margin: '10px 0 20px',
    color: '$primary',
    fontSize: 15,
    lineHeight: 1.5,
});

const Dialog = Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = StyledContent;
const DialogTitle = StyledTitle;
const DialogDescription = StyledDescription;
const DialogClose = DialogPrimitive.Close;

const links = [
    { title: '首页', href: '/' },
    { title: '找工作', href: '/job' },
    { title: '招聘会', href: '/recruitment' },
    { title: '找企业', href: '/company' },
    { title: '找资讯', href: '/news' },
];

const LinkButton = styled('div', {
    w: 100,
    h: 25,
    fs: 18,
    fw: 600,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    variants: {
        active: {
            true: {
                color: '$primary',
            },
            false: {
                color: '#3C4441',
            },
        },
    },
});

const NavWrap = styled('div', {
    h: 60,
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$w',
});

const DLink = styled(LinkButton, {
    opacity: 1,
    p: 0,
    marginLeft: '5px',
    width: 'auto',
});

const Notify = styled('div', {
    ml: 294,
    mr: 6,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
});

const LogoDiv = styled(Notify, {
    ml: 0,
    mr: 25,
    flexShrink: 0,
});

const Flex = styled('div', { display: 'flex' });

export default function Navbar() {
    const [current, setCurrent] = useState(0);

    return (
        <NavWrap>
            <LogoDiv>
                <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
            </LogoDiv>
            <Dialog modal>
                <DialogTrigger asChild>
                    <LinkButton active css={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image src='/dw.png' alt='dw' width={32} height={32} />
                        全国
                    </LinkButton>
                </DialogTrigger>
                <DialogContent
                    onPointerDownOutside={(e) => {
                        e.preventDefault();
                    }}>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here. Click save done.</DialogDescription>
                    <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
                        <DialogClose asChild>Save changes</DialogClose>
                    </Flex>
                    <DialogClose asChild>
                        <Flex>x</Flex>
                    </DialogClose>
                </DialogContent>
            </Dialog>
            {links.map((l, index) => (
                <LinkButton
                    active={index === current}
                    onClick={() => {
                        setCurrent(index);
                    }}
                    css={{ mr: 10 }}
                    key={l.title}>
                    <Link href={l.href}>{l.title}</Link>
                </LinkButton>
            ))}
            <Notify>
                <Image src='/cy-black.png' alt='notification' width={32} height={32} />
            </Notify>
            <Image src='/qyshz.png' alt='user' width={30} height={30} />
            <DLink>
                <Link href='/login'>hhh</Link>
            </DLink>
        </NavWrap>
    );
}
