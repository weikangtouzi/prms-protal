import type { ReactElement } from 'react';
import { useState } from 'react';
import InfoLayout from '../../components/info-layout';
import { styled } from '../../stitches.config';

import PrimarySelect from '../../components/primary-select';
import PrimaryInput from '../../components/primary-input';

const RightWrap = styled('div', {
    w: 884,
    h: 530,
    p: 100,
    backgroundColor: '$w',
    mt: 16,
    ml: 16,
    mb: 135,
});

const FlexDiv = styled('div', {
    display: 'flex',
});

export default function Yhk() {
    const [isModify, setIsModify] = useState(false);
    return (
        <RightWrap>
            <FlexDiv css={{ alignItems: 'center', justifyContent: 'space-between', w: 684, borderBottom: '1px dashed rgba(0,0,0,0.1)', pb: isModify ? 32 : 40, mb: 5 }}>
                <FlexDiv css={{ color: '#3C4441', fw: 600, fs: 18 }}>结算要银行卡</FlexDiv>
                {isModify ? (
                    <FlexDiv
                        onClick={() => {
                            setIsModify(false);
                        }}
                        css={{ color: '$w', backgroundColor: '$primary', w: 80, h: 42, alignItems: 'center', justifyContent: 'center', ff: '$fr', borderRadius: 2 }}>
                        保存
                    </FlexDiv>
                ) : (
                    <FlexDiv
                        onClick={() => {
                            setIsModify(true);
                        }}
                        css={{ userSelect: 'none', color: '$primary', fw: 600, fs: 16 }}>
                        修改
                    </FlexDiv>
                )}
            </FlexDiv>
            <FlexDiv css={{ flexDirection: 'column', fs: 16 }}>
                <FlexDiv css={{ alignItems: 'center', mt: isModify ? 36 : 45 }}>
                    <FlexDiv css={{ color: '#616A67', ff: '$fr', mr: 10 }}>开户名称：</FlexDiv>
                    {isModify ? (
                        <PrimaryInput css={{ w: 400 }} size='small' placeholder='请输入结算银行卡开户名称' />
                    ) : (
                        <FlexDiv css={{ color: '#3C4441', fw: 600 }}>陈小小</FlexDiv>
                    )}
                </FlexDiv>
                <FlexDiv css={{ alignItems: 'center', mt: isModify ? 20 : 40 }}>
                    <FlexDiv css={{ color: '#616A67', ff: '$fr', mr: 10 }}>银行账号：</FlexDiv>
                    {isModify ? (
                        <PrimaryInput css={{ w: 400 }} size='small' placeholder='请输入结算银行卡账号' />
                    ) : (
                        <FlexDiv css={{ color: '#3C4441', fw: 600 }}>6222 2222 2222 2222</FlexDiv>
                    )}
                </FlexDiv>
                <FlexDiv css={{ alignItems: 'center', mt: isModify ? 20 : 40 }}>
                    <FlexDiv css={{ color: '#616A67', ff: '$fr', mr: 10 }}>开户银行：</FlexDiv>
                    {isModify ? (
                        <PrimarySelect iconName='icon-icon_xialaxuanxiang2' placeholder='请选择结算银行开户银行' css={{ w: 400, border: '1px solid rgba(0,0,0,0.2)' }} />
                    ) : (
                        <FlexDiv css={{ color: '#3C4441', fw: 600 }}>中国银行</FlexDiv>
                    )}
                </FlexDiv>
                <FlexDiv css={{ alignItems: 'center', mt: isModify ? 20 : 40 }}>
                    <FlexDiv css={{ color: '#616A67', ff: '$fr', mr: 10 }}>开户支行：</FlexDiv>
                    {isModify ? (
                        <PrimaryInput css={{ w: 400 }} size='small' placeholder='请选择结算银行开户支行名称' />
                    ) : (
                        <FlexDiv css={{ color: '#3C4441', fw: 600 }}>中国银行后海支行</FlexDiv>
                    )}
                </FlexDiv>
            </FlexDiv>
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

Yhk.getLayout = function getLayout(page: ReactElement) {
    return <InfoLayout>{page}</InfoLayout>;
};
