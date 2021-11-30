import { styled } from '../stitches.config';
import Image from 'next/image';
import Icon from './icon';

export const FlexDiv = styled('div', {
    display: 'flex',
});

export const TopLeftPartWrap = styled('div', {
    w: 682,
    h: 392,
    position: 'relative',
    mr: 16,
});

export const TopLeftTitleWrap = styled('div', {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: '$w',
    p: '7px 22px 11px 20px',
    fs: 20,
    ff: '$fr',
});

export const WrapOneLine = styled('div', {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 1,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
});

const ZItemWrap = styled('div', {
    w: 384,
    h: 392,
    backgroundColor: '$w',
    p: 20,
    mb: 16,
});

interface ZProps {
    item: any;
    onClick: () => void;
}

export function ZhaopinItem({ item, onClick }: ZProps) {
    const { img, title, company, time, companyNum, gwNum, qzNum } = item;
    return (
        <ZItemWrap onClick={onClick}>
            <Image alt='zhaopin' src={img} width={342} height={180} />
            <WrapOneLine css={{ '-webkit-line-clamp': 2, mt: 20, fw: 600, color: '#3C4441' }}>{title}</WrapOneLine>
            <FlexDiv css={{ mt: 10, justifyContent: 'space-between' }}>
                <FlexDiv css={{ alignItems: 'center' }}>
                    <Icon name='icon-icon_zaixianjianli' />
                    <FlexDiv css={{ color: '$primary' }}>{companyNum}</FlexDiv>企业
                </FlexDiv>
                <FlexDiv css={{ alignItems: 'center' }}>
                    <Icon name='icon-icon_zaixianjianli' />
                    <FlexDiv css={{ color: '$primary' }}>{gwNum}</FlexDiv>岗位
                </FlexDiv>
                <FlexDiv css={{ alignItems: 'center' }}>
                    <Icon name='icon-icon_zaixianjianli' />
                    <FlexDiv css={{ color: '$primary' }}>{qzNum}</FlexDiv>人求职
                </FlexDiv>
            </FlexDiv>
            <FlexDiv css={{ mt: 16, fs: 14, ff: '$fr', color: 'rgba(0,0,0,0.3)' }}>主办：{company}</FlexDiv>
            <FlexDiv css={{ mt: 10, fs: 14, ff: '$fr', color: 'rgba(0,0,0,0.3)' }}>时间：{time}</FlexDiv>
        </ZItemWrap>
    );
}
