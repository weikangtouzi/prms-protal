import type { ReactElement } from 'react';
import { useState } from 'react';
import InfoLayout from '../../components/info-layout';
import { styled } from '../../stitches.config';

import Icon from '../../components/icon';
import PrimarySelect from '../../components/primary-select';
import Pagination from '../../components/pagination';

const RightWrap = styled('div', {
    w: 884,
    // h: 578,
    mt: 16,
    ml: 16,
    mb: 135,
});

const FlexDiv = styled('div', {
    display: 'flex',
});

const TopCardWrap = styled(FlexDiv, {
    backgroundColor: '#EFF2F1',
    p: 30,
    mb: 16,
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
    h: 88,
    color: '#3C4441',
    fs: 14,
    ff: '$fr',
    backgroundColor: '$w',
    borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
});

const TdBetween = styled('td', {
    h: 16,
    backgroundColor: '#F5F6F8',
});
interface DataSourceItem {
    id: string;
    type: string;
    detail: string;
    money: number;
    status: string;
    tradeId: string;
    time: string;
    action: string;
}
interface ColItem {
    title: string;
    dataIndex: keyof DataSourceItem;
    css: any;
    render?: any;
}

const columns: ColItem[] = [
    {
        title: '类型',
        dataIndex: 'type',
        css: { w: 125 },
        render: function _renderType(t: string) {
            let iconName = 'icon-icon_kechengshoumai';
            let text = '课程售卖';

            if (t === '1') {
            } else if (t === '2') {
                iconName = 'icon-icon_tixian';
                text = '提现';
            } else if (t === '3') {
                iconName = 'icon-icon_chongzhi';
                text = '充值';
            } else if (t === '4') {
                iconName = 'icon-icon_shuaxinjianli';
                text = '刷新简历';
            } else if (t === '5') {
                iconName = 'icon-icon_tixian';
                text = '增值服务';
            }
            return (
                <FlexDiv css={{ alignItems: 'center' }}>
                    <Icon name={iconName} />
                    <FlexDiv css={{ ml: 10 }}>{text}</FlexDiv>
                </FlexDiv>
            );
        },
    },
    {
        title: '详情',
        dataIndex: 'detail',
        css: { w: 267, pr: 40 },
    },
    {
        title: '金额',
        dataIndex: 'money',
        css: { w: 108 },
        render: function _renderMoney(m: number) {
            const nm = m.toFixed(2);
            if (m > 0) {
                return <FlexDiv css={{ color: '$primary' }}>+{nm}</FlexDiv>;
            }

            return <FlexDiv css={{ color: '#FF2000' }}>{nm}</FlexDiv>;
        },
    },
    {
        title: '状态',
        dataIndex: 'status',
        css: { w: 81 },
        render: function _renderMoney(s: string) {
            if (s === '成功') {
                return <FlexDiv css={{ color: '$primary' }}>{s}</FlexDiv>;
            }

            return <FlexDiv css={{ color: '#FF2000', pr: 22 }}>{s}</FlexDiv>;
        },
    },
    {
        title: '交易号',
        dataIndex: 'tradeId',
        css: { w: 107 },
    },
    {
        title: '交易时间',
        dataIndex: 'time',
        css: { w: 124 },
    },
    {
        title: '操作',
        dataIndex: 'action',
        css: { w: 35, mr: 20 },
    },
];

const dataSource = [
    {
        id: '1',
        time: '2021-10-21',
        type: '1',
        money: 300,
        status: '成功',
        tradeId: '123456887',
        action: '/',
        detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
    },
    {
        id: '2',
        time: '2021-10-21',
        type: '2',
        money: -300,
        status: '交易失败 已退款',
        tradeId: '123456887',
        action: '/',
        detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
    },
    {
        id: '3',
        time: '2021-10-21',
        type: '3',
        money: 300,
        status: '成功',
        tradeId: '123456887',
        action: '/',
        detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
    },
    {
        id: '4',
        time: '2021-10-21',
        type: '4',
        money: -1900,
        status: '成功',
        tradeId: '123456887',
        action: '/',
        detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
    },
    {
        id: '5',
        time: '2021-10-21',
        type: '5',
        money: 300,
        status: '成功',
        tradeId: '123456887',
        action: '/',
        detail: '课程名称课程名称课程名称课程名称课程名称课程名称课程名称课',
    },
];

