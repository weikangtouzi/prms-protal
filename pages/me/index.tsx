import type { ReactElement } from 'react';
import { useState } from 'react';
import InfoLayout from '../../components/info-layout';
import { styled } from '../../stitches.config';
import UploadHead from '../../components/upload-haed';
import PrimaryInput from '../../components/primary-input';
import PrimaryButton from '../../components/primary-button';

const RightWrap = styled('div', {
    w: 884,
    h: 578,
    backgroundColor: '$w',
    mt: 16,
    ml: 16,
    mb: 135,
    pt: 60,
    flexDirectionCenter: 'column',
    justifyContent: 'flex-start',
});

const InputWrp = styled('div', {
    ml: 0,
    h: 42,
    display: 'flex',
    alignItems: 'center',
});

const InputLabel = styled('div', {
    fs: 18,
    color: '#616A67',
    textAlign: 'end',
});

const WarnLabel = styled('div', {
    fs: 14,
    color: '#616A67',
    mt: 28,
    mb: 40,
});

export default function Me() {
    const [name, setName] = useState('');
    const [zhiye, setZhiye] = useState('');

    return (
        <RightWrap>
            <UploadHead />
            <InputWrp css={{ mt: 36 }}>
                <InputLabel>昵称：</InputLabel>
                <PrimaryInput
                    css={{ w: 300 }}
                    size='small'
                    placeholder='请输入常用昵称'
                    value={name}
                    onChange={(e) => {
                        const { value } = e.target;
                        setName(value);
                    }}
                />
            </InputWrp>

            <InputWrp css={{ mt: 16 }}>
                <InputLabel>职业：</InputLabel>
                <PrimaryInput
                    css={{ w: 300 }}
                    size='small'
                    placeholder='请输入职业'
                    value={zhiye}
                    onChange={(e) => {
                        const { value } = e.target;
                        setZhiye(value);
                    }}
                />
            </InputWrp>
            <WarnLabel>*此信息用于站内学习社区功能，不会同步修改简历</WarnLabel>
            <PrimaryButton
                text='提交'
                css={{ w: 120, h: 46 }}
                onClick={() => {
                    console.log('submit');
                }}
            />
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

Me.getLayout = function getLayout(page: ReactElement) {
    return <InfoLayout>{page}</InfoLayout>;
};
