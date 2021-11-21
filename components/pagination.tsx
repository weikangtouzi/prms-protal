import { styled } from '../stitches.config';
import Icon from './icon';

const PaginationWrap = styled('div', {
    display: 'flex',
    marginTop: 30,
});

const PageItem = styled('div', {
    userSelect: 'none',
    w: 36,
    h: 32,
    borderRadius: 2,
    fs: 16,
    ff: '$fr',
    ml: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
        active: {
            true: { backgroundColor: '$primary', color: '$w' },
            false: { backgroundColor: '$w', color: '#3C4441' },
        },
    },
    defaultVariants: {
        active: false,
    },
});

interface IProps {
    current: number;
    total: number;
    css?: any;
    setCurrent: (c: number) => void;
}

interface NProps {
    list: number[];

    setCurrent: (c: number) => void;
    current: number;
}

function NumberList({ list, current, setCurrent }: NProps) {
    return (
        <>
            {list.map((art) => (
                <PageItem
                    onClick={() => {
                        setCurrent(art);
                    }}
                    key={art}
                    active={current === art}>
                    {art}
                </PageItem>
            ))}
        </>
    );
}

export default function Pagination({ setCurrent, current, total, css = {} }: IProps) {
    const leftArrow = (
        <PageItem
            css={{ ml: 0 }}
            onClick={() => {
                if (current > 1) {
                    setCurrent(current - 1);
                }
            }}>
            <Icon name='icon-icon_xialaxuanxiang-left-copy' />
        </PageItem>
    );

    const rightArrow = (
        <PageItem
            onClick={() => {
                if (current < total) {
                    setCurrent(current + 1);
                }
            }}>
            <Icon name='icon-icon_xialaxuanxiang' />
        </PageItem>
    );

    let mid;

    if (total < 5) {
        let ar = [];

        for (let i = 1; i <= total; i++) {
            ar.push(i);
        }

        mid = <NumberList list={ar} current={current} setCurrent={setCurrent} />;
    } else {
        if (current <= 3) {
            const ar = [1, 2, 3, 4];
            mid = (
                <>
                    <NumberList list={ar} current={current} setCurrent={setCurrent} />
                    <PageItem>...</PageItem>
                </>
            );
        } else {
            if (total === current) {
                let ar = [current - 2, current - 1, current];

                mid = (
                    <>
                        <PageItem>{1}</PageItem>
                        <PageItem>...</PageItem>
                        <NumberList list={ar} current={current} setCurrent={setCurrent} />
                    </>
                );
            } else if (total < current + 3 && total > current) {
                let ar = [];

                for (let i = current - 1; i <= total; i++) {
                    ar.push(i);
                }

                mid = (
                    <>
                        <PageItem>{1}</PageItem>
                        <PageItem>...</PageItem>
                        <NumberList list={ar} current={current} setCurrent={setCurrent} />
                    </>
                );
            } else {
                const ar = [current - 1, current, current + 1];

                mid = (
                    <>
                        <PageItem>{1}</PageItem>
                        <PageItem>...</PageItem>
                        <NumberList list={ar} current={current} setCurrent={setCurrent} />

                        <PageItem>...</PageItem>
                    </>
                );
            }
        }
    }

    return (
        <PaginationWrap css={css}>
            {leftArrow}
            {mid}
            {rightArrow}
        </PaginationWrap>
    );
}
