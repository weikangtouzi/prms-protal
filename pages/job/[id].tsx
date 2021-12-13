import type { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/layout';
import Icon from '../../components/icon';
import { Main, CompanyHead, CompanyBodyWrap, FlexDiv, TitleText, LeftWrap, OutlinedText, RealInput } from '../../components/company-components';

import PrimaryButton from '../../components/primary-button';

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';

const longText =
    '华为创立于1987年，是全球领先的ICT（信息与通信）基础设施和智能终端提供商。目前华为约有19.7万员工，业务遍及170多个国家和地区，服务全球30多亿人口。 <br/>华为致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界：让无处不在的联接，成为人人平等的权利，成为智能世界的前提和基础；为世界提供最强算力，让云无处不在，让智能无所不及；所有的行业和组织，因强大的数字平台而变得敏捷、高效、生机勃勃；通过AI重新定义体验，让消费者在家居、出行、办公、影音娱乐、运动健康等全场景获得极致的个性化智慧体验。';

const info = {
    name: '产品总监（OA办公方向）',
    money: '15-20K',
    time: '20:48发布',
    detail: '深圳｜1-3年｜本科｜全职',
    fl: ['公司福利', '周末双休', '年终奖'],
    subscribed: false,
};

const defaultJlList = [
    {
        id: 1,
        name: '陈小小的简历',
        isZx: true,
    },
    {
        id: 2,
        name: '附件简简历名称应该有这么长的文字简历名称应该有这么长的文字简历名称应该有这么长的文字历名称应该有这么长的文字名称',
        isZx: false,
    },
    {
        id: 3,
        name: '附件简历名称应该该有这么长的文字名称该有这么长的文字名称该有这么长的文字名称该有这么长的文字名称该有这么长的文字名称有这么长的文字名称',
        isZx: false,
    },
];

export default function JobDetail() {
    const { name, money, time, detail, fl, subscribed } = info;
    const router = useRouter();
    const [list, setList] = useState(defaultJlList);
    const [selectedId, setSelectedId] = useState(0);

    return (
        <Main>
            <CompanyHead css={{ h: 209 }}>
                <FlexDiv>
                    <FlexDiv css={{ justifyContent: 'space-between', w: 817 }}>
                        <FlexDiv css={{ flexDirection: 'column', ml: 10, w: 822 }}>
                            <FlexDiv>
                                <TitleText>{name}</TitleText>
                                <TitleText css={{ color: '#FF6500' }}>{money}</TitleText>
                            </FlexDiv>
                            <TitleText css={{ fs: 18, fw: 400, ff: '$fr', mt: 20, mb: 20, lineHeight: '25px', color: '#3C4441' }}>{detail}</TitleText>
                            <FlexDiv>
                                {fl.map((f) => (
                                    <FlexDiv
                                        key={f}
                                        css={{
                                            w: 104,
                                            h: 42,
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mr: 20,
                                            color: '#616A67',
                                        }}>
                                        {f}
                                    </FlexDiv>
                                ))}
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv css={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                            <TitleText css={{ fs: 18, fw: 400, mt: 9 }}>{time}</TitleText>
                            <FlexDiv css={{ mt: 20, alignItems: 'center' }}>
                                <Icon name={subscribed ? 'icon-ico_shoucangoff' : 'icon-ico_shoucangon'} />
                                <TitleText css={{ fs: 18, color: '$primary', ml: 10, mr: 20 }}>收藏</TitleText>
                                <PrimaryButton text='投简历' onClick={() => {}} css={{ w: 120, h: 54, mt: 0 }} />
                            </FlexDiv>
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv css={{ flexDirection: 'column', ml: 86 }}>
                        {list.map((li) => (
                            <FlexDiv
                                key={li.id}
                                onClick={() => {
                                    setSelectedId(li.id);
                                }}
                                css={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <FlexDiv css={{ alignItems: 'center', fs: 16 }}>
                                    <Icon name={selectedId === li.id ? 'icon-icon_dianji' : 'icon-icon_weidianji'} />
                                    <Icon name={li.isZx ? 'icon-icon_zaixianjianli' : 'icon-icon_fujian'} />
                                    <FlexDiv css={{ ff: '$fr', color: '#616A67' }}>{li.isZx ? '在线简历：' : '附件简历：'}</FlexDiv>
                                    <FlexDiv
                                        css={{
                                            w: 128,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            '-webkit-line-clamp': 1,
                                            display: '-webkit-box',
                                            '-webkit-box-orient': 'vertical',
                                            color: '#3C4441',
                                            fw: 600,
                                        }}>
                                        {li.name}
                                    </FlexDiv>
                                </FlexDiv>
                            </FlexDiv>
                        ))}

                        <OutlinedText
                            htmlFor='realJobJLInputId'
                            css={{
                                textDecoration: 'none',
                                color: '$primary',
                                border: '1px solid $primary',
                                w: 240,
                                h: 36,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 20,
                            }}>
                            <Icon name='icon-icon_shangchuan' />
                            <FlexDiv css={{ ml: 15 }}>上传附件简历</FlexDiv>
                        </OutlinedText>
                        <RealInput
                            id='realJobJLInputId'
                            onChange={(e) => {
                                const { files = [] } = e.target;
                                if (files && files.length > 0) {
                                    console.log('files', files[0]);
                                }
                            }}
                            type='file'
                            accept='.doc,.docx,.pdf'
                        />
                    </FlexDiv>
                </FlexDiv>
            </CompanyHead>
            <CompanyBodyWrap css={{ pb: 80 }}>
                <LeftWrap>
                    <FlexDiv css={{ mt: 16, backgroundColor: '$w', p: 40, flexDirection: 'column' }}>
                        <TitleText css={{ fs: 18, mb: 10, color: '#3C4441' }}>职位描述：</TitleText>
                        <TitleText
                            css={{
                                fs: 14,
                                ff: '$fr',
                                fw: 400,
                                lineHeight: '30px',
                                pb: 20,
                                whiteSpace: 'pre-wrap',
                                borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
                                mb: 30,
                            }}>
                            {longText}
                        </TitleText>
                        <TitleText css={{ fs: 18, mb: 21 }}>工作地址：</TitleText>
                        <TitleText css={{ fs: 16, fw: 400, mb: 21, display: 'flex', alignItems: 'center' }}>
                            <Icon name='icon-icon_dingwei' /> 深圳市南山区粤海街道软件基地
                        </TitleText>
                        <Image alt='name' width={804} height={200} src={imgUrl} />
                    </FlexDiv>
                    <FlexDiv css={{ mt: 16, backgroundColor: '$w', p: '40px 40px 30px 40px', flexDirection: 'column' }}>
                        <TitleText css={{ fs: 18, mb: 10, color: '#3C4441' }}>职位发布者：</TitleText>
                        <FlexDiv css={{ alignItems: 'flex-start', justifyContent: 'flex-start', mt: 20 }}>
                            <Image alt='name' className='use-image-round' width={48} height={48} src={imgUrl} />
                            <FlexDiv css={{ flexDirection: 'column', ml: 15 }}>
                                <FlexDiv css={{ fs: 16, color: '#3C4441' }}>陈女士 · HR</FlexDiv>
                                <FlexDiv css={{ fs: 14, color: '#616A67', mt: 6 }}>刚刚活跃</FlexDiv>
                            </FlexDiv>
                        </FlexDiv>
                    </FlexDiv>
                </LeftWrap>
                <FlexDiv css={{ w: 284, ml: 16, mt: 16, flexDirection: 'column', h: 662, justifyContent: 'space-between' }}>
                    <Image alt='name' width={284} height={210} src={imgUrl} />
                    <Image alt='name' width={284} height={210} src={imgUrl} />
                    <Image alt='name' width={284} height={210} src={imgUrl} />
                </FlexDiv>
            </CompanyBodyWrap>
        </Main>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

JobDetail.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
