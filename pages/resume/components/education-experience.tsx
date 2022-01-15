import {useState, useEffect} from 'react'
import {Button} from '@/components/button'
import {TextField} from '@/components/textfield'
import {Select} from '@/components/select'
import {EditWrap, NormalText, ResuTitle, Flex, FormWrap} from './styled'
import LeftMenuTitle from './left-menu-title'
import InputFormItem from '../../login/components/input-form'
import {educationList} from './constant'
import EditCardItem from './edit-card-item'
import {useUpdateEduExprienceMutation} from '@/generated'

interface EProps {
  eduExp?: any[]
}

const empty = {
  schoolName: '',
  education: '',
  major: '',
  startAt: '',
  endAt: '',
  detail: '',
}

function EducationExperience({eduExp = []}: EProps) {
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)
  const [editDetail, setEditDetail] = useState(empty)

  const [updateEduExprienceMutation] = useUpdateEduExprienceMutation()

  const jyEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>{editIndex < 0 ? '新增' : '编辑'}教育经历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 430}} label='学校名称'>
          <TextField
            value={editDetail.schoolName}
            onChange={(e) => {
              const {value} = e.target
              setEditDetail((d) => ({...d, schoolName: value}))
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='学历'>
          <Select
            css={{w: 300, mt: 10}}
            list={educationList}
            value={
              typeof editDetail.education === 'string'
                ? educationList.find((ed) => ed.key === editDetail.education) || ''
                : editDetail.education
            }
            onSelect={(value: any) => {
              setEditDetail((d) => ({...d, education: value}))
            }}
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='专业'>
          <TextField
            value={editDetail.major}
            onChange={(e) => {
              const {value} = e.target
              setEditDetail((d) => ({...d, major: value}))
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='时间段'>
          <Flex css={{mt: 10}}>
            <TextField
              css={{bg: '$w', w: 132, mr: 10}}
              value={editDetail.startAt}
              onChange={(e) => {
                const {value} = e.target
                setEditDetail((d) => ({...d, startAt: value}))
              }}
              size='small'
              placeholder='请填写'
            />
            至
            <TextField
              css={{bg: '$w', w: 132, ml: 10}}
              value={editDetail.endAt}
              onChange={(e) => {
                const {value} = e.target
                setEditDetail((d) => ({...d, endAt: value}))
              }}
              size='small'
              placeholder='请填写'
            />
          </Flex>
        </InputFormItem>
      </FormWrap>
      <InputFormItem css={{mt: 30}} label='在校经历'>
        <TextField
          type='textarea'
          value={editDetail.detail}
          onChange={(e) => {
            const {value} = e.target
            setEditDetail((d) => ({...d, detail: value}))
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
            setEditIndex(-1)
            setEditDetail(empty)
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
            updateEduExprienceMutation({
              variables: {
                info: {
                  ...editDetail,
                  exp_at_school: editDetail.detail,
                },
              },
              onCompleted: () => {
                setEdit(false)
                setEditIndex(-1)
                setEditDetail(empty)
              },
            })
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
  )

  const jyDom = (edu: any) => (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32}}>
      <Flex css={{fw: 600}}>{edu.schoolName}</Flex>
      <Flex css={{fw: 600, mt: 10}}>
        {edu.major} ｜{edu.education}
      </Flex>
      <NormalText css={{ml: 0, mt: 20}}>在校经历：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>{edu.detail}</NormalText>
    </Flex>
  )

  return (
    <LeftMenuTitle
      title='教育经历'
      edit={edit}
      onEdit={() => {
        setEdit(true)
        setEditIndex(-1)
        setEditDetail(empty)
      }}
    >
      {edit ? (
        jyEditDom
      ) : (
        <>
          {eduExp.map((ed, idx) => (
            <EditCardItem
              css={{mt: 30}}
              key={ed.id}
              onEdit={() => {
                setEdit(true)
                setEditIndex(idx)
                setEditDetail(ed)
              }}
            >
              {jyDom(ed)}
            </EditCardItem>
          ))}{' '}
        </>
      )}
    </LeftMenuTitle>
  )
}

export default EducationExperience
