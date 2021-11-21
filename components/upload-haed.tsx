import { useState } from 'react';
import Image from 'next/image';
import { styled } from '../stitches.config';

const WrapDiv = styled('div', {
    flexDirectionCenter: 'column',
});

interface IProps {
    css?: any;
}

const EmptyDiv = styled('label', {
    size: 100,
    backgroundColor: '#F2F7F5',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    pt: 28,
    position: 'relative',
});

const EmptyText = styled('span', {
    fs: 14,
    color: '#8C9693',
    fw: 400,
    mt: 6,
});
const EmptyOutlineText = styled('label', {
    fs: 14,
    fw: 400,
    mt: 6,
    textDecoration: 'underline',
    variants: {
        active: {
            true: {
                color: '$primary',
                cursor: 'pointer',
            },
            false: {
                color: '#8C9693',
            },
        },
    },
});
const SecondLine = styled('div', {
    mb: 8,
    mt: 3,
});

const RealInput = styled('input', {
    display: 'none',
});

export default function UploadHead({ css }: IProps) {
    const [url, setUrl] = useState('');
    return (
        <WrapDiv css={css}>
            {url ? (
                <>
                    <EmptyDiv css={{ pt: 0 }}>
                        <Image className='use-image-round' src={url} alt='ht' width={100} height={100} />
                    </EmptyDiv>
                </>
            ) : (
                <>
                    <EmptyDiv htmlFor='realInputId'>
                        <Image src='/add.png' alt='ht' width={32} height={32} />
                        <EmptyText>上传头像</EmptyText>
                    </EmptyDiv>
                </>
            )}
            <SecondLine>
                <EmptyOutlineText htmlFor={url ? 'realInputId' : undefined} active={!!url} css={{ mr: 40 }}>
                    编辑
                </EmptyOutlineText>
                <EmptyOutlineText
                    onClick={() => {
                        if (!url) {
                            return;
                        }
                        setUrl('');
                    }}
                    active={!!url}>
                    删除
                </EmptyOutlineText>
            </SecondLine>
            <RealInput
                id='realInputId'
                onChange={(e) => {
                    const { files = [] } = e.target;
                    if (files && files.length > 0) {
                        setUrl(URL.createObjectURL(files[0]));
                    }
                }}
                type='file'
                accept='.jpg,.png'
            />
            <EmptyText>只支持.jpg/.png格式（单张）</EmptyText>
        </WrapDiv>
    );
}
