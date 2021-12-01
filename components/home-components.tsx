import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { styled } from '../stitches.config';
import Icon from './icon';

export const Main = styled('main', {
    minHeight: '100vh',
    minWidth: 1184,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EFF2F1',
});

export const InputWrap = styled('div', {
    mt: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const RealInput = styled('input', {
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

export const SearchWorldWrap = styled('div', {
    fs: 14,
    color: '#616A67',
    ff: '$fr',
    w: 916,
    display: 'flex',
    mt: 6,
    mb: 20,
});

export const SearchWorldText = styled('div', {
    color: '$primary',
    mr: 15,
    fs: 14,
    ff: '$fr',
});

export const BodyWrap = styled('div', {
    w: '100%',
    backgroundColor: '#F5F6F8',
});

export const FirstWrap = styled('div', {
    mt: 20,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
});

export const FirstLeftWrap = styled('div', {
    w: 484,
    backgroundColor: '$w',
    p: '15px 0 15px',
    boxShadow: ' 0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    marginRight: 700,
});

export const FirstRightWrap = styled('div', {
    ml: 500,
    w: 684,
    h: 364,
    backgroundColor: 'yellow',
});

const ZhiYeItems = styled('div', {
    position: 'relative',
    h: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '0 20px',
    backgroundColor: '$w',
    borderRadius: 2,
    userSelect: 'none',
    '&:hover': {
        backgroundColor: '$primary',
    },
});

const ZhiYeItemsWrapLeft = styled('div', {
    display: 'flex',
    alignItems: 'center',
});

const ZhiYeItemsRight = styled('div', {
    position: 'absolute',
    w: 618,
    p: '30px 30px 10px 30px',
    left: 484,
    backgroundColor: '$w',
    borderRadius: 2,
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
    zIndex: 9,
});

export const FoldBtn = styled('div', {
    color: '$primary',
    ff: '$fr',
    mt: 15,
    ml: 20,
    userSelect: 'none',
});

const ItemsHead = styled('div', {
    fs: 18,
    fw: 600,
    variants: {
        active: {
            true: {
                color: '$w',
            },
            false: {
                color: '#3C4441',
            },
        },
    },
});

const ItemRightText = styled('div', {
    fs: 14,
    ml: 20,
    ff: '$fr',
    flexShrink: 0,
    variants: {
        active: {
            true: {
                color: '$w',
            },
            false: {
                color: '#616A67',
            },
        },
    },
});

const Flex = styled('div', {
    display: 'flex',
});

const BottomLine = styled('div', {
    borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
    ml: 20,
    w: 444,
    h: 0,
});

export const ZItems = ({ item }: any) => {
    const { title, rightText = [], details = [] } = item;
    const [over, setOver] = useState(false);

    return (
        <ZhiYeItems
            onMouseOver={() => {
                setOver(true);
            }}
            onMouseLeave={() => {
                setOver(false);
            }}>
            <ZhiYeItemsWrapLeft>
                <ItemsHead active={over}>{title}&nbsp;&nbsp;|&nbsp;&nbsp;</ItemsHead>
                {rightText.map((r: string) => (
                    <ItemRightText active={over} key={r}>
                        {r}
                    </ItemRightText>
                ))}
            </ZhiYeItemsWrapLeft>
            {over ? <Icon name='icon-icon_xialaxuanxiang-copy' /> : <Icon name='icon-icon_xialaxuanxiang' />}
            {over ? (
                <ZhiYeItemsRight>
                    <ItemsHead>{title}</ItemsHead>
                    {details.map((d: any, index: number) => (
                        <Flex css={{ mt: 15 }} key={d.left}>
                            <ItemRightText css={{ ml: 0, w: 94 }} active={false}>
                                {d.left}
                            </ItemRightText>
                            <Flex css={{ flexDirection: 'column' }}>
                                <Flex css={{ flexWrap: 'wrap' }}>
                                    {d.children.map((c: string) => (
                                        <ItemRightText active={false} css={{ color: '#3C4441', mb: 20 }} key={c}>
                                            {c}
                                        </ItemRightText>
                                    ))}
                                </Flex>
                                {index === details.length - 1 ? null : <BottomLine />}
                            </Flex>
                        </Flex>
                    ))}
                </ZhiYeItemsRight>
            ) : null}
        </ZhiYeItems>
    );
};

const PartTitleWrap = styled('div', {
    fs: 26,
    ff: '$fr',
    color: '#3C4441',
    mt: 40,
    flexDirectionCenter: 'column',
});

const PrimaryBottomLine = styled('div', {
    w: 60,
    borderBottom: '1px solid $primary',
    h: 0,
    mt: 5,
    mb: 30,
});

export const PartTitle = ({ text }: any) => {
    return (
        <PartTitleWrap>
            {text} <PrimaryBottomLine></PrimaryBottomLine>
        </PartTitleWrap>
    );
};

const TabWrap = styled('div', {
    w: 1184,
    h: 60,
    backgroundColor: '$w',
    m: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    pt: 17,
    fs: 18,
});

const TabItem = styled('div', {
    userSelect: 'none',
    variants: {
        active: {
            true: {
                color: '$primary',
                fw: 600,
                ff: '$system',
            },
            false: {
                color: '#616A67',
                fw: 400,
                ff: '$fr',
            },
        },
    },
});

const TabBottomLine = styled('div', {
    h: 2,
    mt: 16,
    variants: {
        active: {
            true: {
                backgroundColor: '$primary',
            },
            false: {
                backgroundColor: '$w',
            },
        },
    },
});

export const Tabs = ({ list, active, onClickItem }: { list: string[]; active: number; onClickItem: (e: any) => void }) => {
    return (
        <TabWrap>
            {list.map((l, idx) => (
                <TabItem
                    active={idx === active}
                    onClick={() => {
                        onClickItem(idx);
                    }}
                    key={l}>
                    {l}
                    <TabBottomLine active={idx === active} />
                </TabItem>
            ))}
        </TabWrap>
    );
};

export const ReZhaoWrap = styled('div', {
    w: 1184,
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
});

const ReZhaoItemWrap = styled('div', {
    w: 384,
    h: 188,
    mt: 16,
    borderRadius: 2,
    backgroundColor: '$w',
    p: '20px 18px 20px 20px',
    '&:hover': {
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
    },
    userSelect: 'none',
});

const ReZhaoZhiYe = styled('div', {
    fw: 600,
    fs: 18,
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
const ReZhaoPrice = styled('div', {
    color: '#FF6500',
    fw: 600,
    fs: 18,
});
const ReZhaoFirstLine = styled('div', {
    display: 'flex',
    mb: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
});
const ReZhaoArrayText = styled('div', {
    color: '#616A67',
    fs: 14,
    fw: 400,
    lineHeight: '20px',
});
const ReZhaoBottomPart = styled('div', {
    mt: 21,
    borderTop: '1px dashed rgba(0,0,0,0.1)',
    pt: 20,
    display: 'flex',
});
const ReZhaoBottomRightPart = styled('div', {
    ml: 10,
});

export const ReZhaoItem = ({ item }: any) => {
    const { zy, price, needs = [], companyImg, companyName, companyNeeds = [] } = item;
    const [active, setActive] = useState(false);
    return (
        <ReZhaoItemWrap
            onMouseMove={() => {
                setActive(true);
            }}
            onMouseLeave={() => {
                setActive(false);
            }}>
            <ReZhaoFirstLine>
                <ReZhaoZhiYe active={active}>{zy}</ReZhaoZhiYe>
                <ReZhaoPrice>{price}</ReZhaoPrice>
            </ReZhaoFirstLine>
            <ReZhaoArrayText>
                {needs.map((n: string, idx: number) => (
                    <span key={n}>
                        {n}
                        {idx === needs.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
                    </span>
                ))}
            </ReZhaoArrayText>
            <ReZhaoBottomPart>
                <Image src={companyImg} alt='ht' width={48} height={48} />
                <ReZhaoBottomRightPart>
                    <ReZhaoArrayText css={{ fs: 16, color: '#3C4441', mb: 5 }}>{companyName}</ReZhaoArrayText>
                    <ReZhaoArrayText>
                        {companyNeeds.map((n: string, idx: number) => (
                            <span key={n}>
                                {n}
                                {idx === companyNeeds.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
                            </span>
                        ))}
                    </ReZhaoArrayText>
                </ReZhaoBottomRightPart>
            </ReZhaoBottomPart>
        </ReZhaoItemWrap>
    );
};

const ReMenQiYeItemWrap = styled('div', {
    w: 284,
    h: 281,
    backgroundColor: '$w',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: 30,
    '&:hover': {
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
    },
    mb: 20,
    userSelect: 'none',
});

const ReMenQiYeBtn = styled('div', {
    mt: 30,
    border: '1px solid rgba(0,0,0,0.1)',
    w: 224,
    h: 46,
    fs: 18,
    ff: '$fr',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const ReMenQiYeItem = ({ item, css }: any) => {
    const router = useRouter();
    const { img, name, needs = [], peopleNum, id } = item;
    const [active, setActive] = useState(false);
    return (
        <ReMenQiYeItemWrap
            css={css}
            onClick={() => {
                console.log('click item');
                router.push(`/company/${id}`);
            }}
            onMouseMove={() => {
                setActive(true);
            }}
            onMouseLeave={() => {
                setActive(false);
            }}>
            <Image className='image-4-radius image-shrink' src={img} width={70} height={70} alt='logo' />
            <ReZhaoZhiYe css={{ fw: 400, mt: 20, mb: 10 }} active={active}>
                {name}
            </ReZhaoZhiYe>
            <ReZhaoArrayText>
                {needs.map((n: string, idx: number) => (
                    <span key={n}>
                        {n}
                        {idx === needs.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
                    </span>
                ))}
            </ReZhaoArrayText>
            <ReMenQiYeBtn
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('click btn');
                    router.push({
                        pathname: '/company/' + id,
                        query: {
                            tab: 'zhaopin',
                        },
                    });
                }}>
                <ReZhaoZhiYe css={{ fw: 400 }} active>
                    {peopleNum}&nbsp;
                </ReZhaoZhiYe>
                个热招职位
            </ReMenQiYeBtn>
        </ReMenQiYeItemWrap>
    );
};

const ZhiChangItemWrap = styled('div', {
    w: 384,
    h: 310,
    backgroundColor: '$w',
    p: '20px 22px 20px 20px',
    mt: 16,
    '&:hover': {
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
    },
});

export const ZhiChangItem = ({ item }: any) => {
    const { img, title, content, writer, time } = item;
    return (
        <ZhiChangItemWrap>
            <Image src={img} width={342} height={140} alt='logo' />
            <ReZhaoZhiYe
                css={{ mt: 10, mb: 10, overflow: 'hidden', textOverflow: 'ellipsis', '-webkit-line-clamp': 2, display: '-webkit-box', '-webkit-box-orient': 'vertical' }}>
                {title}
            </ReZhaoZhiYe>
            <ReZhaoArrayText css={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', mb: 20 }}>{content}</ReZhaoArrayText>
            <ReZhaoArrayText css={{ color: 'rgba(0,0,0,0.3)' }}>
                {writer}·{time}
            </ReZhaoArrayText>
        </ZhiChangItemWrap>
    );
};

const ZhiChangLongItemWrap = styled('div', {
    w: 1184,
    h: 180,
    p: 20,
    backgroundColor: '$w',
    mt: 16,
    display: 'flex',
});

const ZCRightWrap = styled('div', {
    w: 786,
    ml: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
});

export const ZhiChangLongItem = ({ item }: any) => {
    const { img, title, content, writer, time } = item;
    return (
        <ZhiChangLongItemWrap>
            <Image className='image-shrink' src={img} width={342} height={140} alt='logo' />
            <ZCRightWrap>
                <div>
                    <ReZhaoZhiYe
                        css={{
                            mb: 8,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            '-webkit-line-clamp': 2,
                            display: '-webkit-box',
                            '-webkit-box-orient': 'vertical',
                        }}>
                        {title}
                    </ReZhaoZhiYe>
                    <ReZhaoArrayText
                        css={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            '-webkit-line-clamp': 3,
                            display: '-webkit-box',
                            '-webkit-box-orient': 'vertical',
                            mb: 15,
                        }}>
                        {content}
                    </ReZhaoArrayText>
                </div>
                <ReZhaoArrayText css={{ color: 'rgba(0,0,0,0.3)' }}>
                    {writer}·{time}
                </ReZhaoArrayText>
            </ZCRightWrap>
        </ZhiChangLongItemWrap>
    );
};
