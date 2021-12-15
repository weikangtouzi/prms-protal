import Image from 'next/image'
import {useState, useEffect} from 'react'
import Icon from '@/components/icon'
import {CloseDialog, ConfirmDialog} from '@/components/dialogs'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'
import {Select} from '@/components/select'
import {
  EditWrap,
  ResuTitle,
  Main,
  LeftWrap,
  LeftTitleWrap,
  RightBtn,
  Flex,
  UploadText,
  RightWrap,
  RightPartWrap,
  UploadBtnText,
  UploadPrimaryBtn,
  RealInput,
  FormWrap,
  RadioItem,
  FormItemLabel,
  NormalText,
} from './components/styled'
import ResumeItem from './components/resume-item'
import ResumeMenuItem from './components/resume-menu-item'
import LeftMenuTitle from './components/left-menu-title'
import InputFormItem from '../login/components/input-form'
import {useUploadFileMutation} from '@/generated'
import {fetchIndustry, fetchJob} from './api/josn'

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
]

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
]

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
export default function Resume() {
  const [resumeList] = useState([
    {title: '附件简历0000001.doc', size: '52M', id: 1, img: imgUrl},
    {title: '附件简历002.pdf', size: '5M', id: 2, img: imgUrl},
  ])

  const [deleteOpen, setDeleteOpen] = useState(false)
  const [modifyOpen, setModifyOpen] = useState(false)
  const [menuActive, setMenuActive] = useState(0)

  const [editInfo, setEditInfo] = useState(false)
  const [editQz, setEditQz] = useState(false)
  const [editGr, setEditGr] = useState(false)
  const [editGz, setEditGz] = useState(false)
  const [editXm, setEditXm] = useState(false)
  const [editJy, setEditJy] = useState(false)

  const [name, setName] = useState('')
  const [city, setCity] = useState('')

  const [uploadFile] = useUploadFileMutation()

  useEffect(() => {
    const industry = fetchIndustry()
    const job = fetchJob()

    console.log('inducstry', industry, job)
  }, [])

  const meInfoDom = (
    <EditWrap>
      <ResuTitle css={{fs: 18}}>我的简历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 430}} label='昵称：'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='性别：'>
          <Flex css={{mt: 10}}>
            <RadioItem>男</RadioItem>
            <RadioItem active css={{ml: 26}}>
              女
            </RadioItem>
          </Flex>
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='出生日期：'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='所在城市：'>
          <Select css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='手机号码：'>
          <Flex css={{mt: 10, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Flex css={{w: 300, h: 42, bg: 'rgba(0, 0, 0, 0.05)', pl: 20, color: '#616A67', borderRadius: 2}}>
              12333334444
            </Flex>
            <FormItemLabel css={{fs: 14, ff: '$fr', mt: 10}}>
              手机号码为登录账号，如需修改可在个人信息-账号安全 中修改
            </FormItemLabel>
          </Flex>
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='您的学历：'>
          <Select css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='首次参加工作时间：'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <Flex>
          <Button
            onClick={() => {
              setEditInfo(false)
            }}
            css={{
              w: 80,
              h: 42,
              fs: 16,
              border: '1px solid #8C9693',
              bg: '#F5F6F8',
              color: '#616A67',
              mt: 56,
              ml: 120,
            }}
            text='取消'
          />
          <Button
            onClick={() => {
              setEditInfo(false)
            }}
            css={{w: 80, h: 42, ml: 20, fs: 16, mt: 56}}
            text='完成'
          />
        </Flex>
      </FormWrap>
    </EditWrap>
  )

  const qzEditDom = (
    <EditWrap>
      <ResuTitle css={{fs: 18}}>编辑求职意向</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 430}} label='期望岗位'>
          <Select css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='期望行业'>
          <Select css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='期望城市'>
          <Select css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='期望薪资'>
          <Flex css={{mt: 10}}>
            <Select css={{w: 132, mr: 10}} value={city} onSelect={setCity} />
            至
            <Select css={{w: 132, ml: 10}} value={city} onSelect={setCity} />
          </Flex>
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='工作性质'>
          <Select css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <Flex>
          <Button
            onClick={() => {
              setEditQz(false)
            }}
            css={{
              w: 80,
              h: 42,
              fs: 16,
              border: '1px solid #8C9693',
              bg: '#F5F6F8',
              color: '#616A67',
              mt: 56,
              ml: 120,
            }}
            text='取消'
          />
          <Button
            onClick={() => {
              setEditQz(false)
            }}
            css={{w: 80, h: 42, ml: 20, fs: 16, mt: 56}}
            text='完成'
          />
        </Flex>
      </FormWrap>
    </EditWrap>
  )
  const grEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>编辑个人优势</ResuTitle>
      <TextField
        type='textarea'
        value={name}
        onChange={(e) => {
          const {value} = e.target
          setName(value)
        }}
        size='small'
        css={{bg: '$w', w: 804, h: 240, mt: 20}}
        placeholder='请输入'
      />
      <Flex css={{justifyContent: 'flex-end'}}>
        <Button
          onClick={() => {
            setEditGr(false)
          }}
          css={{
            w: 80,
            h: 42,
            fs: 16,
            border: '1px solid #8C9693',
            bg: '#F5F6F8',
            color: '#616A67',
            mt: 20,
            ml: 120,
          }}
          text='取消'
        />
        <Button
          onClick={() => {
            setEditGr(false)
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
  )
  const gzEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>编辑工作经历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 524}} label='公司名称'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 400, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='职位名称'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 206, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='在职时间'>
          <Flex css={{mt: 10}}>
            <Select css={{w: 177, mr: 15}} value={city} onSelect={setCity} />
            至
            <Select css={{w: 177, ml: 15}} value={city} onSelect={setCity} />
          </Flex>
        </InputFormItem>
      </FormWrap>
      <InputFormItem css={{mt: 30}} label='工作内容'>
        <TextField
          type='textarea'
          value={name}
          onChange={(e) => {
            const {value} = e.target
            setName(value)
          }}
          size='small'
          css={{bg: '$w', w: 804, h: 240, mt: 10}}
          placeholder='请输入'
        />
      </InputFormItem>
      <Flex css={{justifyContent: 'flex-end'}}>
        <Button
          onClick={() => {
            setEditGz(false)
          }}
          css={{
            w: 80,
            h: 42,
            fs: 16,
            border: '1px solid #8C9693',
            bg: '#F5F6F8',
            color: '#616A67',
            mt: 20,
            ml: 120,
          }}
          text='取消'
        />
        <Button
          onClick={() => {
            setEditGz(false)
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
  )
  const xmEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>编辑项目经历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 524}} label='项目名称'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 400, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='担任名称'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 206, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='项目时间'>
          <Flex css={{mt: 10}}>
            <Select css={{w: 177, mr: 15}} value={city} onSelect={setCity} />
            至
            <Select css={{w: 177, ml: 15}} value={city} onSelect={setCity} />
          </Flex>
        </InputFormItem>
      </FormWrap>
      <InputFormItem css={{mt: 30}} label='项目描述'>
        <TextField
          type='textarea'
          value={name}
          onChange={(e) => {
            const {value} = e.target
            setName(value)
          }}
          size='small'
          css={{bg: '$w', w: 804, h: 240, mt: 10}}
          placeholder='请输入'
        />
      </InputFormItem>

      <InputFormItem css={{mt: 30}} label='项目业绩'>
        <TextField
          type='textarea'
          value={name}
          onChange={(e) => {
            const {value} = e.target
            setName(value)
          }}
          size='small'
          css={{bg: '$w', w: 804, h: 240, mt: 10}}
          placeholder='请输入'
        />
      </InputFormItem>
      <Flex css={{justifyContent: 'flex-end'}}>
        <Button
          onClick={() => {
            setEditXm(false)
          }}
          css={{
            w: 80,
            h: 42,
            fs: 16,
            border: '1px solid #8C9693',
            bg: '#F5F6F8',
            color: '#616A67',
            mt: 20,
            ml: 120,
          }}
          text='取消'
        />
        <Button
          onClick={() => {
            setEditXm(false)
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
  )
  const jyEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>编辑教育经历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 430}} label='学校名称'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='学历'>
          <Select css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='专业'>
          <TextField
            value={name}
            onChange={(e) => {
              const {value} = e.target
              setName(value)
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='时间段'>
          <Flex css={{mt: 10}}>
            <Select css={{w: 132, mr: 10}} value={city} onSelect={setCity} />
            至
            <Select css={{w: 132, ml: 10}} value={city} onSelect={setCity} />
          </Flex>
        </InputFormItem>
      </FormWrap>
      <InputFormItem css={{mt: 30}} label='在校经历'>
        <TextField
          type='textarea'
          value={name}
          onChange={(e) => {
            const {value} = e.target
            setName(value)
          }}
          size='small'
          css={{bg: '$w', w: 804, h: 240, mt: 10}}
          placeholder='请输入'
        />
      </InputFormItem>
      <Flex css={{justifyContent: 'flex-end'}}>
        <Button
          onClick={() => {
            setEditJy(false)
          }}
          css={{
            w: 80,
            h: 42,
            fs: 16,
            border: '1px solid #8C9693',
            bg: '#F5F6F8',
            color: '#616A67',
            mt: 20,
            ml: 120,
          }}
          text='取消'
        />
        <Button
          onClick={() => {
            setEditJy(false)
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
  )

  const qzDom = <NormalText css={{mt: 30}}>期望岗位｜期望行业｜期望城市｜期望薪资｜工作性质</NormalText>
  const grDom = (
    <NormalText css={{mt: 30, lineHeight: '30px'}}>
      1、精通Photoshop，Illustrator等设计软件，精准的视觉设计把控 <br />
      2、有手机端和pc端设计以及平面设计经验 3、能合理分析用户需求，制作高保真低保真原型图 <br />
      4、具有一定的手绘功底
      <br /> 5、爱好写作，能及时分析热点
      <br /> 6、性格开朗，乐观向上，勤奋刻苦，喜欢接触不同的事物，也喜欢尝试不同的事情
    </NormalText>
  )

  const gzDom = (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32, mt: 30}}>
      <Flex css={{fw: 600}}>深圳市华为科技有限公司</Flex>
      <Flex css={{fw: 600, mt: 10}}>2010.01.10-2021.10.1 ｜UI设计</Flex>
      <NormalText css={{ml: 0, mt: 20}}>工作内容：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
    </Flex>
  )
  const xmDom = (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32, mt: 30}}>
      <Flex css={{fw: 600, fs: 18}}>抖音APP</Flex>
      <Flex css={{fw: 600, mt: 10}}>2010.01.10-2021.10.1 ｜UI设计</Flex>
      <NormalText css={{ml: 0, mt: 20}}>项目描述：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
      <NormalText css={{ml: 0, mt: 30}}>项目业绩：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
    </Flex>
  )
  const jyDom = (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32, mt: 30}}>
      <Flex css={{fw: 600}}>深圳大学</Flex>
      <Flex css={{fw: 600, mt: 10}}>视觉传达艺术设计 ｜本科</Flex>
      <NormalText css={{ml: 0, mt: 20}}>在校经历：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
    </Flex>
  )

  return (
    <Main>
      <LeftWrap>
        <LeftTitleWrap>
          <ResuTitle>我的简历</ResuTitle>
          <RightBtn>
            <a href='/resume/preview' target='_blank' rel='noreferrer'>
              预览简历
            </a>
          </RightBtn>
        </LeftTitleWrap>
        {editInfo ? (
          meInfoDom
        ) : (
          <Flex css={{justifyContent: 'space-between', alignItems: 'flex-start', mt: 39, p: '0 20px'}}>
            <Flex css={{alignItems: 'flex-start'}}>
              <Image alt='header' className='use-image-round' src={imgUrl} width={64} height={64} />
              <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 20}}>
                <UploadText css={{fs: 24, mt: 0, fw: 600, color: '#3C4441'}}>陈小小</UploadText>
                <UploadText css={{mt: 9, ff: '$fr', color: '#3C4441'}}>5年｜本科｜25岁</UploadText>
                <UploadText css={{mt: 9, ff: '$fr', color: '#3C4441'}}>2017.03｜130******90</UploadText>
              </Flex>
            </Flex>

            <RightBtn
              onClick={() => {
                setEditInfo(true)
              }}
              css={{fs: 16}}
            >
              编辑
            </RightBtn>
          </Flex>
        )}
        {resumeMenu.slice(1).map((lr, idx) => (
          <LeftMenuTitle
            key={lr.text}
            title={lr.text}
            edit={
              idx === 0
                ? editQz
                : idx === 1
                ? editGr
                : idx === 2
                ? editGz
                : idx === 3
                ? editXm
                : idx === 4
                ? editJy
                : false
            }
            onEdit={() => {
              if (idx === 0) {
                setEditQz(true)
              } else if (idx === 1) {
                setEditGr(true)
              } else if (idx === 2) {
                setEditGz(true)
              } else if (idx === 3) {
                setEditXm(true)
              } else if (idx === 4) {
                setEditJy(true)
              }
            }}
          >
            {idx === 0 ? (editQz ? qzEditDom : qzDom) : null}
            {idx === 1 ? (editGr ? grEditDom : grDom) : null}
            {idx === 2 ? (editGz ? gzEditDom : gzDom) : null}
            {idx === 3 ? (editXm ? xmEditDom : xmDom) : null}
            {idx === 4 ? (editJy ? jyEditDom : jyDom) : null}
          </LeftMenuTitle>
        ))}
      </LeftWrap>
      <RightWrap>
        <RightPartWrap>
          <ResuTitle css={{mb: 15}}>我的简历</ResuTitle>
          {resumeList.map((rs) => (
            <ResumeItem
              item={rs}
              onDelete={() => {
                setDeleteOpen(true)
              }}
              onModify={() => {
                setModifyOpen(true)
              }}
              key={rs.id}
            ></ResumeItem>
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
              const {files = []} = e.target
              if (files && files.length > 0) {
                uploadFile({variables: {file: files[0], extraAttributes: {}}})
              }
            }}
            type='file'
            accept='.doc,.docx,.pdf'
          />
        </RightPartWrap>
        <RightPartWrap css={{display: 'flex', p: '23px 0 20px 0'}}>
          {jlIcon.map((j) => (
            <Flex css={{flexDirectionCenter: 'column'}} key={j.text}>
              <Icon name={j.name} />
              <UploadText css={{w: 94, textAlign: 'center', mt: 18}}>{j.text}</UploadText>
            </Flex>
          ))}
        </RightPartWrap>
        <RightPartWrap css={{p: '20px 10px', mb: 20}}>
          {resumeMenu.map((rm, idx) => (
            <ResumeMenuItem
              onClick={() => {
                setMenuActive(idx)
              }}
              item={rm}
              key={rm.text}
              active={idx === menuActive}
            ></ResumeMenuItem>
          ))}
        </RightPartWrap>
      </RightWrap>
      <ConfirmDialog
        title='删除简历'
        bodyText='删除后不可恢复，确认删除吗？'
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      />
      <CloseDialog
        hasCloseIcon={false}
        dialogCss={{w: 500, h: 295, borderRadius: 5}}
        titleCss={{textAlign: 'left', ml: 40}}
        title='修改附件简历名称'
        open={modifyOpen}
        onOpenChange={setModifyOpen}
        onClose={() => {}}
      >
        <ResuTitle css={{textAlign: 'left', fs: 16, fw: 400, ml: 40, mt: 10, ff: '$fr', color: '#616A67'}}>
          请输入你确认要修改的简历名称
        </ResuTitle>
        <TextField size='small' placeholder='修改的简历名称' css={{w: 420, h: 60, ml: 40, mt: 20}} />
        <Flex css={{justifyContent: 'flex-end', pr: 40}}>
          <Button
            css={{
              mt: 20,
              mr: 20,
              w: 80,
              h: 42,
              bg: '$w',
              color: '#3C4441',
              border: '1px solid rgba(0, 0, 0, 0.2)',
            }}
            onClick={() => {
              setModifyOpen(false)
            }}
            text='取消'
          />
          <Button
            css={{mt: 20, w: 80, h: 42}}
            text='确定'
            onClick={() => {
              console.log('queding')
              setModifyOpen(false)
            }}
          />
        </Flex>
      </CloseDialog>
    </Main>
  )
}