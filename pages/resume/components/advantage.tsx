import {useState, useEffect} from 'react'
import {Button} from '@/components/button'
import {TextField} from '@/components/textfield'
import {EditWrap, NormalText, ResuTitle, Flex} from './styled'
import LeftMenuTitle from './left-menu-title'

function Advantage({ baseInfo, ...props }) {
  const [edit, setEdit] = useState(false)
  const [content, setContent] = useState('')

  const grEditDom = (
    <EditWrap css={{pr: 20}}>
      <ResuTitle css={{fs: 18}}>编辑个人优势</ResuTitle>
      <TextField
        type='textarea'
        value={content}
        onChange={(e) => {
          const {value} = e.target
          setContent(value)
        }}
        size='small'
        css={{bg: '$w', w: 804, h: 240, mt: 20}}
        placeholder='请输入'
      />
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
          	HTAPI.CandidateEditSkills({skills: [content]}).then(response => {
          		props.onRefresh()
          	})
          	HTAPI.CandidateEditPersonalAdvantage({ advantage: content }).then(response => {
				    	setEdit(false)
				    	props.onRefresh()
				    })
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 20}}
          text='完成'
        />
      </Flex>
    </EditWrap>
  )

  const grDom = <NormalText css={{mt: 30, lineHeight: '30px'}}>{baseInfo?.personal_advantage}</NormalText>

  return (
    <LeftMenuTitle
      title='个人优势'
      edit={edit}
      disabled={!props.editAble}
      onEdit={() => {
        setEdit(true)
      }}
    >
      {edit ? grEditDom : grDom}
    </LeftMenuTitle>
  )
}

export default Advantage
