import type { ReactElement } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/layout';
import Icon from '../components/icon';
import ConfirmDialog from '../components/confirm-dialog';
import CloseDialog from '../components/close-dialog';
import PrimaryInput from '../components/primary-input';
import PrimaryButton from '../components/primary-button';
import {
    EditWrap,
    ResuTitle,
    Main,
    LeftWrap,
    LeftTitleWrap,
    RightBtn,
    FlexDiv,
    UploadText,
    LeftMenuTitle,
    RightWrap,
    RightPartWrap,
    ResumeItem,
    UploadBtnText,
    UploadPrimaryBtn,
    RealInput,
    ResumeMenuItem,
    InputFormItem,
    FormWrap,
    RadioItem,
    FormItemLabel,
} from '../components/resume-components';

const jlIcon = [
    {
        text: '简历刷新',
        name: 'icon-icon_shuaxinjianli',
    },
    {
        text: '简历置顶',
        name: 'icon-icon_shuaxinjianli',
    },
    {
        text: '简历优化',
        name: 'icon-icon_shuaxinjianli',
    },
];

const resumeMenu = [
    {
        text: '个人信息',
        name: 'icon-icon_renshu',
        activeName: 'icon-icon_renshu-copy',
    },
    {
        text: '求职意向',
        name: 'icon-icon_qiuzhioff',
        activeName: 'icon-icon_qiuzhioff-copy',
    },
    {
        text: '个人优势',
        name: 'icon-icon_zaixianjianli',
        activeName: 'icon-icon_zaixianjianli-copy',
    },
    {
        text: '工作经历',
        name: 'icon-icon_renshu',
        activeName: 'icon-icon_qiuzhion-copy',
    },
    {
        text: '项目经历',
        name: 'icon-icon_touzioff',
        activeName: 'icon-icon_touzioff-copy',
    },
    {
        text: '教育经历',
        name: 'icon-icon_renshu',
        activeName: 'icon-icon_renshu-copy',
    },
];

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png';
export default function Resume() {
    const [resumeList, setResumeList] = useState([
        { title: '附件简历0000001.doc', size: '52M', id: 1, img: imgUrl },
        { title: '附件简历002.pdf', size: '5M', id: 2, img: imgUrl },
    ]);

    const [deleteOpen, setDeleteOpen] = useState(false);
    const [modifyOpen, setModifyOpen] = useState(false);
    const [menuActive, setMenuActive] = useState(0);

    const [editInfo, setEditInfo] = useState(true);

    const meInfoDom = (
        <EditWrap>
            <ResuTitle css={{ fs: 18 }}>我的简历</ResuTitle>
            <FormWrap>
                <InputFormItem css={{ mt: 30, w: 430 }} label='昵称：'>
                    <PrimaryInput size='small' css={{ backgroundColor: '$w', w: 300, h: 42, mt: 10 }} placeholder='昵称' />
                </InputFormItem>
                <InputFormItem css={{ mt: 30 }} label='性别：'>
                    <FlexDiv css={{ mt: 10 }}>
                        <RadioItem>男</RadioItem>
                        <RadioItem active css={{ ml: 26 }}>
                            女
                        </RadioItem>
                    </FlexDiv>
                </InputFormItem>
                <InputFormItem css={{ mt: 30, w: 430 }} label='出生日期：'>
                    <PrimaryInput size='small' css={{ backgroundColor: '$w', w: 300, h: 42, mt: 10 }} placeholder='出生日期' />
                </InputFormItem>
                <InputFormItem css={{ mt: 30 }} label='所在城市：'>
                    <PrimaryInput size='small' css={{ backgroundColor: '$w', w: 300, h: 42, mt: 10 }} placeholder='昵称' />
                </InputFormItem>
                <InputFormItem css={{ mt: 30, w: 430 }} label='手机号码：'>
                    <FlexDiv css={{ mt: 10, flexDirection: 'column', alignItems: 'flex-start' }}>
                        <FlexDiv css={{ w: 300, h: 42, backgroundColor: 'rgba(0, 0, 0, 0.05)', pl: 20, color: '#616A67', borderRadius: 2 }}>12333334444</FlexDiv>
                        <FormItemLabel css={{ fs: 14, ff: '$fr', mt: 10 }}>手机号码为登录账号，如需修改可在个人信息-账号安全 中修改</FormItemLabel>
                    </FlexDiv>
                </InputFormItem>
                <InputFormItem css={{ mt: 30 }} label='您的学历：'>
                    <PrimaryInput size='small' css={{ backgroundColor: '$w', w: 300, h: 42, mt: 10 }} placeholder='昵称' />
                </InputFormItem>
                <InputFormItem css={{ mt: 30, w: 430 }} label='首次参加工作时间：'>
                    <PrimaryInput size='small' css={{ backgroundColor: '$w', w: 300, h: 42, mt: 10 }} placeholder='首次参加工作时间' />
                </InputFormItem>
                <FlexDiv>
                    <PrimaryButton
                        onClick={() => {
                            setEditInfo(false);
                        }}
                        css={{ w: 80, h: 42, fs: 16, border: '1px solid #8C9693', backgroundColor: '#F5F6F8', color: '#616A67', mt: 56, ml: 120 }}
                        text='取消'
                    />
                    <PrimaryButton
                        onClick={() => {
                            setEditInfo(false);
                        }}
                        css={{ w: 80, h: 42, ml: 20, fs: 16, mt: 56 }}
                        text='完成'
                    />
                </FlexDiv>
            </FormWrap>
        </EditWrap>
    );

    return (
        <Main>
            <LeftWrap>
                <LeftTitleWrap>
                    <ResuTitle>我的简历</ResuTitle>
                    <RightBtn>预览简历</RightBtn>
                </LeftTitleWrap>
                {editInfo ? (
                    meInfoDom
                ) : (
                    <FlexDiv css={{ justifyContent: 'space-between', alignItems: 'flex-start', mt: 39, p: '0 20px' }}>
                        <FlexDiv css={{ alignItems: 'flex-start' }}>
                            <Image alt='header' className='use-image-round' src={imgUrl} width={64} height={64} />
                            <FlexDiv css={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 20 }}>
                                <UploadText css={{ fs: 24, mt: 0, fw: 600, color: '#3C4441' }}>陈小小</UploadText>
                                <UploadText css={{ mt: 9, ff: '$fr', color: '#3C4441' }}>5年｜本科｜25岁</UploadText>
                                <UploadText css={{ mt: 9, ff: '$fr', color: '#3C4441' }}>2017.03｜130******90</UploadText>
                            </FlexDiv>
                        </FlexDiv>

                        <RightBtn
                            onClick={() => {
                                setEditInfo(true);
                            }}
                            css={{ fs: 16 }}>
                            编辑
                        </RightBtn>
                    </FlexDiv>
                )}
                {resumeMenu.slice(1).map((lr, idx) => (
                    <LeftMenuTitle key={lr.text} title={lr.text} onEdit={() => {}}>
                        {idx === 0 ? 'aaaa' : null}
                    </LeftMenuTitle>
                ))}
            </LeftWrap>
            <RightWrap>
                <RightPartWrap>
                    <ResuTitle css={{ mb: 15 }}>我的简历</ResuTitle>
                    {resumeList.map((rs) => (
                        <ResumeItem
                            item={rs}
                            onDelete={() => {
                                setDeleteOpen(true);
                            }}
                            onModify={() => {
                                setModifyOpen(true);
                            }}
                            key={rs.id}></ResumeItem>
                    ))}
                    <UploadPrimaryBtn htmlFor='uploadRealInputId'>
                        <Icon name='icon-icon_shangchuan-copy' />
                        <UploadBtnText>上传简历</UploadBtnText>
                    </UploadPrimaryBtn>
                    {resumeList.length > 0 ? null : (
                        <UploadText>
                            1.请上传中文简历 <br />
                            2.仅支持doc、docx、pdf格式 <br />
                            3.文件大小不超过3M
                        </UploadText>
                    )}
                    <RealInput
                        id='uploadRealInputId'
                        onChange={(e) => {
                            const { files = [] } = e.target;
                            if (files && files.length > 0) {
                                console.log('files', files[0]);
                            }
                        }}
                        type='file'
                        accept='.doc,.docx,.pdf'
                    />
                </RightPartWrap>
                <RightPartWrap css={{ display: 'flex', p: '23px 0 20px 0' }}>
                    {jlIcon.map((j) => (
                        <FlexDiv css={{ flexDirectionCenter: 'column' }} key={j.text}>
                            <Icon name={j.name} />
                            <UploadText css={{ w: 94, textAlign: 'center', mt: 18 }}>{j.text}</UploadText>
                        </FlexDiv>
                    ))}
                </RightPartWrap>
                <RightPartWrap css={{ p: '20px 10px', mb: 20 }}>
                    {resumeMenu.map((rm, idx) => (
                        <ResumeMenuItem
                            onClick={() => {
                                setMenuActive(idx);
                            }}
                            item={rm}
                            key={rm.text}
                            active={idx === menuActive}></ResumeMenuItem>
                    ))}
                </RightPartWrap>
            </RightWrap>
            <ConfirmDialog title='删除简历' bodyText='删除后不可恢复，确认删除吗？' open={deleteOpen} onOpenChange={setDeleteOpen} />
            <CloseDialog
                hasCloseIcon={false}
                dialogCss={{ w: 500, h: 295, borderRadius: 5 }}
                titleCss={{ textAlign: 'left', ml: 40 }}
                title='修改附件简历名称'
                open={modifyOpen}
                onOpenChange={setModifyOpen}
                onClose={() => {}}>
                <ResuTitle css={{ textAlign: 'left', fs: 16, fw: 400, ml: 40, mt: 10, ff: '$fr', color: '#616A67' }}>请输入你确认要修改的简历名称</ResuTitle>
                <PrimaryInput size='small' placeholder='修改的简历名称' css={{ w: 420, h: 60, ml: 40, mt: 20 }} />
                <FlexDiv css={{ justifyContent: 'flex-end', pr: 40 }}>
                    <PrimaryButton
                        css={{ mt: 20, mr: 20, w: 80, h: 42, backgroundColor: '$w', color: '#3C4441', border: '1px solid rgba(0, 0, 0, 0.2)' }}
                        onClick={() => {
                            setModifyOpen(false);
                        }}
                        text='取消'
                    />
                    <PrimaryButton
                        css={{ mt: 20, w: 80, h: 42 }}
                        text='确定'
                        onClick={() => {
                            console.log('queding');
                            setModifyOpen(false);
                        }}
                    />
                </FlexDiv>
            </CloseDialog>
        </Main>
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

Resume.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
