import { useState } from 'react';
import { styled } from '../stitches.config';

const InputDiv = styled('div', {
    position: 'relative',
    p: '20px 26px',
    borderRadius: '2px',
    display: 'flex',
    mt: 40,
    h: 64,
    variants: {
        active: {
            true: {
                border: '1px solid $primary',
            },
            false: {
                border: '1px solid rgba(0,0,0,0.2)',
            },
        },
    },
});

const RealInput = styled('input', {
    border: 'none',
    outline: 'none',
    fs: 18,
    ml: 26,
    w: 'calc(100% - 72px)',
    '&::placeholder': {
        fw: 400,
        opacity: 0.2,
        ff: '$fr',
    },
});

const ErrDiv = styled('div', {
    color: '$dangerous',
    fs: 14,
    position: 'absolute',
    bottom: -25,
    left: 0,
    fw: 400,
    ff: '$fr',
});
const IconWrap = styled('div', {
    flexShrink: 0,
});

interface IProps {
    err?: string;
    value?: string;
    placeholder?: string;
    icon?: any;
    onChange?: (e: any) => void;
    type?: string;
    size?: string;
    css?: any;
    inputCss?: any;
}

export default function PrimaryInput({ err = '', value = '', type = 'text', placeholder = '', icon = null, onChange, size = 'normal', css = {}, inputCss = {} }: IProps) {
    const [active, setActive] = useState(false);

    if (size === 'small') {
        return (
            <InputDiv css={{ h: 42, mt: 0, p: 0, w: 420, ...css }} active={active}>
                <RealInput
                    css={{ pl: 0, ml: 20, w: '100%' }}
                    type={type}
                    onFocus={() => {
                        setActive(true);
                    }}
                    onBlur={() => {
                        setActive(false);
                    }}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}></RealInput>
                <ErrDiv>{err}</ErrDiv>
            </InputDiv>
        );
    }

    return (
        <InputDiv css={css} active={active}>
            <IconWrap>{icon}</IconWrap>
            <RealInput
                css={inputCss}
                type={type}
                onFocus={() => {
                    setActive(true);
                }}
                onBlur={() => {
                    setActive(false);
                }}
                placeholder={placeholder}
                value={value}
                onChange={onChange}></RealInput>
            <ErrDiv>{err}</ErrDiv>
        </InputDiv>
    );
}
