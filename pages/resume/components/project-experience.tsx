import {useState, useEffect} from 'react'
import {Button} from '@/components/button'
import {TextField} from '@/components/textfield'
import {Select} from '@/components/select'
import {EditWrap, NormalText, ResuTitle, Flex, FormWrap} from './styled'
import LeftMenuTitle from './left-menu-title'
import InputFormItem from '../../login/components/input-form'

function ProjectExperience() {
  const [edit, setEdit] = useState(false)
  const [content, setContent] = useState('')

  const [name, setName] = useState('')
  const [city, setCity] = useState('')

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
            setEdit(false)
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
            setEdit(false)
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
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

  return (
    <LeftMenuTitle
      title='项目经历'
      edit={edit}
      onEdit={() => {
        setEdit(true)
      }}
    >
      {edit ? xmEditDom : xmDom}
    </LeftMenuTitle>
  )
}

export default ProjectExperience
