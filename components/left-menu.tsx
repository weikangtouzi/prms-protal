import { useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '../stitches.config';
import Icon from '../components/icon';

const LeftMenuWrap = styled('div', {
    w: 284,
    pt: 20,
    backgroundColor: '$w',
    mt: 16,
    pb: 30,
});

const MenuTitle = styled('div', {
    color: '#8C9693',
    fs: 24,
    fw: 600,
    ml: 20,
    mb: 44,
});

const m = [
    {
        title: '个人信息',
        url: '/me',
        sub: [
            {
                title: '基本信息',
                url: '/me',
            },
            {
                title: '账号安全',
                url: '/me/safe',
            },
            {
                title: '操作记录',
                url: '/me/op',
            },
        ],
    },
    {
        title: '求职管理',
        url: '/qz',
        sub: [
            {
                title: '投递记录',
                url: '/qz',
            },
        ],
    },
    {
        title: '我的收藏',
        url: '/sc',
        sub: [
            {
                title: '收藏的职位',
                url: '/sc',
            },
            {
                title: '收藏的企业',
                url: '/sc/qy',
            },
        ],
    },
    {
        title: '资产管理',
        url: '/zc',
        sub: [
            {
                title: '我的钱包',
                url: '/zc',
            },
            {
                title: '银行卡',
                url: '/zc/yhk',
            },
        ],
    },
    {
        title: '系统通知',
        url: '/setting',
        sub: [
            {
                title: '消息中心',
                url: '/setting',
            },
        ],
    },
];

const ChildItem = styled('div', {
    userSelect: 'none',
    ml: 40,
    fs: 16,
    w: 226,
    h: 42,
    pl: 23,
    lineHeight: '42px',
    variants: {
        active: {
            true: {
                color: '$primary',
                backgroundColor: '#F2F7F5',
            },
            false: {
                color: '#3C4441',
                backgroundColor: '$w',
            },
        },
    },
});

const FatherItemWrap = styled('div', {
    fs: 18,
    color: '#3C4441',
    fw: 600,
    ml: 40,
    mr: 18,
    mb: 10,
    mt: 23,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none',
});

interface MenuItem {
    title: string;
    url: string;
    sub?: MenuItem[];
}

function FatherItem({ title, active = false, sub = [] }: { title: string; active: boolean; sub: MenuItem[] }) {
    const [ac, setAc] = useState(active);
    const router = useRouter();
    const { pathname } = router;

    return (
        <>
            <FatherItemWrap onClick={() => setAc(!ac)}>
                {title}
                {ac ? <Icon name='icon-icon_shangla' /> : <Icon name='icon-icon_xialaxuanxiang2' />}
            </FatherItemWrap>
            {ac
                ? sub.map((c) => (
                      <ChildItem
                          onClick={() => {
                              router.push(c.url);
                          }}
                          key={c.title}
                          active={pathname === c.url}>
                          {c.title}
                      </ChildItem>
                  ))
                : null}
        </>
    );
}

export default function LeftMenu() {
    const router = useRouter();
    const { pathname } = router;

    return (
        <LeftMenuWrap>
            <MenuTitle>用户中心</MenuTitle>
            {m.map((mu) => (
                <FatherItem title={mu.title} key={mu.title} active={pathname.includes(mu.url)} sub={mu.sub} />
            ))}
        </LeftMenuWrap>
    );
}
