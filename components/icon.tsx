import { styled } from '../stitches.config';

const IconWrap = styled('svg', {});

interface IProps {
    name: string;
    withClassName?: boolean;
    css?: any;
}

export default function Icon({ name, css, withClassName = true }: IProps) {
    return (
        <IconWrap className={withClassName ? 'icon' : ''} css={css} aria-hidden='true'>
            <use xlinkHref={`#${name}`}></use>
        </IconWrap>
    );
}
