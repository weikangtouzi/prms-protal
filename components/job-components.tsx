import { styled } from '../stitches.config';
import { useState, useEffect, useRef } from 'react';
import Icon from './icon';

import PrimaryButton from './primary-button';
import PrimarySelect from './primary-select';

const FlexDiv = styled('div', {
    display: 'flex',
});

const InputFilterBtn = styled('div', {
    h: 54,
    w: 140,
    backgroundColor: '$w',
    display: 'flex',
    alignItems: 'center',
    fs: 16,
    color: '#616A67',
    ff: '$fr',
    userSelect: 'none',
    pr: 15,
    variants: {
        active: {
            true: {
                borderTop: '1px solid $primary',
                borderBottom: '1px solid $primary',
            },
            false: {
                borderTop: '1px solid rgba(0,0,0,0.2)',
                borderBottom: '1px solid rgba(0,0,0,0.2)',
            },
        },
    },
});

const InputWrap = styled('div', {
    mt: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    mr: 134,
});

const RealInput = styled('input', {
    borderRight: 'none',
    outline: 'none',
    fs: 16,
    h: 54,
    w: 796,
    p: '16px 20px',
    '&::placeholder': {
        fw: 400,
        opacity: 0.3,
        ff: '$fr',
    },
    variants: {
        active: {
            true: {
                borderTop: '1px solid $primary',
                borderLeft: '1px solid $primary',
                borderBottom: '1px solid $primary',
            },
            false: {
                borderTop: '1px solid rgba(0,0,0,0.2)',
                borderLeft: '1px solid rgba(0,0,0,0.2)',
                borderBottom: '1px solid rgba(0,0,0,0.2)',
            },
        },
    },
});

const defaultList = [
    {
        key: 'nolimit',
        value: '不限',
    },
    {
        key: 'gaoji',
        value: '高级管理',
    },
    {
        key: 'jishu',
        value: '技术',
    },
    {
        key: 'sj',
        value: '设计',
    },
    {
        key: 'yy',
        value: '运营',
    },
    {
        key: 'cxy',
        value: '程序员',
    },
    {
        key: 'boss',
        value: '老板',
    },
];

interface SProps {
    onClickSearch?: any;
    list?: any[];
}

const HangyeWrap = styled(FlexDiv, {
    position: 'absolute',
    backgroundColor: '$w',
    h: 272,
    left: 0,
    top: 54,
    right: 0,
    zIndex: 9,
    overflowY: 'scroll',
    pt: 10,
    pb: 10,
    pl: 30,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
});

export function SearchInput({ onClickSearch, list = defaultList }: SProps) {
    const [active, setActive] = useState(false);
    const [openHy, setOpenHy] = useState(false);
    const [zwValue, setZwValue] = useState('');
    const [hyValue, setHyValue] = useState('');

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenHy(false);
                }
            }

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <InputWrap onClick={onClickSearch}>
            <RealInput
                css={{ w: 660 }}
                onFocus={() => {
                    setActive(true);
                }}
                onBlur={() => {
                    setActive(false);
                }}
                active={active}
                placeholder='搜索职位、公司'
            />
            <InputFilterBtn active={active}>
                |
                <PrimarySelect
                    placeholder='职位类型'
                    css={{ w: 'auto', border: 'none', pl: 20 }}
                    placeholderCss={{ fs: 16, color: '#616A67', ff: '$fr' }}
                    iconName='icon-icon_xialaxuanxiang2'
                    value={zwValue}
                    onSelect={setZwValue}
                />
            </InputFilterBtn>
            <InputFilterBtn
                ref={wrapperRef}
                onClick={() => {
                    setOpenHy(true);
                }}
                active={active}>
                |&nbsp;&nbsp;&nbsp;&nbsp;{hyValue || '公司行业'}
                <Icon name='icon-icon_xialaxuanxiang2' />
                {openHy ? (
                    <HangyeWrap>
                        {list.map((li) => (
                            <HYItem
                                onClick={(e: any) => {
                                    e.stopPropagation();
                                    setHyValue(li.value);
                                    setOpenHy(false);
                                }}
                                defaultActive={hyValue === li.value}
                                key={li.key}>
                                {li.value}
                            </HYItem>
                        ))}
                    </HangyeWrap>
                ) : null}
            </InputFilterBtn>
            <PrimaryButton css={{ w: 120, h: 54, mt: 0, borderRadius: 0 }} text='搜索' />
        </InputWrap>
    );
}

const HYItemWrap = styled(FlexDiv, {
    fs: 16,
    color: '#616A67',
    ff: '$fr',
    w: 190,
    h: 42,
    pl: 20,
    alignItems: 'center',
    variants: {
        active: {
            true: {
                backgroundColor: '#F2F7F5',
            },
            false: {
                backgroundColor: '$w',
            },
        },
    },
    defaultVariants: {
        active: false,
    },
});

interface HYProps {
    children: any;
    defaultActive?: boolean;
    onClick: any;
}

function HYItem({ children, onClick, defaultActive = false }: HYProps) {
    const [active, setActive] = useState(false);

    return (
        <HYItemWrap
            active={active || defaultActive}
            onClick={onClick}
            onMouseMove={() => {
                setActive(true);
            }}
            onMouseLeave={() => {
                setActive(false);
            }}>
            {children}
        </HYItemWrap>
    );
}

interface LProps {
    text: string;
    noIcon?: boolean;
}

const LocationWrap = styled(FlexDiv, {
    fs: 16,
    ff: '$fr',
    alignItems: 'center',
    mr: 14,
    ml: 5,
    variants: {
        active: {
            true: {
                color: '#FF6500',
            },
            false: {
                color: '#616A67',
            },
        },
    },
    defaultVariants: {
        active: false,
    },
});

export function LocationItem({ text, noIcon = false }: LProps) {
    return (
        <FlexDiv>
            <LocationWrap>{text}</LocationWrap>
            {noIcon ? null : <Icon name='icon-icon_xialaxuanxiang' />}
        </FlexDiv>
    );
}

export const HotCity = styled(LocationWrap, {
    fs: 14,
    ml: 20,
    mr: 0,
});
