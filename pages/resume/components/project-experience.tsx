import {useState, useEffect} from 'react'
import {Button} from '@/components/button'
import {TextField} from '@/components/textfield'
import {EditWrap, NormalText, ResuTitle, Flex, FormWrap} from './styled'
import LeftMenuTitle from './left-menu-title'
import InputFormItem from '../../login/components/input-form'
import EditCardItem from './edit-card-item'
import moment from 'moment'

interface PProps {
  projExp?: any[]
}

const empty = {
  projectName: '',
  role: '',
  startAt: '',
  endAt: '',
  description: '',
  performance: '',
}

function ProjectExperience({projExp = [], ...props}: PProps) {
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)
  const [editDetail, setEditDetail] = useState(empty)

  const xmEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>{editIndex < 0 ? '新增' : '编辑'}项目经历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 524}} label='项目名称'>
          <TextField
            value={editDetail.projectName}
            onChange={(e) => {
              const {value} = e.target
              setEditDetail((d) => ({...d, projectName: value}))
            }}
            size='small'
            css={{bg: '$w', w: 400, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='担任名称'>
          <TextField
            value={editDetail.role}
            onChange={(e) => {
              const {value} = e.target
              setEditDetail((d) => ({...d, role: value}))
            }}
            size='small'
            css={{bg: '$w', w: 206, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='项目时间'>
          <Flex css={{mt: 10}}>
            <TextField
              css={{bg: '$w', w: 177, mr: 15}}
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
              css={{bg: '$w', w: 177, ml: 15}}
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
      <InputFormItem css={{mt: 30}} label='项目描述'>
        <TextField
          type='textarea'
          value={editDetail.description}
          onChange={(e) => {
            const {value} = e.target
            setEditDetail((d) => ({...d, description: value}))
          }}
          size='small'
          css={{bg: '$w', w: 804, h: 240, mt: 10}}
          placeholder='请输入'
        />
      </InputFormItem>

      <InputFormItem css={{mt: 30}} label='项目业绩'>
        <TextField
          type='textarea'
          value={editDetail.performance}
          onChange={(e) => {
            const {value} = e.target
            setEditDetail((d) => ({...d, performance: value}))
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
          	HTAPI.CandidateEditProExp({
          		info: editDetail
          	}).then(response => {
          		setEdit(false)
              setEditIndex(-1)
              setEditDetail(empty)
              props.onRefresh()
          	})
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
  )

  const xmDom = (proj: any) => (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32}}>
      <Flex css={{fw: 600, fs: 18}}>{proj.project_name}</Flex>
      <Flex css={{fw: 600, mt: 10}}>
        {moment(proj.start_at).format('YYYY-MM-DD')}-{moment(proj.end_at).format('YYYY-MM-DD')} ｜{proj.role}
      </Flex>
      <NormalText css={{ml: 0, mt: 20}}>项目描述：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>{proj.project_description}</NormalText>
      <NormalText css={{ml: 0, mt: 30}}>项目业绩：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>{proj.project_performance}</NormalText>
    </Flex>
  )

  return (
    <LeftMenuTitle
      title='项目经历'
      edit={edit}
      disabled={!props.editAble}
      onEdit={() => {
        setEdit(true)
        setEditIndex(-1)
        setEditDetail(empty)
      }}
    >
      {edit ? (
        xmEditDom
      ) : (
        <>
          {projExp.map((p, idx) => (
            <EditCardItem
              css={{mt: 30}}
              key={p.id}
              disabled={!props.editAble}
              onEdit={() => {
                setEdit(true)
                setEditIndex(idx)
                setEditDetail({
                	id: p.id,
                	projectName: p.project_name,
								  role: p.role,
								  startAt: p.start_at,
								  endAt: p.end_at,
								  description: p.project_description,
								  performance: p.project_performance,
                })
              }}
            >
              {xmDom(p)}
            </EditCardItem>
          ))}
        </>
      )}
    </LeftMenuTitle>
  )
}

export default ProjectExperience
