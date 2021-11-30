import { styled } from '../stitches.config';
import { useState } from 'react';
import Image from 'next/image';
import Icon from './icon';
import PrimaryButton from './primary-button';

const JudgeStarWrap = styled('div', {
    display: 'flex',
    alignItems: 'center',
    fs: 16,
    ff: '$fr',
    color: '#616A67',
});

const OrangeNumWrap = styled('div', {
    color: '#FF6500',
    ff: '$system',
    fw: 600,
    fs: 16,
});

const StarItem = styled('div', {
    variants: {
        size: {
            large: {
                mr: 14,
            },
            small: {
                mr: 5,
            },
        },
    },
});

interface JuSProps {
    starNum: number;
    label: string;
    size?: 'large' | 'small';
}
export function JudgeStar({ starNum, label, size = 'small' }: JuSProps) {
    const stars = [0, 0, 0, 0, 0];

    const n = starNum.toFixed(1).toString();

    return (
        <JudgeStarWrap>
            {label}
            {stars.map((s, idx) => (
                <StarItem key={idx} size={size}>
                    {size === 'large' ? (
                        <Icon name={idx < starNum ? 'icon-icon_pingfenda' : 'icon-icon_weipingfenda'} />
                    ) : (
                        <Icon withClassName={false} css={{ size: 24 }} name={idx < starNum ? 'icon-icon_pingfenxiao' : 'icon-icon_weipingfenxiao'} />
                    )}
                </StarItem>
            ))}
            <OrangeNumWrap>{n}</OrangeNumWrap>
        </JudgeStarWrap>
    );
}

interface TabProps {
    title: string;
    active: boolean;
    onClick: any;
    css?: any;
}

const TabItemWrap = styled('div', {
    fs: 18,
    mr: 82,
    pb: 16,
    userSelect: 'none',
    variants: {
        active: {
            true: {
                color: '$primary',
                fw: 600,
                ff: '$system',
                borderBottom: '2px solid $primary',
            },
            false: {
                color: '#3C4441',
                ff: '$fr',
                borderBottom: '2px solid transparent',
            },
        },
    },
    defaultVariants: {
        active: false,
    },
});

export function TabItem({ title, active, css = {}, onClick }: TabProps) {
    return (
        <TabItemWrap onClick={onClick} css={css} active={active}>
            {title}
        </TabItemWrap>
    );
}

const BtnWrap = styled('div', {
    color: '$primary',
    fs: 16,
    textDecoration: 'underline',
    float: 'right',
    clear: 'both',
    userSelect: 'none',
    ml: 10,
});

const ExpandContextWrap = styled('div', {
    fs: 16,
    ff: '$fr',
    color: '#3C4441',
    lineHeight: '26px',
    mt: 13,
    mb: 17,
});

const ExpandBtnWrap = styled('div', {
    color: '$primary',
    fs: 16,
    textDecoration: 'underline',
    userSelect: 'none',
    ml: 10,
    display: 'inline',
});

export const FlexDiv = styled('div', {
    display: 'flex',
});

export const TitleText = styled('div', {
    color: '#3C4441',
    fs: 30,
    fw: 600,
    flexShrink: 0,
});

interface CProps {
    item: any;
}
const ContextWrap = styled('div', {
    fs: 16,
    ff: '$fr',
    color: '#3C4441',
    lineHeight: '26px',
    mt: 13,
    mb: 17,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    position: 'relative',
    textAlign: 'justify',

    '&::before': {
        content: '',
        height: 52,
        float: 'right',
    },
    '&::after': {
        content: '',
        width: '999vw',
        height: '999vw',
        position: 'absolute',
        backgroundColor: '$w',
    },
});

