import {useState} from 'react'
import {Button} from '@/components/button'
import {TextField} from '@/components/textfield'
import {EditWrap, NormalText, ResuTitle, Flex, FormWrap} from './styled'
import LeftMenuTitle from './left-menu-title'
import InputFormItem from '../../login/components/input-form'
import {useUpdateWorkExprienceMutation} from '@/generated'
import EditCardItem from './edit-card-item'

interface WProps {
  workExp?: any[]
}

const empty = {
  compName: '',
  posName: '',
  department: '',
  startAt: '',
  endAt: '',
  workDetail: '',
}

function WorkExperience({workExp = []}: WProps) {
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)
  const [editDetail, setEditDetail] = useState(empty)
  const [updateWorkExprienceMutation] = useUpdateWorkExprienceMutation()

  const gzEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>{editIndex < 0 ? '新增' : '编辑'}工作经历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 524}} label='公司名称'>
          <TextField
            value={editDetail.compName}
            onChange={(e) => {
              const {value} = e.target
              setEditDetail((d) => ({...d, compName: value}))
            }}
            size='small'
            css={{bg: '$w', w: 400, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='职位名称'>
          <TextField
            value={editDetail.posName}
            onChange={(e) => {
              const {value} = e.target
              setEditDetail((d) => ({...d, posName: value}))
            }}
            size='small'
            css={{bg: '$w', w: 206, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='在职时间'>
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
      <InputFormItem css={{mt: 30}} label='工作内容'>
        <TextField
          type='textarea'
          value={editDetail.workDetail}
          onChange={(e) => {
            const {value} = e.target
            setEditDetail((d) => ({...d, workDetail: value}))
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
            updateWorkExprienceMutation({
              variables: {
                work: {
                  ...editDetail,
                  hideFromThisCompany: false,
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

  const gzDom = (work: any) => (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32}}>
      <Flex css={{fw: 600}}>{work.compName}</Flex>
      <Flex css={{fw: 600, mt: 10}}>
        {work.startAt}-{work.endAt} ｜{work.posName}
      </Flex>
      <NormalText css={{ml: 0, mt: 20}}>工作内容：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>{work.workDetail}</NormalText>
    </Flex>
  )

  return (
    <LeftMenuTitle
      title='工作经历'
      edit={edit}
      onEdit={() => {
        setEdit(true)
        setEditIndex(-1)
        setEditDetail(empty)
      }}
    >
      {edit ? (
        gzEditDom
      ) : (
        <>
          {workExp.map((w, idx) => (
            <EditCardItem
              key={w.id}
              css={{mt: idx === 0 ? 30 : 10}}
              onEdit={() => {
                setEdit(true)
                setEditIndex(idx)
                setEditDetail(w)
              }}
            >
              {gzDom(w)}
            </EditCardItem>
          ))}
        </>
      )}
    </LeftMenuTitle>
  )
}

export default WorkExperience