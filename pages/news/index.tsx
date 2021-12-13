import type { ReactElement } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import PrimaryButton from '../../components/primary-button';
import { Main, Tabs, ReZhaoWrap, ZhiChangItem, ZhiChangLongItem } from '../../components/home-components';

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';

const zxTabs = ['资讯分类', '资讯教育', '建筑资讯', '医疗资讯', '服务资讯', '金融资讯', '网络资讯'];
const zcList = [
    {
        id: 1,
        img: imgUrl,
        title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
        content:
            '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
        writer: '作者名称',
        time: '·2021-10-01',
    },
    {
        id: 2,
        img: imgUrl,
        title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
        content:
            '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
        writer: '作者名称',
        time: '2021-10-01',
    },
    {
        id: 3,
        img: imgUrl,
        title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
        content:
            '为持续推动全市人力资源和社会保障事业业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
        writer: '作者名称',
        time: '·2021-10-01',
    },
    {
        id: 4,
        img: imgUrl,
        title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
        content:
            '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
        writer: '作者名称',
        time: '·2021-10-01',
    },
    {
        id: 5,
        img: imgUrl,
        title: '深圳人力资源和社会保障局关于公开',
        content:
            '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
        writer: '作者名称',
        time: '·2021-10-01',
    },
    {
        id: 6,
        img: imgUrl,
        title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
        content:
            '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
        writer: '作者名称',
        time: '·2021-10-01',
    },
];

export default function News() {
    const router = useRouter();
    const [zxActive, setZxActive] = useState(1);
    return (
        <Main css={{ pt: 16, backgroundColor: '#F5F6F8' }}>
            <Tabs list={zxTabs} active={zxActive} onClickItem={setZxActive} />
            <ReZhaoWrap>
                {zcList.slice(0, 3).map((rz) => (
                    <ZhiChangItem key={rz.id} item={rz} />
                ))}
                {zcList.slice(3).map((rz) => (
                    <ZhiChangLongItem key={rz.id} item={rz} />
                ))}
            </ReZhaoWrap>
            <PrimaryButton
                css={{ mt: 30, mb: 80, w: 200, h: 46, fs: 14 }}
                text='查看更多'
                onClick={() => {
                    console.log('查看更多 ');
                }}
            />
        </Main>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`);

    // Pass data to the page via props
    return { props: {} };
}

News.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