export function CommentItem({ item }: CProps) {
    const [expand, setExpand] = useState(false);
    const { id, img, name, position, tags = [], context, time, thumbed, thumbNum } = item;
    return (
        <FlexDiv key={id} css={{ borderTop: '1px dashed  rgba(0, 0, 0, 0.1)', pt: 19, mt: 22, alignItems: 'flex-start' }}>
            <Image alt='name' className='use-image-round' width={48} height={48} src={img} />
            <FlexDiv css={{ w: 747, ml: 9, flexDirection: 'column' }}>
                <FlexDiv css={{ w: '100%', justifyContent: 'space-between' }}>
                    <TitleText css={{ fs: 16, fw: 400, ff: '$fr' }}>{name}</TitleText>
                    <TitleText css={{ fs: 16, fw: 400, ff: '$fr' }}>面试职位：{position}</TitleText>
                </FlexDiv>
                <FlexDiv>
                    {tags.map((t: string) => (
                        <FlexDiv css={{ borderRight: 4, border: '1px solid rgba(0, 0, 0, 0.1)', p: '7px 16px', mr: 10, mt: 14, fs: 14, color: '#616A67' }} key={t}>
                            {t}
                        </FlexDiv>
                    ))}
                </FlexDiv>
                {expand ? (
                    <ExpandContextWrap>
                        {context}
                        <ExpandBtnWrap
                            onClick={() => {
                                setExpand(false);
                            }}>
                            收起
                        </ExpandBtnWrap>
                    </ExpandContextWrap>
                ) : (
                    <ContextWrap>
                        <BtnWrap
                            onClick={() => {
                                setExpand(true);
                            }}>
                            展开
                        </BtnWrap>
                        {context}
                    </ContextWrap>
                )}

                <FlexDiv css={{ w: '100%', justifyContent: 'space-between' }}>
                    <TitleText css={{ fs: 16, fw: 400, ff: '$fr' }}>{time}</TitleText>
                    <TitleText css={{ fs: 14, fw: 400, ff: '$fr', color: '$primary' }}>
                        <Icon name={thumbed ? 'icon-icon_dianzan' : 'icon-icon_weidianzan'} />
                        {thumbNum}
                    </TitleText>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
}

export const Main = styled('main', {
    minWidth: 1184,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#EFF2F1',
});

export const CompanyHead = styled('div', {
    w: 1184,
    h: 130,
    margin: 'auto',
    p: '30px 0',
});

export const LeftWrap = styled('div', {
    w: 884,
});

export const TabWrap = styled('div', {
    backgroundColor: '$w',
    display: 'flex',
    p: '17px 0 0 40px',
});

export const RightWrap = styled('div', {
    w: 284,
    ml: 16,
    backgroundColor: '$w',
    p: 20,
    borderRadius: 2,
});

export const CompanyBodyWrap = styled('div', {
    backgroundColor: '#F5F6F8',
    pt: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
});

const JobItemWrap = styled('div', {
    w: 884,
    h: 98,
    p: 20,
    backgroundColor: '$w',
    mt: 16,
    position: 'relative',
    borderRadius: 2,
});

interface JobIProps {
    item: any;
}

const JobItemHoverDiv = styled('div', {
    position: 'absolute',
    backgroundColor: '$w',
    right: 0,
    top: 0,
    zIndex: 2,
});

export function JobItem({ item }: JobIProps) {
    const { job, subs, money, time, subscribed, jobTitle, details, location, img } = item;
    const [active, setActive] = useState(false);

    return (
        <JobItemWrap
            css={active ? { boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)' } : {}}
            onMouseMove={() => {
                setActive(true);
            }}
            onMouseLeave={() => {
                setActive(false);
            }}>
            <FlexDiv css={{ justifyContent: 'space-between' }}>
                <TitleText css={active ? { fs: 18, color: '$primary' } : { fs: 18 }}>{job}</TitleText>
                <TitleText css={{ color: '#FF6500', fs: 18 }}>{money}</TitleText>
            </FlexDiv>
            <FlexDiv css={{ justifyContent: 'space-between', mt: 13 }}>
                <TitleText css={{ fs: 14, fw: 400, color: '#616A67' }}>{subs}</TitleText>
                <TitleText css={{ fs: 14, fw: 400, color: '#616A67' }}>{time}</TitleText>
            </FlexDiv>
            {active ? (
                <JobItemHoverDiv>
                    <FlexDiv css={{ backgroundColor: '#EFF2F1', w: 625, p: '30px 40px', justifyContent: 'space-between' }}>
                        <FlexDiv css={{ flexDirection: 'column' }}>
                            <FlexDiv>
                                <TitleText css={{ fs: 18 }}>{jobTitle}</TitleText>
                                <TitleText css={{ color: '#FF6500', fs: 18 }}>{money}</TitleText>
                            </FlexDiv>
                            <TitleText css={{ fs: 18, fw: 400, mt: 10 }}>{subs}</TitleText>
                        </FlexDiv>
                        <FlexDiv css={{ alignItems: 'center' }}>
                            <Icon name={subscribed ? 'icon-ico_shoucangoff' : 'icon-ico_shoucangon'} />
                            <TitleText css={{ fs: 18, color: '$primary', ml: 10, mr: 20 }}>收藏</TitleText>
                            <PrimaryButton onClick={() => {}} text='投简历' css={{ w: 120, h: 54, mt: 0 }} />
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv css={{ p: '20px 40px', w: 625 }}>
                        <FlexDiv css={{ color: '#3C4441', fs: 18, ff: '$fr', flexDirection: 'column', borderBottom: '1px dashed rgba(0, 0, 0, 0.1)' }}>
                            <FlexDiv>职位描述：</FlexDiv>
                            <FlexDiv css={{ mt: 10, w: 545, whiteSpace: 'break-spaces', mb: 20 }}>{details}</FlexDiv>
                        </FlexDiv>
                    </FlexDiv>

                    <FlexDiv css={{ justifyContent: 'space-between', backgroundColor: '$w', p: '20px 40px', alignItems: 'center' }}>
                        <FlexDiv css={{ flexDirection: 'column', fs: 18, color: '#3C4441' }}>
                            工作地点 <FlexDiv css={{ fs: 14, mt: 10 }}>{location}</FlexDiv>
                        </FlexDiv>
                        <FlexDiv>
                            <FlexDiv css={{ flexDirection: 'column', fs: 18, color: '#3C4441', alignItems: 'flex-end', justifyContent: 'center', mr: 17 }}>
                                APP扫码 <FlexDiv css={{ fs: 14, mt: 10 }}>聊一聊</FlexDiv>
                            </FlexDiv>
                            <Image alt='ewm' width={76} height={76} src={img} />
                        </FlexDiv>
                    </FlexDiv>
                </JobItemHoverDiv>
            ) : null}
        </JobItemWrap>
    );
}
