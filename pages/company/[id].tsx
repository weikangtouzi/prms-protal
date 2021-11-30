import type { ReactElement } from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Layout from '../../components/layout';
import Pagination from '../../components/pagination';
import Icon from '../../components/icon';
import PrimaryButton from '../../components/primary-button';
import PrimarySelect from '../../components/primary-select';
import {
    JudgeStar,
    TabItem,
    CommentItem,
    FlexDiv,
    TitleText,
    Main,
    CompanyHead,
    LeftWrap,
    TabWrap,
    RightWrap,
    CompanyBodyWrap,
    JobItem,
} from '../../components/company-components';

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';

const longText =
    '华为创立于1987年，是全球领先的ICT（信息与通信）基础设施和智能终端提供商。目前华为约有19.7万员工，业务遍及170多个国家和地区，服务全球30多亿人口。 <br/>华为致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界：让无处不在的联接，成为人人平等的权利，成为智能世界的前提和基础；为世界提供最强算力，让云无处不在，让智能无所不及；所有的行业和组织，因强大的数字平台而变得敏捷、高效、生机勃勃；通过AI重新定义体验，让消费者在家居、出行、办公、影音娱乐、运动健康等全场景获得极致的个性化智慧体验。';

const commentList = [
    {
        id: 1,
        img: imgUrl,
        name: '陈*小',
        position: '产品经理',
        tags: ['面试官nice', '面试效率高', '环境好'],
        context:
            '描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试的文字描述面试官的文字描述面试官的文字描述官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文',
        time: '2021-10-01',
        thumbed: true,
        thumbNum: 99,
    },
    {
        id: 2,
        img: imgUrl,
        name: '陈*小',
        position: '产品经理',
        tags: ['面试官nice', '面试效率高', '环境好'],
        context:
            '描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试的文字描述面试官的文字描述面试官的文字描述官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文',
        time: '2021-10-01',
        thumbed: true,
        thumbNum: 99,
    },
    {
        id: 3,
        img: imgUrl,
        name: '陈*小',
        position: '产品经理',
        tags: ['面试官nice', '面试效率高', '环境好'],
        context:
            '描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试官的文字描述面试的文字描述面试官的文字描述面试官的文字描述官的文字描述面试官的文字描述面试官的文字描述面试官',
        time: '2021-10-01',
        thumbed: false,
        thumbNum: 899,
    },
];

const infoList = [
    {
        text: '游戏 ｜社交媒体｜视频媒体音频',
        icon: 'icon-icon_fenlei',
    },
    {
        text: '上市公司',
        icon: 'icon-icon_shangshigongsi',
    },
    {
        text: '2000人以上',
        icon: 'icon-icon_renshu',
    },
    {
        text: 'http://huawei.com',
        icon: 'icon-icon_wangzhan',
    },
];

const fl = ['福利001', '福利002', '福利003', '福利004', '福利005'];

const hrList = [
    {
        id: 1,
        img: imgUrl,
        name: '陈女士 · HR',
        content: '正在招聘“高级产品经理”等100个职位',
    },
    {
        id: 2,
        img: imgUrl,
        name: '陈女士 · HR',
        content: '正在招聘“高级产品经理”等100个职位',
    },
    {
        id: 3,
        img: imgUrl,
        name: '陈女士 · HR',
        content: '正在招聘“高级产品经理”等100个职位',
    },
    {
        id: 4,
        img: imgUrl,
        name: '陈女士 · HR',
        content: '正在招聘“高级产品经理”等100个职位',
    },
];

const subTabs = ['全部', '技术', '产品', '设计师', '测试', '市场', '销售', '运营', '职能', '其它'];

const jobList = [
    {
        id: 1,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        money: '15-20K',
        time: '2021-10-01 发布',
        subscribed: true,
        jobTitle: '产品总监（OA办公方向）',
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        img: imgUrl,
    },
    {
        id: 2,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        money: '15-20K',
        jobTitle: '产品总监（OA办公方向）',
        time: '2021-10-01 发布',
        subscribed: false,
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        img: imgUrl,
    },
    {
        id: 3,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        jobTitle: '产品总监（OA办公方向）',
        money: '15-20K',
        time: '2021-10-01 发布',
        subscribed: false,
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        img: imgUrl,
    },
    {
        id: 4,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        jobTitle: '产品总监（OA办公方向）',
        money: '15-20K',
        time: '2021-10-01 发布',
        subscribed: false,
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        img: imgUrl,
    },
];

