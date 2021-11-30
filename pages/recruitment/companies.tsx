import type { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/layout';
import Icon from '../../components/icon';
import { Main, CompanyHead, CompanyBodyWrap, FlexDiv, TitleText, LeftWrap, RightWrap } from '../../components/company-components';
import Pagination from '../../components/pagination';

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';

const zpName = '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展》';

const companyList = [
    {
        id: 1,
        img: imgUrl,
        name: '公司名称',
        detail: 'A轮｜50-150人｜移动互联网 数据服务',
    },
    {
        id: 2,
        img: imgUrl,
        name: '公司名称',
        detail: 'A轮｜50-150人｜移动互联网 数据服务',
    },
    {
        id: 3,
        img: imgUrl,
        name: '公司名称',
        detail: 'A轮｜50-150人｜移动互联网 数据服务',
    },
];

export default function Companies() {
    const router = useRouter();
    const [current, setCurrent] = useState(2);

    return (
        <Main>
            <CompanyBodyWrap css={{ pb: 80 }}>
                <LeftWrap>
                    <TitleText css={{ w: 884, backgroundColor: '$w', p: 20, fs: 24, borderRadius: 2 }}>参加企业：</TitleText>
                    <FlexDiv css={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {companyList.map((cm) => (
                            <FlexDiv key={cm.id} css={{ flexDirection: 'column', p: 20, mt: 16, w: 434, backgroundColor: '$w' }}>
                                <FlexDiv css={{ alignItems: 'flex-start' }}>
                                    <Image alt='hr' src={cm.img} width={48} height={48} />
                                    <FlexDiv css={{ flexDirection: 'column', ml: 10 }}>
                                        <TitleText css={{ fs: 16, fw: 400, ff: '$fr', color: '#3C4441' }}>{cm.name}</TitleText>
                                        <TitleText css={{ fs: 14, fw: 400, ff: '$fr', mt: 2, color: '#3C4441' }}>{cm.detail}</TitleText>
                                    </FlexDiv>
                                </FlexDiv>
                            </FlexDiv>
                        ))}
                    </FlexDiv>
                    <Pagination css={{ justifyContent: 'center', mt: 30, mb: 80 }} current={current} setCurrent={setCurrent} total={4} />
                </LeftWrap>
                <FlexDiv css={{ flexDirection: 'column' }}>
                    <RightWrap>
                        <FlexDiv css={{ flexDirection: 'column' }}>
                            <TitleText css={{ fs: 18 }}>{zpName}</TitleText>
                            <TitleText css={{ fs: 14, fw: 400, ff: '$fr', mt: 11, lineHeight: '25px', color: '#3C4441', display: 'flex', alignItems: 'center' }}>
                                <Icon name='icon-icon_shijian' />
                                2021年10月01日-2021年10-30日
                            </TitleText>
                            <TitleText css={{ fs: 14, fw: 400, ff: '$fr', lineHeight: '25px', color: '#3C4441', display: 'flex', alignItems: 'center' }}>
                                <Icon name='icon-icon_dingwei' />
                                广东省深圳市福田区人才园
                            </TitleText>
                        </FlexDiv>
                    </RightWrap>
                    <RightWrap css={{ mt: 16 }}>
                        <TitleText css={{ fs: 24 }}>
                            活动承办
                            {companyList.map((cm, idx) => (
                                <FlexDiv
                                    key={cm.id}
                                    css={
                                        idx === companyList.length - 1
                                            ? { flexDirection: 'column', mt: 20 }
                                            : { flexDirection: 'column', mt: 20, pb: 20, borderBottom: '1px dashed rgba(0,0,0,0.1)' }
                                    }>
                                    <TitleText css={{ fs: 18, color: '#3C4441' }}>主办方</TitleText>
                                    <FlexDiv css={{ mt: 21, alignItems: 'flex-start' }}>
                                        <Image alt='hr' src={cm.img} width={48} height={48} />
                                        <FlexDiv css={{ flexDirection: 'column', ml: 10 }}>
                                            <TitleText css={{ fs: 16, fw: 400, ff: '$fr', color: '#616A67' }}>{cm.name}</TitleText>
                                            <TitleText css={{ fs: 14, fw: 400, ff: '$fr', mt: 2, color: '#616A67' }}>{cm.detail}</TitleText>
                                        </FlexDiv>
                                    </FlexDiv>
                                </FlexDiv>
                            ))}
                        </TitleText>
                    </RightWrap>
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

Companies.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