export default function Zc() {
    const [current, setCurrent] = useState(2);
    return (
        <RightWrap>
            <TopCardWrap>
                <FlexDiv
                    css={{
                        background: 'linear-gradient(225deg, #00EFBE 0%, #00DA8A 100%)',
                        w: 397,
                        h: 171,
                        color: '$w',
                        fw: 600,
                        flexDirection: 'column',
                        p: '20px 20px 35px 25px',
                        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
                        borderRadius: 4,
                    }}>
                    <FlexDiv css={{ fs: 16, alignItems: 'center', justifyContent: 'space-between' }}>
                        <FlexDiv>早点币</FlexDiv>
                        <FlexDiv css={{ w: 80, h: 42, alignItems: 'center', justifyContent: 'center', backgroundColor: '$w', borderRadius: 2, color: '$primary' }}>
                            充值
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv css={{ fs: 36, ml: 15, mt: 25 }}>0.00</FlexDiv>
                </FlexDiv>
                <FlexDiv
                    css={{
                        backgroundColor: '$w',
                        w: 397,
                        h: 171,
                        fw: 600,
                        ml: 30,
                        flexDirection: 'column',
                        p: '20px 20px 35px 25px',
                        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
                        borderRadius: 4,
                    }}>
                    <FlexDiv css={{ fs: 16, alignItems: 'center', justifyContent: 'space-between' }}>
                        <FlexDiv>课程售卖收入</FlexDiv>
                        <FlexDiv css={{ w: 80, h: 42, alignItems: 'center', justifyContent: 'center', backgroundColor: '$primary', borderRadius: 2, color: '$w' }}>
                            提现
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv css={{ fs: 36, ml: 15, mt: 25 }}>0.00</FlexDiv>
                </FlexDiv>
            </TopCardWrap>
            <FlexDiv css={{ backgroundColor: '$w', p: 30, alignItems: 'center', mb: 16 }}>
                <FlexDiv css={{ color: '#616A67', ff: '$fr' }}>分类：</FlexDiv>
                <PrimarySelect placeholderCss={{ color: '#616A67' }} onSelect={() => {}} iconName='icon-icon_xialaxuanxiang2' />
                <FlexDiv css={{ color: '#616A67', ff: '$fr', ml: 30 }}>类型：</FlexDiv>
                <PrimarySelect placeholder='请选择（多选）' placeholderCss={{ color: '#616A67' }} onSelect={() => {}} iconName='icon-icon_xialaxuanxiang2' />
                <FlexDiv css={{ w: 80, h: 42, backgroundColor: '$primary', color: '$w', ml: 68, mr: 10, alignItems: 'center', justifyContent: 'center' }}>查询</FlexDiv>
                <FlexDiv css={{ w: 80, h: 42, alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.1)', color: '#616A67' }}>重置</FlexDiv>
            </FlexDiv>
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
                            <Td css={{ backgroundColor: '$w', w: 20, h: 88, borderBottom: '1px solid $w' }}></Td>
                            {columns.map((col: ColItem) => (
                                <Td key={col.dataIndex} css={col.css}>
                                    {col.render ? col.render(d[col.dataIndex]) : d[col.dataIndex] || null}
                                </Td>
                            ))}
                            <Td css={{ backgroundColor: '$w', w: 20, h: 88, borderBottom: '1px solid $w' }}></Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>

            <Pagination css={{ ml: 284 }} current={current} setCurrent={setCurrent} total={4} />
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

Zc.getLayout = function getLayout(page: ReactElement) {
    return <InfoLayout>{page}</InfoLayout>;
};
