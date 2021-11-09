import { styled } from '../stitches.config';

const ButtonDiv = styled('button', {
    h: 64,
    w: '100%',
    mt: 40,
    borderRadius: '2px',
    fs: 18,
    fw: 400,
    ff: '$fr',
    color: '$w',
    backgroundColor: '$primary',
    border: '1px solid $primary',
    variants: {
        disabled: {
            true: { opacity: 0.2 },
            false: {},
        },
    },
});

interface IProps {
    text: any;
    onClick: () => void;
    css?: any;
    disabled?: boolean;
}

export default function PrimaryButton({ text, onClick, css, disabled = false }: IProps) {
    return (
        <ButtonDiv css={css} disabled={disabled} onClick={disabled ? () => {} : onClick}>
            {text}
        </ButtonDiv>
    );
}