export default function Company() {
    const router = useRouter();

    const [current, setCurrent] = useState(2);
    const [activeTab, setActiveTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);
    const [city, setCity] = useState('');

    useEffect(() => {
        const { tab } = router.query;
        if (tab === 'zhaopin') {
            setActiveTab(2);
        }
    }, [router.query]);

    return (
        <Main>
            <CompanyHead>
                <FlexDiv css={{ justifyContent: 'space-between' }}>
                    <FlexDiv>
                        <Image className='image-4-radius' alt='name' width={70} height={70} src={imgUrl} />
                        <FlexDiv css={{ flexDirection: 'column', ml: 10 }}>
                            <TitleText>深圳市公司名称</TitleText>
                            <TitleText css={{ fs: 18, fw: 400, ff: '$fr', mt: 6, lineHeight: '25px' }}>A轮｜50-150人｜移动互联网</TitleText>
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv>
                        <FlexDiv css={{ flexDirection: 'column', alignItems: 'center' }}>
                            <TitleText css={{ fs: 26 }}>56789</TitleText>
                            <TitleText css={{ fs: 16, fw: 400, ff: '$fr', mt: 10 }}>在线职位</TitleText>
                        </FlexDiv>
                        <FlexDiv css={{ flexDirection: 'column', alignItems: 'center', ml: 52 }}>
                            <TitleText css={{ fs: 26 }}>56789</TitleText>
                            <TitleText css={{ fs: 16, fw: 400, ff: '$fr', mt: 10 }}>在线职位</TitleText>
                        </FlexDiv>
                    </FlexDiv>
                </FlexDiv>
            </CompanyHead>
            <CompanyBodyWrap>
                <LeftWrap>
                    <TabWrap>
                        <TabItem
                            onClick={() => {
                                setActiveTab(1);
                            }}
                            title='公司简介'
                            active={activeTab === 1}></TabItem>
                        <TabItem
                            onClick={() => {
                                setActiveTab(2);
                            }}
                            title='招聘职位（56789）'
                            active={activeTab === 2}></TabItem>
                    </TabWrap>
                    {activeTab === 1 ? (
                        <>
                            <FlexDiv css={{ p: 40, mt: 16, backgroundColor: '$w', flexDirection: 'column' }}>
                                <TitleText css={{ fs: 18, mb: 10 }}>公司介绍：</TitleText>
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
                            <FlexDiv css={{ p: 40, mt: 16, backgroundColor: '$w', flexDirection: 'column' }}>
                                <TitleText css={{ fs: 18, mb: 10 }}>面试评价：</TitleText>
                                <JudgeStar label='综合评分：' starNum={4.0} size='large' />
                                <FlexDiv css={{ justifyContent: 'space-between' }}>
                                    <JudgeStar label='职位描述：' starNum={4.0} size='small' />
                                    <JudgeStar label='公司情况：' starNum={3.0} size='small' />
                                    <JudgeStar label='面试官：' starNum={2.0} size='small' />
                                </FlexDiv>
                                {commentList.map((c) => (
                                    <CommentItem item={c} key={c.id} />
                                ))}
                            </FlexDiv>
                        </>
                    ) : (
                        <>
                            <FlexDiv css={{ mt: 16, w: 884, flexDirection: 'column' }}>
                                <TabWrap>
                                    {subTabs.map((s, idx) => (
                                        <TabItem
                                            css={idx === 0 ? { mr: 46, ml: 6 } : { mr: 46 }}
                                            key={s}
                                            onClick={() => {
                                                setActiveSubTab(idx);
                                            }}
                                            title={s}
                                            active={activeSubTab === idx}></TabItem>
                                    ))}
                                </TabWrap>
                                <FlexDiv css={{ backgroundColor: '$w', pt: 20, pb: 20 }}>
                                    <PrimarySelect
                                        placeholder='城市'
                                        placeholderCss={{ color: '#616A67' }}
                                        css={{ w: 256, mr: 18, ml: 40 }}
                                        value={city}
                                        onSelect={setCity}
                                        iconName='icon-icon_xialaxuanxiang2'
                                    />
                                    <PrimarySelect
                                        placeholder='经验'
                                        placeholderCss={{ color: '#616A67' }}
                                        css={{ w: 256, mr: 18 }}
                                        value={city}
                                        onSelect={setCity}
                                        iconName='icon-icon_xialaxuanxiang2'
                                    />
                                    <PrimarySelect
                                        placeholder='薪资'
                                        placeholderCss={{ color: '#616A67' }}
                                        css={{ w: 256 }}
                                        value={city}
                                        onSelect={setCity}
                                        iconName='icon-icon_xialaxuanxiang2'
                                    />
                                </FlexDiv>
                            </FlexDiv>
                            <FlexDiv css={{ flexDirection: 'column' }}>
                                {jobList.map((j) => (
                                    <JobItem key={j.id} item={j}></JobItem>
                                ))}
                            </FlexDiv>
                            <Pagination css={{ justifyContent: 'center', mt: 30, mb: 80 }} current={current} setCurrent={setCurrent} total={4} />
                        </>
                    )}
                </LeftWrap>
                <RightWrap>
                    <TitleText css={{ fs: 24 }}>基本信息</TitleText>
                    <FlexDiv css={{ flexDirection: 'column', mt: 20, pb: 10, borderBottom: '1px dashed rgba(0, 0, 0, 0.1)', mb: 23 }}>
                        {infoList.map((info) => (
                            <FlexDiv css={{ justifyContent: 'flex-start', mb: 10 }} key={info.icon}>
                                <Icon name={info.icon} />
                                <FlexDiv css={{ mll: 6, color: '#616A67', fs: 16, ff: '$fr' }}>{info.text}</FlexDiv>
                            </FlexDiv>
                        ))}
                    </FlexDiv>
                    <TitleText css={{ fs: 24 }}>公司福利</TitleText>
                    <FlexDiv css={{ flexWrap: 'wrap', pb: 20, borderBottom: '1px dashed rgba(0, 0, 0, 0.1)', mb: 19 }}>
                        {fl.map((f) => (
                            <FlexDiv css={{ borderRight: 4, border: '1px solid rgba(0, 0, 0, 0.1)', p: '10px 20px', mr: 20, mt: 14, fs: 16, color: '#616A67' }} key={f}>
                                {f}
                            </FlexDiv>
                        ))}
                    </FlexDiv>
                    <TitleText css={{ fs: 24 }}>公司相册</TitleText>

                    <FlexDiv css={{ pt: 20, pb: 20, borderBottom: '1px dashed rgba(0, 0, 0, 0.1)', mb: 19 }}>
                        <Splide options={{ type: 'loop', pagination: false }}>
                            <SplideSlide>
                                <Image alt='sss' src={imgUrl} width={244} height={140} />
                            </SplideSlide>
                            <SplideSlide>
                                <Image alt='sss' src={imgUrl} width={244} height={140} />
                            </SplideSlide>
                        </Splide>
                    </FlexDiv>
                    <TitleText css={{ fs: 24 }}>招聘官</TitleText>
                    <FlexDiv css={{ flexDirection: 'column' }}>
                        {hrList.map((hr) => (
                            <FlexDiv key={hr.id} css={{ mt: 21, alignItems: 'flex-start' }}>
                                <Image alt='hr' src={hr.img} width={48} height={48} />
                                <FlexDiv css={{ flexDirection: 'column', ml: 10 }}>
                                    <TitleText css={{ fs: 16, fw: 400, ff: '$fr' }}>{hr.name}</TitleText>
                                    <TitleText css={{ fs: 16, fw: 400, ff: '$fr', mt: 2 }}>{hr.content}</TitleText>
                                </FlexDiv>
                            </FlexDiv>
                        ))}
                    </FlexDiv>
                    <FlexDiv
                        css={{
                            color: '$primary',
                            border: '1px solid $primary',
                            w: 166,
                            h: 42,
                            borderRadius: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: 20,
                        }}>
                        查看更多招聘职位 &gt;
                    </FlexDiv>
                </RightWrap>
            </CompanyBodyWrap>
            {activeTab === 1 ? (
                <>
                    <FlexDiv css={{ mr: 300, justifyContent: 'center' }}>
                        <PrimaryButton text='查看更多' onClick={() => {}} css={{ w: 200, h: 46, mt: 30 }} />
                    </FlexDiv>
                    <Pagination css={{ justifyContent: 'center', mt: 30, mb: 80, mr: 300 }} current={current} setCurrent={setCurrent} total={4} />
                </>
            ) : null}
        </Main>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

Company.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
