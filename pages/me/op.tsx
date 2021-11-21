import type { ReactElement } from 'react';
import { useState } from 'react';
import InfoLayout from '../../components/info-layout';
import { styled } from '../../stitches.config';
import Pagination from '../../components/pagination';

const RightWrap = styled('div', {
    w: 884,
    h: 578,
    mt: 16,
    ml: 16,
    mb: 135,
});

const Table = styled('table', {
    border: 'none',
    borderSpacing: 0,
});

const Thead = styled('thead', {
    backgroundColor: '#EFF2F1',
    color: '#616A67',
    fs: 16,
    h: 50,
    w: 884,
});

const Tr = styled('tr', {});

const Th = styled('th', {
    textAlign: 'left',
    ff: '$fr',
});

const Td = styled('td', {
    textAlign: 'left',
    h: 61,
    color: '#3C4441',
    ff: '$fr',
    backgroundColor: '$w',
    borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
});

const TdBetween = styled('td', {
    h: 16,
    backgroundColor: 'F5F6F8',
});

const HeadBottomDiv = styled('div', {
    h: 16,
    w: '100%',
});

const DivForLeft = styled('div', {
    w: 40,
});

interface DataSourceItem {
    id: string;
    time: string;
    ip: string;
    sb: string;
    op: string;
    status: string;
}

interface ColItem {
    title: string;
    dataIndex: keyof DataSourceItem;
    css: any;
}

const columns: ColItem[] = [
    {
        title: '时间',
        dataIndex: 'time',
        css: { w: 183 },
    },
    {
        title: 'IP',
        dataIndex: 'ip',
        css: { w: 147 },
    },
    {
        title: '设备',
        dataIndex: 'sb',
        css: { w: 250 },
    },
    {
        title: '操作',
        dataIndex: 'op',
        css: { w: 200 },
    },
    {
        title: '状态',
        dataIndex: 'status',
        css: { w: 35 },
    },
];

const dataSource = [
    { id: '1', time: '2021-10-21', ip: '10.110.**.30', sb: '趁早找网站（PC）', op: '手机验证码登录', status: '正常' },
    { id: '2', time: '2021-10-21', ip: '10.110.**.30', sb: '趁早找网站（PC）', op: '手机验证码登录', status: '正常' },
    { id: '3', time: '2021-10-21', ip: '10.110.**.30', sb: '趁早找网站（PC）', op: '手机验证码登录', status: '正常' },
];

export default function Op() {
    const [current, setCurrent] = useState(2);
    return (
        <RightWrap>
            <Table>
                <Thead>
                    <Tr>
                        <Th></Th>
                        {columns.map((c) => (
                            <Th css={c.css} key={c.dataIndex}>
                                {c.title}
                            </Th>
                        ))}
                        <Th></Th>
                    </Tr>
                </Thead>
                <tbody>
                    <Tr>
                        <TdBetween colSpan={7}></TdBetween>
                    </Tr>
                    {dataSource.map((d: DataSourceItem) => (
                        <Tr key={d.id}>
                            <Td css={{ backgroundColor: '$w', w: 40, h: 61, borderBottom: '1px solid $w' }}></Td>
                            {columns.map((col: ColItem) => (
                                <Td key={col.dataIndex} css={col.css}>
                                    {d[col.dataIndex] || null}
                                </Td>
                            ))}
                            <Td css={{ backgroundColor: '$w', w: 40, h: 61, borderBottom: '1px solid $w' }}></Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
            <DivForLeft css={{ w: '100%', h: 32, backgroundColor: '$w' }}></DivForLeft>
            <Pagination css={{ float: 'right' }} current={current} setCurrent={setCurrent} total={4} />
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

Op.getLayout = function getLayout(page: ReactElement) {
    return <InfoLayout>{page}</InfoLayout>;
};
