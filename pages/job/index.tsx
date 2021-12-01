import type { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { Main, InputWrap, RealInput, SearchWorldWrap, SearchWorldText, PartTitle } from '../../components/home-components';
import { FindJobItem } from '../../components/company-components';
import { FlexDiv } from '../../components/recruitment-components';

import PrimaryButton from '../../components/primary-button';
import Pagination from '../../components/pagination';
import PrimarySelect from '../../components/primary-select';

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';
const jobList = [
    {
        id: 1,
        job: 'iOS开发',
        isUrgent: true,
        time: '17:48',
        subs: '深圳｜1-3年｜本科｜全职',
        money: '15-20K',
        company: '公司名称',
        companyText: 'A轮｜50-150人｜移动互联网，数据服务',
        fl: ['公司福利', '周末双休', '年终奖'],
        jobTitle: '产品总监（OA办公方向）',
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        img: imgUrl,
        headImg: imgUrl,
        hr: '陈小姐 · HR',
        onLine: true,
    },
    {
        id: 2,
        job: 'iOS开发',
        subs: '深圳｜1-3年｜本科｜全职',
        company: '公司名称',
        companyText: 'A轮｜50-150人｜移动互联网，数据服务',
        fl: ['公司福利', '周末双休', '年终奖'],
        money: '15-20K',
        jobTitle: '产品总监（OA办公方向）',
        time: '2021-10-01 发布',
        subscribed: false,
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        headImg: imgUrl,
        img: imgUrl,
        hr: '陈小姐 · HR',
        onLine: false,
    },
    {
        id: 3,
        job: 'iOS开发',
        isUrgent: false,
        time: '17:48',
        company: '公司名称',
        companyText: 'A轮｜50-150人｜移动互联网，数据服务',
        fl: ['公司福利', '周末双休', '年终奖'],
        subs: '深圳｜1-3年｜本科｜全职',
        jobTitle: '产品总监（OA办公方向）',
        money: '15-20K',
        subscribed: false,
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        img: imgUrl,
        headImg: imgUrl,
        hr: '陈小姐 · HR',
        onLine: true,
    },
    {
        id: 4,
        job: 'iOS开发',
        isUrgent: true,
        company: '公司名称',
        companyText: 'A轮｜50-150人｜移动互联网，数据服务',
        subs: '深圳｜1-3年｜本科｜全职',
        jobTitle: '产品总监（OA办公方向）',
        money: '15-20K',
        time: '2021-10-01 发布',
        subscribed: false,
        details:
            '工作职责： 1、负责参与移动产品前期视觉用户研究，设计流行趋势分析，主题概念风格设定； 2、参与新产品研发，根据产品目标用户进行视觉创新设计； 3、对产品界面进行持续的设计优化，提升用户体验，突破各阶段设计目标，且做到**； 4、通过用户研究和数据分析，依据产品信息架构，界面布局，功能引导，树立 UI 设计功能理念； 5、参与项目产品方案讨论后，可快速进入设计概念输出阶段，手绘或电脑制作出概念设计草案。',
        location: '深圳-南山区-软件基地',
        img: imgUrl,
        headImg: imgUrl,
        hr: '陈小姐 · HR',
        onLine: true,
    },
];

const gzjyList = [
    {
        key: 'nolimit',
        value: '不限',
    },
    {
        key: '1',
        value: '在校/应届',
    },
    {
        key: '2',
        value: '3年及以下',
    },
    {
        key: '3',
        value: '3-5年',
    },
    {
        key: '4',
        value: '5-10年',
    },
    {
        key: '5',
        value: '10年以上',
    },
];

export default function Job() {
    const [active, setActive] = useState(false);
    const [current, setCurrent] = useState(2);

    const [gzjy, setGzjy] = useState('');
    const [xl, setXl] = useState('');
    const [xz, setXz] = useState('');
    const [gm, setGm] = useState('');
    const [gzxz, setGzxz] = useState('');

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
            <FlexDiv css={{ backgroundColor: 'rgba(242,244,246,1)', flexDirection: 'column', pt: 20, mt: 20, width: '100%', alignItems: 'center' }}>
                <FlexDiv css={{ w: 1184, h: 52, backgroundColor: '#EFF2F1', p: '0 20px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <FlexDiv>
                        <PrimarySelect
                            css={{ backgroundColor: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60 }}
                            placeholderCss={{ fs: 16, ff: '$fr', color: '#616A67' }}
                            placeholder='工作经验'
                            value={gzjy}
                            onSelect={setGzjy}
                            list={gzjyList}
                            valueCloseable
                            iconName='icon-icon_xialaxuanxiang2'
                        />
                        <PrimarySelect
                            css={{ backgroundColor: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60 }}
                            placeholderCss={{ fs: 16, ff: '$fr', color: '#616A67' }}
                            placeholder='学历要求'
                            value={xl}
                            onSelect={setXl}
                            list={gzjyList}
                            valueCloseable
                            iconName='icon-icon_xialaxuanxiang2'
                        />
                        <PrimarySelect
                            css={{ backgroundColor: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60 }}
                            placeholderCss={{ fs: 16, ff: '$fr', color: '#616A67' }}
                            placeholder='薪资要求'
                            value={xz}
                            onSelect={setXz}
                            list={gzjyList}
                            valueCloseable
                            iconName='icon-icon_xialaxuanxiang2'
                        />
                        <PrimarySelect
                            css={{ backgroundColor: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60 }}
                            placeholderCss={{ fs: 16, ff: '$fr', color: '#616A67' }}
                            placeholder='公司规模'
                            value={gm}
                            onSelect={setGm}
                            list={gzjyList}
                            valueCloseable
                            iconName='icon-icon_xialaxuanxiang2'
                        />
                        <PrimarySelect
                            css={{ backgroundColor: 'transparent', border: 'none', w: 'auto', fs: 16, p: 0, h: 22, mr: 60 }}
                            placeholderCss={{ fs: 16, ff: '$fr', color: '#616A67' }}
                            placeholder='工作性质'
                            value={gzxz}
                            onSelect={setGzxz}
                            list={gzjyList}
                            valueCloseable
                            iconName='icon-icon_xialaxuanxiang2'
                        />
                    </FlexDiv>
                    <FlexDiv onClick={() => {}} css={{ fs: 16, ff: '$fr', color: 'rgba(0,0,0,0.3)', userSelect: 'none' }}>
                        清空筛选条件
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv>
                    <FlexDiv css={{ flexDirection: 'column' }}>
                        {jobList.map((j) => (
                            <FindJobItem key={j.id} item={j}></FindJobItem>
                        ))}
                        <Pagination css={{ justifyContent: 'center', mt: 30, mb: 80 }} current={current} setCurrent={setCurrent} total={4} />
                    </FlexDiv>
                    <FlexDiv css={{ w: 284, ml: 16, mt: 16, flexDirection: 'column', h: 662, justifyContent: 'space-between' }}>
                        <Image alt='name' width={284} height={210} src={imgUrl} />
                        <Image alt='name' width={284} height={210} src={imgUrl} />
                        <Image alt='name' width={284} height={210} src={imgUrl} />
                    </FlexDiv>
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
