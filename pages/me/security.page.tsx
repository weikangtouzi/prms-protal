import type {ReactElement} from 'react'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import InfoLayout from '@/layouts/info'
import {styled} from '@/stitches.config'
import {Button} from '@/components/button'
import {TextField} from '@/components/textfield'
import {CloseDialog, ConfirmDialog} from '@/components/dialogs'
import {useInterval} from 'ahooks'

const RightWrap = styled('div', {
  w: 884,
  h: 539,
  bg: '$w',
  mt: 16,
  ml: 16,
  mb: 135,
})

const DivWrap = styled('div', {
  ml: 0,
  display: 'flex',
  mt: 40,
  alignItems: 'center',
})

const LeftLabel = styled('div', {
  fs: 16,
  color: '#616A67',
  textAlign: 'end',
})

const MidContent = styled('div', {
  color: '#3C4441',
  fs: 16,
  fw: 600,
  ml: 10,
  display: 'flex',
  alignItems: 'center',
})

const RightBtn = styled('div', {
  fs: 16,
  color: '$primary',
  fw: 600,
  userSelect: 'none',
  ml: 50,
})

const DashLine = styled('div', {
  w: 684,
  h: 0,
  borderTop: '1px dashed rgba(0, 0, 0, 0.1)',
  ml: 100,
  mt: 40,
})

const InputLabel = styled('div', {
  w: 100,
  fs: 18,
  color: '#616A67',
  textAlign: 'end',
})

const RedStr = styled('span', {
  color: '#FF0000',
})

const InputWrp = styled('div', {
  ml: 59,
  h: 42,
  display: 'flex',
  alignItems: 'center',
})

const url = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'

