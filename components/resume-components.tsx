import { useState } from 'react';
import Image from 'next/image';
import { styled } from '../stitches.config';
import Icon from '../components/icon';

export const Main = styled('main', {
    // minHeight: '100vh',
    minWidth: 1184,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#EFF2F1',
});

export const LeftWrap = styled('div', {
    w: 884,
    backgroundColor: '$w',
    mt: 16,
    mr: 16,
    p: '40px 20px',
    mb: 90,
});

export const RightWrap = styled('div', {
    w: 284,
});

export const RightPartWrap = styled('div', {
    w: 284,
    mt: 16,
    backgroundColor: '$w',
    p: 20,
});

export const ResuTitle = styled('div', {
    color: '#3C4441',
    fs: 24,
    fw: 600,
});

export const LeftTitleWrap = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pb: 40,
    borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
    margin: '0 20px',
});

export const RightBtn = styled('div', {
    color: '$primary',
    fs: 18,
    fw: 600,
    userSelect: 'none',
});

export const UploadText = styled('div', {
    fs: 14,
    color: '#616A67',
    lineHeight: '24px',
    mt: 20,
});

export const RealInput = styled('input', {
    display: 'none',
});

export const UploadPrimaryBtn = styled('label', {
    w: '100%',
    borderRadius: '2px',
    mt: 20,
    h: 54,
    backgroundColor: '$primary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const UploadBtnText = styled('div', {
    fw: 600,
    color: '$w',
    fs: 16,
    ml: 10,
});

export const ResumeItemWrap = styled('div', {
    // w: 264,
    h: 42,
    // mr: 10,
    position: 'relative',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    variants: {
        active: {
            true: {
                backgroundColor: '#F2F7F5',
            },
            false: {
                backgroundColor: '$w',
            },
        },
    },
    defaultVariants: {
        active: false,
    },
});

export const FlexDiv = styled('div', {
    display: 'flex',
    alignItems: 'center',
});

export const FloatLeftWrap = styled('div', {
    position: 'absolute',
    w: 438,
    backgroundColor: '$w',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
    borderRadius: 2,
    left: -448,
    top: 0,
    p: 20,
});

export const ResumeDivText = styled('div', {
    ml: 10,
});

export const VerticalDivider = styled('div', {
    w: 2,
    h: 21,
    backgroundColor: '$primary',
    mr: 10,
});

export const EditWrap = styled('div', {
    backgroundColor: '#F5F6F8',
    p: '20px 88px 16px 20px',
    w: 844,
    mt: 19,
});

interface RProps {
    item: {
        id: number;
        title: string;
        size: string;
        img: string;
    };
    onDelete: any;
    onModify: any;
    // onDownload: any;
}

export function ResumeItem({ item, onDelete, onModify }: RProps) {
    const [active, setActive] = useState(false);

    const { id, title, size, img } = item;
    return (
        <ResumeItemWrap
            onMouseMove={() => {
                setActive(true);
            }}
            onMouseLeave={() => {
                setActive(false);
            }}
            active={active}>
            <FlexDiv>
                <Icon name='icon-icon_fujian' />
                {title}
            </FlexDiv>
            <Icon
                onClick={() => {
                    onDelete();
                }}
                name='icon-icon_fujian'
            />
            {active ? (
                <FloatLeftWrap>
                    <FlexDiv css={{ borderBottom: '1px dashed rgba(0, 0, 0, 0.1)', pb: 23 }}>
                        <Image src={img} width={42} height={48} alt='img' />
                        <FlexDiv css={{ flexDirection: 'column', alignItems: 'flex-start', ml: 20 }}>
                            <ResuTitle css={{ fs: 16 }}>{title}</ResuTitle>
                            <ResuTitle css={{ fs: 16, ff: '$fr', fw: 400, mt: 17 }}>{size}</ResuTitle>
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv css={{ mt: 19, justifyContent: 'flex-end' }}>
                        <ResuTitle onClick={onModify} css={{ color: '#616A67', fs: 16, fw: 400, ff: '$fr' }}>
                            重命名
                        </ResuTitle>
                        <ResuTitle css={{ color: '#616A67', fs: 16, fw: 400, ff: '$fr', ml: 40 }}>下载</ResuTitle>
                    </FlexDiv>
                </FloatLeftWrap>
            ) : null}
        </ResumeItemWrap>
    );
}

interface MProps {
    item: {
        text: string;
        name: string;
        activeName: string;
    };
    active: boolean;
    onClick: any;
}

export function ResumeMenuItem({ item, active, onClick }: MProps) {
    const { text, name, activeName } = item;
    const [hoverOn, setHoverOn] = useState(false);

    return (
        <ResumeItemWrap
            css={{ justifyContent: 'flex-start', h: 52, alignItems: 'center', pl: 10 }}
            active={hoverOn}
            onClick={onClick}
            onMouseMove={() => {
                setHoverOn(true);
            }}
            onMouseLeave={() => {
                setHoverOn(false);
            }}>
            <Icon name={active ? activeName : name} />
            <ResumeDivText css={active ? { color: '$primary' } : { color: '#616A67', ff: '$fr' }}>{text}</ResumeDivText>
        </ResumeItemWrap>
    );
}

interface LProps {
    title: string;
    onEdit: any;
    children: any;
    edit: boolean;
}

export function LeftMenuTitle({ title, children, onEdit, edit = false }: LProps) {
    return (
        <>
            {edit ? null : (
                <FlexDiv css={{ alignItems: 'center', justifyContent: 'space-between', mt: 40, p: '0 20px' }}>
                    <FlexDiv css={{ fw: 600 }}>
                        <VerticalDivider />
                        {title}
                    </FlexDiv>
                    <RightBtn onClick={onEdit} css={{ fs: 16 }}>
                        添加
                    </RightBtn>
                </FlexDiv>
            )}
            {children}
        </>
    );
}

export const FormItemLabel = styled('div', {
    fs: 16,
    ff: '$fr',
    color: '#616A67',
});

export const FormItemWrap = styled('div', {
    display: 'flex',
    flexDirection: 'column',
});

export const FormWrap = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
});

interface InProps {
    label: string;
    css?: any;
    children: any;
}

export function InputFormItem({ label, css, children }: InProps) {
    return (
        <FormItemWrap css={css}>
            <FormItemLabel>{label}</FormItemLabel>
            {children}
        </FormItemWrap>
    );
}

export const RadioItem = styled('div', {
    w: 140,
    h: 42,
    fs: 16,
    borderRadius: 2,
    fw: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    variants: {
        active: {
            true: {
                backgroundColor: '$primary',
                color: '$w',
            },
            false: {
                backgroundColor: '$w',
                color: '#3C4441',
            },
        },
    },
    defaultVariants: {
        active: false,
    },
});

export const NormalText = styled('div', {
    fs: 16,
    color: '#3C4441',
    ml: 32,
    ff: '$fr',
    whiteSpace: 'pre',
});
