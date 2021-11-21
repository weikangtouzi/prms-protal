import type { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import InfoLayout from '../../components/info-layout';
import { styled } from '../../stitches.config';
import PrimaryButton from '../../components/primary-button';
import PrimaryInput from '../../components/primary-input';
import CloseDialog from '../../components/close-dialog';
import ConfirmDialog from '../../components/confirm-dialog';

const RightWrap = styled('div', {
    w: 884,
    h: 539,
    backgroundColor: '$w',
    mt: 16,
    ml: 16,
    mb: 135,
});

const DivWrap = styled('div', {
    ml: 0,
    display: 'flex',
    mt: 40,
    alignItems: 'center',
});

const LeftLabel = styled('div', {
    fs: 16,
    color: '#616A67',
    textAlign: 'end',
});

const MidContent = styled('div', {
    color: '#3C4441',
    fs: 16,
    fw: 600,
    ml: 10,
    display: 'flex',
    alignItems: 'center',
});

const RightBtn = styled('div', {
    fs: 16,
    color: '$primary',
    fw: 600,
    userSelect: 'none',
    ml: 50,
});

const DashLine = styled('div', {
    w: 684,
    h: 0,
    borderTop: '1px dashed rgba(0, 0, 0, 0.1)',
    ml: 100,
    mt: 40,
});

const InputLabel = styled('div', {
    w: 100,
    fs: 18,
    color: '#616A67',
    textAlign: 'end',
});

const RedStr = styled('span', {
    color: '#FF0000',
});

const InputWrp = styled('div', {
    ml: 59,
    h: 42,
    display: 'flex',
    alignItems: 'center',
});

const url = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';

export default function Safe() {
    const [newEmail, setNewEmail] = useState(false);
    const [pwdOpen, setPwdOpen] = useState(false);
    const [phoneOpen, setPhoneOpen] = useState(false);
    const [zxOpen, setZxOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return (
        <RightWrap>
            <DivWrap css={{ ml: 100, mt: 100 }}>
                <LeftLabel>手机号码：</LeftLabel>
                <MidContent>13077828990</MidContent>
                <RightBtn
                    onClick={() => {
                        setPhoneOpen(true);
                    }}>
                    修改手机号码
                </RightBtn>
            </DivWrap>
            <DashLine />

            <DivWrap css={{ ml: 142 }}>
                <LeftLabel>微信：</LeftLabel>
                <MidContent>
                    <Image src={url} className='use-image-round' alt='ht' width={34} height={34} />
                    <MidContent css={{ ml: 6 }}>用户名</MidContent>
                </MidContent>
                <RightBtn
                    onClick={() => {
                        setZxOpen(true);
                    }}
                    css={{ ml: 64 }}>
                    解除绑定
                </RightBtn>
            </DivWrap>

            <DivWrap css={{ ml: 142, mt: 35 }}>
                <LeftLabel>邮箱：</LeftLabel>
                {newEmail ? (
                    <>
                        <PrimaryInput
                            size='small'
                            value={email}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmail(value);
                            }}
                            placeholder='输入新邮箱'
                            css={{ w: 300 }}
                        />
                        <PrimaryButton
                            css={{ w: 80, h: 42, mt: 0, ml: 20, fs: 16 }}
                            text='保存'
                            onClick={() => {
                                setNewEmail(false);
                            }}
                        />
                        <PrimaryButton
                            css={{ w: 80, h: 42, mt: 0, ml: 20, fs: 16, backgroundColor: '$w', color: '#616A67', border: '1px solid #616A67' }}
                            text='取消'
                            onClick={() => {
                                setNewEmail(false);
                            }}
                        />
                    </>
                ) : (
                    <>
                        <MidContent>chewenmiao05058@163.com</MidContent>
                        <RightBtn
                            onClick={() => {
                                setNewEmail(true);
                            }}>
                            修改邮箱
                        </RightBtn>
                    </>
                )}
            </DivWrap>

            <DivWrap css={{ ml: 110 }}>
                <LeftLabel>实名认证：</LeftLabel>
                <MidContent>**陈</MidContent>
                <MidContent css={{ ml: 30 }}>3*****************3</MidContent>
            </DivWrap>

            <DivWrap css={{ ml: 110 }}>
                <LeftLabel>密码设置：</LeftLabel>
                <RightBtn
                    onClick={() => {
                        setPwdOpen(true);
                    }}
                    css={{ ml: 10 }}>
                    修改密码
                </RightBtn>
            </DivWrap>

            <CloseDialog
                title='修改密码'
                dialogCss={{ h: 493 }}
                onClose={() => {
                    setPwdOpen(false);
                }}
                open={pwdOpen}
                onOpenChange={setPwdOpen}>
                <InputWrp css={{ h: 64, mt: 40 }}>
                    <InputLabel>
                        <RedStr>*</RedStr>原密码：
                    </InputLabel>
                    <PrimaryInput
                        css={{ mt: 0, w: 420 }}
                        inputCss={{ ml: 0, w: '100%' }}
                        type='password'
                        value={pwd}
                        onChange={(e) => {
                            const { value } = e.target;
                            setPwd(value);
                        }}
                        placeholder='请输入密码'
                    />
                </InputWrp>
                <InputWrp css={{ h: 64, mt: 20 }}>
                    <InputLabel>
                        <RedStr>*</RedStr>新密码：
                    </InputLabel>
                    <PrimaryInput
                        css={{ mt: 0, w: 420 }}
                        inputCss={{ ml: 0, w: '100%' }}
                        type='password'
                        value={pwd}
                        onChange={(e) => {
                            const { value } = e.target;
                            setPwd(value);
                        }}
                        placeholder='请输入密码'
                    />
                </InputWrp>
                <InputWrp css={{ h: 64, mt: 20 }}>
                    <InputLabel>
                        <RedStr>*</RedStr>确认密码：
                    </InputLabel>
                    <PrimaryInput
                        css={{ mt: 0, w: 420 }}
                        inputCss={{ ml: 0, w: '100%' }}
                        type='password'
                        value={pwd}
                        onChange={(e) => {
                            const { value } = e.target;
                            setPwd(value);
                        }}
                        placeholder='请输入密码'
                    />
                </InputWrp>
                <PrimaryButton
                    css={{ w: 420, ml: 97 }}
                    text='确认'
                    onClick={() => {
                        setPwdOpen(false);
                    }}
                />
            </CloseDialog>

            <CloseDialog
                onClose={() => {
                    setPhoneOpen(false);
                }}
                title='新手机号'
                open={phoneOpen}
                onOpenChange={setPhoneOpen}>
                <InputWrp css={{ h: 64, mt: 40 }}>
                    <InputLabel>
                        <RedStr>*</RedStr>手机号码：
                    </InputLabel>
                    <PrimaryInput
                        css={{ mt: 0, w: 420 }}
                        inputCss={{ ml: 0, w: '100%' }}
                        value={pwd}
                        onChange={(e) => {
                            const { value } = e.target;
                            setPwd(value);
                        }}
                        placeholder='输入手机号码'
                    />
                </InputWrp>
                <InputWrp css={{ h: 64, mt: 20 }}>
                    <InputLabel>
                        <RedStr>*</RedStr>密码：
                    </InputLabel>
                    <PrimaryInput
                        css={{ mt: 0, w: 420 }}
                        inputCss={{ ml: 0, w: '100%' }}
                        type='password'
                        value={pwd}
                        onChange={(e) => {
                            const { value } = e.target;
                            setPwd(value);
                        }}
                        placeholder='请输入密码'
                    />
                </InputWrp>
                <InputWrp css={{ h: 64, mt: 20 }}>
                    <InputLabel>
                        <RedStr>*</RedStr>确认密码：
                    </InputLabel>
                    <PrimaryInput
                        css={{ mt: 0, w: 420 }}
                        inputCss={{ ml: 0, w: '100%' }}
                        type='password'
                        value={pwd}
                        onChange={(e) => {
                            const { value } = e.target;
                            setPwd(value);
                        }}
                        placeholder='确认密码'
                    />
                </InputWrp>

                <InputWrp css={{ h: 64, mt: 20 }}>
                    <InputLabel>
                        <RedStr>*</RedStr>验证码：
                    </InputLabel>
                    <PrimaryInput
                        css={{ mt: 0, w: 250 }}
                        inputCss={{ ml: 0, w: '100%' }}
                        value={pwd}
                        onChange={(e) => {
                            const { value } = e.target;
                            setPwd(value);
                        }}
                        placeholder='请输入验证码'
                    />
                    <PrimaryButton
                        css={{ w: 150, ml: 20, mt: 0 }}
                        text='获取验证码'
                        onClick={() => {
                            console.log('dsldwe');
                        }}
                    />
                </InputWrp>
                <PrimaryButton
                    css={{ w: 420, ml: 97 }}
                    text='确认'
                    onClick={() => {
                        setPhoneOpen(false);
                    }}
                />
            </CloseDialog>
            <ConfirmDialog open={zxOpen} onOpenChange={setZxOpen} title='确认要解除与微信的绑定吗？' bodyText='确认后，将不能使用微信登录趁早找' />
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

Safe.getLayout = function getLayout(page: ReactElement) {
    return <InfoLayout>{page}</InfoLayout>;
};