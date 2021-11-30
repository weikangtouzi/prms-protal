import type { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { Main, InputWrap, RealInput, SearchWorldWrap, SearchWorldText, PartTitle } from '../../components/home-components';
import { JobItem } from '../../components/company-components';
import { FlexDiv } from '../../components/recruitment-components';

import PrimaryButton from '../../components/primary-button';

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';
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

export default function Job() {
    const [active, setActive] = useState(false);
    return (
        <Main>
            <InputWrap>
                <RealInput
                    onFocus={() => {
                        setActive(true);
                    }}
                    onBlur={() => {
                        setActive(false);
                    }}
                    active={active}
                    placeholder='搜索招聘会名称、主办公司'
                />
                <PrimaryButton css={{ w: 120, h: 54, mt: 0, borderRadius: 0 }} text='搜索' />
            </InputWrap>
            <FlexDiv css={{ backgroundColor: 'rgba(242,244,246,1)', pt: 20, width: '100%', justifyContent: 'center' }}>
                <FlexDiv css={{ flexDirection: 'column' }}>
                    {jobList.map((j) => (
                        <JobItem key={j.id} item={j}></JobItem>
                    ))}
                </FlexDiv>
                <FlexDiv css={{ w: 284, ml: 16, flexDirection: 'column', h: 662, justifyContent: 'space-between' }}>
                    <Image alt='name' width={284} height={210} src={imgUrl} />
                    <Image alt='name' width={284} height={210} src={imgUrl} />
                    <Image alt='name' width={284} height={210} src={imgUrl} />
                </FlexDiv>
            </FlexDiv>
        </Main>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

Job.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