const defaultBasicInfo = {
  phoneNumber: '',
  email: '',
}
export default function Security() {
  const [pwdOpen, setPwdOpen] = useState(false)
  const [zxOpen, setZxOpen] = useState(false)

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwdErr, setPwdErr] = useState('')

  const [basicInfo, setBasicInfo] = useState(defaultBasicInfo)

  const [newNameType, setNewNameType] = useState('')
  const [newName, setNewName] = useState('')
  const [newCode, setNewCode] = useState('')

  useEffect(() => {
    HTAPI.UserGetBasicInfo().then(({ email, phone_number }) => {
		  setBasicInfo({phoneNumber: phone_number, email: email || ''})
		})
  }, [newNameType])

  const [countdown, setCountdown] = useState<number>(0)
  useInterval(() => {
    if(countdown > 0){
      setCountdown(pre => pre - 1);
    }
  },1000)

  const sendCodeResponse = () => {
  	Toast.show('发送成功!')
    setCountdown(60)
  }

  const onSubmitResponse = () => {
  	Toast.show('修改成功!')
		setNewNameType('')
		setNewName('')
		setNewCode('')
  }

  const newNameTypeValue = [
  	{ value: 'phone', title: '手机号', sendCode: () => {
  		HTAPI.StaticSendSms({ phoneNumber: newName }).then(sendCodeResponse)
  	}, onSubmit: () => {
  		HTAPI.UserVerifyCodeConsume({
    		info: {
    			phoneNumber: newName,
    			verifyCode: newCode,
    			operation: 'UserChangePhoneNumber',
    		}
    	}).then(response => {
    		HTAPI.UserChangePhoneNumber({ newNum: newName }).then(onSubmitResponse)
    	})
  	} },
  	{ value: 'email', title: '邮箱', sendCode: () => {
  		HTAPI.StaticSendEmail({ email: newName }).then(sendCodeResponse)
  	}, onSubmit: () => {
  		HTAPI.UserEditEmail({ email: newName, code: newCode }).then(onSubmitResponse)
  	} },
  ].find(item => item.value == newNameType)

  return (
    <RightWrap>
      <DivWrap css={{ml: 100, mt: 100}}>
        <LeftLabel>手机号码：</LeftLabel>
        <MidContent>{basicInfo.phoneNumber}</MidContent>
        <RightBtn
          onClick={() => {
            setNewNameType('phone')
          }}
        >
          修改手机号码
        </RightBtn>
      </DivWrap>
      <DashLine />

      <DivWrap css={{ml: 142, mt: 35}}>
        <LeftLabel>邮箱：</LeftLabel>
        <>
          <MidContent>{basicInfo.email}</MidContent>
          <RightBtn
            onClick={() => {
              setNewNameType('email')
            }}
          >
            修改邮箱
          </RightBtn>
        </>
      </DivWrap>

      {/*<DivWrap css={{ml: 110}}>
        <LeftLabel>实名认证：</LeftLabel>
        <MidContent>**陈</MidContent>
        <MidContent css={{ml: 30}}>3*****************3</MidContent>
      </DivWrap>*/}

      <DivWrap css={{ml: 110}}>
        <LeftLabel>密码设置：</LeftLabel>
        <RightBtn
          onClick={() => {
          	global.TODO_TOAST()
            // setPwdOpen(true)
          }}
          css={{ml: 10}}
        >
          修改密码
        </RightBtn>
      </DivWrap>

      <CloseDialog
        title='修改密码'
        dialogCss={{h: 493}}
        onClose={() => {
          setPwdOpen(false)
        }}
        open={pwdOpen}
        onOpenChange={setPwdOpen}
      >
        <InputWrp css={{h: 64, mt: 40}}>
          <InputLabel>
            <RedStr>*</RedStr>原密码：
          </InputLabel>
          <TextField
            css={{mt: 0, w: 420}}
            inputCss={{ml: 0, w: '100%'}}
            type='password'
            value={password}
            onChange={(e) => {
              const {value} = e.target
              setPassword(value)
            }}
            placeholder='请输入密码'
          />
        </InputWrp>
        <InputWrp css={{h: 64, mt: 20}}>
          <InputLabel>
            <RedStr>*</RedStr>新密码：
          </InputLabel>
          <TextField
            css={{mt: 0, w: 420}}
            inputCss={{ml: 0, w: '100%'}}
            type='password'
            err={pwdErr}
            value={newPassword}
            onChange={(e) => {
              const {value} = e.target
              setNewPassword(value)
            }}
            placeholder='请输入密码'
          />
        </InputWrp>
        <InputWrp css={{h: 64, mt: 20}}>
          <InputLabel>
            <RedStr>*</RedStr>确认密码：
          </InputLabel>
          <TextField
            css={{mt: 0, w: 420}}
            inputCss={{ml: 0, w: '100%'}}
            type='password'
            value={confirmPassword}
            onChange={(e) => {
              const {value} = e.target
              setConfirmPassword(value)
            }}
            placeholder='请输入密码'
          />
        </InputWrp>
        <Button
          css={{w: 420, ml: 97}}
          text='确认'
          onClick={() => {
            if (password !== newPassword) {
              setPwdErr('两次密码输入不相同')
              return
            }
           //  HTAPI.UserResetPassword({
          	// 	info: {
          	// 		phoneNumber: phone,
		         //    password,
		         //    confirmPassword,
          	// 	}
          	// }).then(response => {
          		
          	// })
            // setPwdOpen(false)
          }}
        />
      </CloseDialog>

      <CloseDialog
        onClose={() => {
          setNewNameType('')
        }}
        title={`新${newNameTypeValue?.title}`}
        open={(newNameType?.length ?? 0) > 0}
        onOpenChange={() => setNewNameType('')}
      >
        <InputWrp css={{h: 64, mt: 40}}>
          <InputLabel>
            <RedStr>*</RedStr>{newNameTypeValue?.title}：
          </InputLabel>
          <TextField
            css={{mt: 0, w: 420}}
            inputCss={{ml: 0, w: '100%'}}
            value={newName}
            onChange={(e) => {
              const {value} = e.target
              setNewName(value)
            }}
            placeholder={`输入${newNameTypeValue?.title}`}
          />
        </InputWrp>
        <InputWrp css={{h: 64, mt: 20}}>
          <InputLabel>
            <RedStr>*</RedStr>验证码：
          </InputLabel>
          <TextField
            css={{mt: 0, w: 250}}
            inputCss={{ml: 0, w: '100%'}}
            value={newCode}
            onChange={(e) => {
              const {value} = e.target
              setNewCode(value)
            }}
            placeholder='请输入验证码'
          />
          <Button
            css={{w: 150, ml: 20, mt: 0}}
            text={countdown > 0 ? countdown: '获取验证码'}
            disabled={countdown > 0 || (newName?.length ?? 0) <= 0}
            onClick={() => {
              newNameTypeValue?.sendCode()
            }}
          />
        </InputWrp>
        <Button
          css={{w: 420, ml: 97}}
          text='确认'
          disabled={(newName?.length ?? 0) <= 0 || (newCode?.length ?? 0) <= 0}
          onClick={() => {
          	newNameTypeValue?.onSubmit()
          }}
        />
      </CloseDialog>
      {/*<ConfirmDialog*/}
      {/*  open={zxOpen}*/}
      {/*  onOpenChange={setZxOpen}*/}
      {/*  title='确认要解除与微信的绑定吗？'*/}
      {/*  bodyText='确认后，将不能使用微信登录趁早找'*/}
      {/*/>*/}
    </RightWrap>
  )
}

Security.getLayout = function getLayout(page: ReactElement) {
  return <InfoLayout>{page}</InfoLayout>
}
