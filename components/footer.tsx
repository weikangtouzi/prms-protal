import { styled } from '../stitches.config';

const FooterWrap = styled('footer', {
    display: 'flex',
    flex: 1,
    h: 60,
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#616A67',
    fs: 14,
});

export default function Footer() {
    return (
        <div>
            <FooterWrap>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Copyright © 2021趁早找公司名称. All Rights Reserved
                </a>
            </FooterWrap>
        </div>
    );
}
