import type { ReactElement } from 'react';
import InfoLayout from '../../components/info-layout';
import { styled } from '../../stitches.config';

const RightWrap = styled('div', {
    w: 884,
    h: 578,
    backgroundColor: '$w',
    mt: 16,
    ml: 16,
    mb: 135,
});

export default function Yhk() {
    return <RightWrap>银行卡</RightWrap>;
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
