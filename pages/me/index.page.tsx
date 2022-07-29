import type {ReactElement} from 'react'
import {useState, useEffect} from 'react'
import InfoLayout from '@/layouts/info'
import {styled} from '@/stitches.config'
import {AvatarUploader} from '@/components/avatar'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'

const RightWrap = styled('div', {
  w: 884,
  h: 578,
  bg: '$w',
  mt: 16,
  ml: 16,
  mb: 135,
  pt: 60,
  flexDirectionCenter: 'column',
  justifyContent: 'flex-start',
})

const InputWrp = styled('div', {
  ml: 0,
  h: 42,
  display: 'flex',
  alignItems: 'center',
})

const InputLabel = styled('div', {
  fs: 18,
  color: '#616A67',
  textAlign: 'end',
})

// const WarnLabel = styled('div', {
//   fs: 14,
//   color: '#616A67',
//   mt: 28,
//   mb: 40,
// })

export default function Me() {
  const [name, setName] = useState('')
  // const [zhiye, setZhiye] = useState('')

  const [fileUrl, setFileUrl] = useState('')

  const onRefresh = () => {
  	HTAPI.UserGetBasicInfo().then(({username, image_url}) => {
		  setFileUrl(image_url)
    	setName(username)
		})
  }

  useEffect(() => {
    onRefresh()
  }, [])

  return (
    <RightWrap>
      <AvatarUploader fileUrl={fileUrl} setFileUrl={setFileUrl} />
      <InputWrp css={{mt: 36}}>
        <InputLabel>昵称：</InputLabel>
        <TextField
          css={{w: 300}}
          size='small'
          placeholder='请输入常用昵称'
          value={name}
          onChange={(e) => {
            const {value} = e.target
            setName(value)
          }}
        />
      </InputWrp>
      {/* 
      <InputWrp css={{mt: 16}}>
        <InputLabel>职业：</InputLabel>
        <TextField
          css={{w: 300}}
          size='small'
          placeholder='请输入职业'
          value={zhiye}
          onChange={(e) => {
            const {value} = e.target
            setZhiye(value)
          }}
        />
      </InputWrp>
      <WarnLabel>*此信息用于站内学习社区功能，不会同步修改简历</WarnLabel> */}
      <Button
        text='提交'
        css={{w: 120, h: 46}}
        onClick={() => {
        	HTAPI.UserEditBasicInfo({
        		info: {
              username: name,
              logo: fileUrl,
            }
        	}).then(response => {
        		Toast.show('修改成功')
        		onRefresh()
        	})
        }}
      />
    </RightWrap>
  )
}

Me.getLayout = function getLayout(page: ReactElement) {
  return <InfoLayout>{page}</InfoLayout>
}
