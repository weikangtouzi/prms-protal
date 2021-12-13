import type { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import InfoLayout from '../../components/info-layout';
import { styled } from '../../stitches.config';

import Pagination from '../../components/pagination';

const RightWrap = styled('div', {
    w: 884,
    mt: 16,
    ml: 16,
    mb: 135,
});

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';

const tdlist = [
    {
        id: 1,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        money: '15-20K',
        time: '2021-10-01 10:00',
        company: '公司名称',
        companyText: 'A轮｜50-150人｜移动互联网，数据服务',
        hr: '陈小姐 · HR · ',
        headImg: imgUrl,
        fl: ['公司福利', '年终奖', '周末双休'],
        isZxJl: true,
        isTdSuccess: true,
        onLine: true,
        ckTime: '2021-10-01 18:00',
        location: '深圳市南山区粤海街道软件基地',
        collected: true,
        isOnline: true,
        hasDeliver: true,
    },
    {
        id: 2,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        money: '15-20K',
        time: '2021-10-01 10:00',
        company: '公司名称',
        companyText: 'A轮｜50-150人｜移动互联网，数据服务',
        hr: '陈小姐 · HR · ',
        headImg: imgUrl,
        fl: ['公司福利', '年终奖', '周末双休'],
        isZxJl: false,
        isTdSuccess: true,
        onLine: true,
        ckTime: '2021-10-01 18:00',
        location: '深圳市南山区粤海街道软件基地',
        collected: true,
        isOnline: true,
        hasDeliver: false,
    },
    {
        id: 3,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        money: '15-20K',
        time: '2021-10-01 10:00',
        company: '公司名称',
        companyText: 'A轮｜50-150人｜移动互联网，数据服务',
        hr: '陈小姐 · HR · ',
        headImg: imgUrl,
        fl: ['公司福利', '年终奖', '周末双休'],
        isZxJl: false,
        isTdSuccess: true,
        onLine: true,
        ckTime: '2021-10-01 18:00',
        location: '深圳市南山区粤海街道软件基地',
        collected: false,
        isOnline: false,
        hasDeliver: true,
    },
];

const JobItemWrap = styled('div', {
    w: 884,
    h: 161,
    p: 20,
    backgroundColor: '$w',
    mt: 16,
    position: 'relative',
    borderRadius: 2,
});

const FlexDiv = styled('div', {
    display: 'flex',
});

const TitleText = styled('div', {
    color: '#3C4441',
    fs: 30,
    fw: 600,
    flexShrink: 0,
});

interface JobIProps {
    item: any;
}

function JobItem({ item }: JobIProps) {
    const { job, subs, money, id, time, company, companyText, fl = [], headImg, hr, onLine, collected, isOnline, hasDeliver } = item;
    const [showContent, setShowContent] = useState(false);

    return (
        <JobItemWrap>
            <FlexDiv css={{ justifyContent: 'space-between', alignItems: 'flex-start', pb: 20, borderBottom: '1px dashed rgba(0,0,0,0.1)' }}>
                <FlexDiv css={{ flexDirection: 'column', w: 282 }}>
                    <FlexDiv css={{ alignItems: 'center' }}>
                        <TitleText css={{ fs: 18, mr: 10 }}>{job}</TitleText>
                    </FlexDiv>
                    <FlexDiv css={{ alignItems: 'center', mt: 13 }}>
                        <TitleText css={{ color: '#FF6500', fs: 18 }}>{money}</TitleText>
                        <TitleText css={{ fs: 14, fw: 400, color: '#616A67', ml: 15, ff: '$fr' }}>{subs}</TitleText>
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv css={{ w: 350, alignItems: 'center' }}>
                    <Image src={headImg} width={58} height={58} alt='xxx' />
                    <FlexDiv css={{ flexDirection: 'column', ml: 10 }}>
                        <TitleText css={{ color: '#3C4441', fs: 16, ff: '$fr', fw: 400 }}>{company}</TitleText>
                        <TitleText css={{ color: '#616A67', fs: 14, ff: '$fr', fw: 400, mt: 16 }}>{companyText}</TitleText>
                    </FlexDiv>
                </FlexDiv>

                <FlexDiv css={{ flexDirection: 'column', justifyContent: 'center', w: 206, alignItems: 'flex-end' }}>
                    <FlexDiv css={{ alignItems: 'center' }}>
                        <TitleText css={{ color: '#3C4441', fs: 16, ff: '$fr', fw: 400, textAlign: 'right' }}>发布时间：{time}</TitleText>
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv css={{ justifyContent: 'space-between', mt: 13 }}>
                <FlexDiv css={{ w: 282 }}>
                    <TitleText css={{ fs: 14, fw: 400, color: '#616A67' }}>{hr}</TitleText>
                    {onLine ? <TitleText css={{ fs: 14, fw: 400, color: '$primary', ml: 15 }}>在线</TitleText> : null}
                </FlexDiv>
                <FlexDiv css={{ justifyContent: 'space-between', w: 560 }}>
                    <FlexDiv css={{ w: 350 }}>
                        {fl.map((f: string) => (
                            <TitleText key={f} css={{ fs: 14, fw: 400, color: '#616A67', ff: '$fr', backgroundColor: '#EFF2F1', p: '4px 10px', mr: 20 }}>
                                {f}
                            </TitleText>
                        ))}
                    </FlexDiv>
                    <FlexDiv css={{ flexDirection: 'column', justifyContent: 'center', w: 206, alignItems: 'flex-end' }}>
                        <FlexDiv css={{ alignItems: 'center' }}>
                            <TitleText
                                onClick={() => {
                                    if (collected) {
                                        setShowContent(true);
                                    }
                                }}
                                css={{
                                    color: '#3C4441',
                                    fs: 16,
                                    ff: '$fr',
                                    fw: 400,
                                    textAlign: 'right',
                                    mr: 10,
                                    textDecoration: 'underline',
                                    userSelect: 'none',
                                    position: 'relative',
                                }}>
                                {collected ? '取消收藏' : '收藏'}
                                {showContent ? (
                                    <FlexDiv
                                        css={{
                                            backgroundColor: '#3C4441',
                                            opacity: 0.8,
                                            position: 'absolute',
                                            color: '$w',
                                            w: 156,
                                            h: 62,
                                            zIndex: 3,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 2,
                                        }}>
                                        取消收藏成功
                                    </FlexDiv>
                                ) : null}
                            </TitleText>
                            &nbsp;|&nbsp;
                            <TitleText css={{ color: isOnline && hasDeliver ? '$primary' : '#8C9693', fs: 16, ff: '$fr', fw: 400, userSelect: 'none' }}>
                                {isOnline ? (hasDeliver ? '投简历' : '已投递') : '已下线'}
                            </TitleText>
                        </FlexDiv>
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </JobItemWrap>
    );
}
export default function Sc() {
    const [current, setCurrent] = useState(2);
    return (
        <RightWrap>
            {tdlist.map((td) => (
                <JobItem item={td} key={td.id} />
            ))}
            <Pagination css={{ mb: 80, mt: 30, justifyContent: 'center' }} current={current} setCurrent={setCurrent} total={4} />
        </RightWrap>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return {
        props: {},
    };
}

Sc.getLayout = function getLayout(page: ReactElement) {
    return <InfoLayout>{page}</InfoLayout>;
};
