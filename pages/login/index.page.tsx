import type {ReactElement} from 'react'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/layouts/main'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'
import {AvatarUploader} from '@/components/avatar'
import UploadZZ from './components/uploader'
import {Select} from '@/components/select'
import {useSignUpMutation, useLogInLazyQuery} from '../../generated'
import {
  Main,
  LoginCard,
  LeftPart,
  RightPart,
  Tab,
  TabWrap,
  Triangle,
  TipRectangle,
  FirstLine,
  Ht,
  BWrap,
  YZWrap,
  LWrap,
  SmTitle,
  SmGreen,
  ZcIcon,
  ZcCard,
  ZcLeft,
  ZcRight,
  BackTitle,
  BackText,
  LittleTitle,
  InputLabel,
  RedStr,
  InputWrp,
  ZcText,
  NextStepText,
  IdentityWrap,
  NextButtonWrp,
  IdentityCard,
  QzyxText,
  FormWrap,
} from './components/styled'
import InputFormItem from './components/input-form'

const identityCards = [
  {
    url: '/qz-black.png',
    activeUrl: '',
    text: '求职',
  },
  {
    url: '/',
    activeUrl: '/qz.png',
    text: '招聘',
  },
  {
    url: '/cy-black.png',
    activeUrl: '',
    text: 'balalala',
  },
  {
    url: '/cy-black.png',
    activeUrl: '/cy.png',
    text: '创业',
  },
  {
    url: '/tz-black.png',
    activeUrl: '/tz.png',
    text: '投资',
  },
  {
    url: '/gw-black.png',
    activeUrl: '/gw.png',
    text: '顾问',
  },
]

export default function Login() {
  const [phone, setPhone] = useState('')
  // 密码登录
  const [yzm, setYZM] = useState('')
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [accountErr, setAccountErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  // 验证码登录
  const [isYzm, setIsYzm] = useState(false)
  // 扫码
  const [isSm, setIsSm] = useState(false)
  // 注册
  const [isZc, setIsZc] = useState(false)
  // 忘记密码
  const [isForget] = useState(false)
  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [nextDisabled, setNextDisabled] = useState(true)
  // 0 注册 填个人信息
  // 1 注册 选择身份
  // 2 注册 填写求职意向
  // 3 注册 填写企业认证
  // 4 注册 填写企业认证补充
  // 5 注册 填写认证审核中
  const [step, setStep] = useState(0)
  const [identityNum, setIdentityNum] = useState(1)

  const [jobPosition, setJobPosition] = useState('')

  const checkAll = () => {
    if (pwd && pwd2) {
      setNextDisabled(false)
    }
  }

  const router = useRouter()

  const [onLogin, {loading: loginLoading, data: loginData, error: loginError}] = useLogInLazyQuery()

  useEffect(() => {
    if (!loginData) {
      return
    }
    const {
      UserLogIn: {token},
    } = loginData

    localStorage.setItem('chenZaoZhaoKey', token)
    router.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData])

  const [signUpMutation] = useSignUpMutation({
    variables: {
      username,
      email,
      password: pwd,
      phoneNumber: pwd2,
    },
  })

  let stepNode = (
    <ZcCard>
      <ZcLeft>
        <BackTitle
          onClick={() => {
            setIsZc(false)
          }}
        >
          <Image src='/ht.png' alt='ht' width={22.63} height={22.63} />
          <BackText>返回</BackText>
        </BackTitle>
        <LittleTitle>设置密码</LittleTitle>
        <InputWrp>
          <InputLabel>
            <RedStr>*</RedStr>设置密码：
          </InputLabel>
          <TextField
            size='small'
            type='password'
            value={pwd}
            onChange={(e) => {
              const {value} = e.target
              setPwd(value)
              checkAll()
            }}
            placeholder='请输入密码'
          />
        </InputWrp>

        <InputWrp css={{mt: 30, mb: 60}}>
          <InputLabel>
            <RedStr>*</RedStr>确认密码：
          </InputLabel>
          <TextField
            size='small'
            type='password'
            value={pwd2}
            onChange={(e) => {
              const {value} = e.target
              setPwd2(value)
              checkAll()
            }}
            placeholder='请第二次输入密码'
          />
        </InputWrp>

        <LittleTitle>基础信息</LittleTitle>
        <AvatarUploader />

        <InputWrp css={{mt: 36}}>
          <InputLabel>昵称：</InputLabel>
          <TextField
            size='small'
            value={username}
            onChange={(e) => {
              const {value} = e.target
              setUserName(value)
            }}
            placeholder='请输入常用名称'
          />
        </InputWrp>
        <InputWrp css={{mt: 30}}>
          <InputLabel>绑定邮箱：</InputLabel>
          <TextField
            size='small'
            value={email}
            onChange={(e) => {
              const {value} = e.target
              setEmail(value)
            }}
            placeholder='请输入邮箱'
          />
        </InputWrp>
      </ZcLeft>
      <ZcRight>
        <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
        <div>
          <ZcText>注册账号</ZcText>
          <Button
            css={{mt: 60}}
            disabled={nextDisabled}
            text={
              <NextButtonWrp>
                <NextStepText>下一步</NextStepText>
                <Image src='/xyb.png' alt='Logo' width={30} height={20} />
              </NextButtonWrp>
            }
            onClick={() => {
              console.log('next step')
              signUpMutation({
                variables: {
                  username,
                  password: pwd,
                  email,
                  phoneNumber: '1223333333',
                },
              })
              console.log('next step...finished')
              // setStep(1)
            }}
          />
        </div>
      </ZcRight>
    </ZcCard>
  )

  if (step === 1) {
    stepNode = (
      <ZcCard css={{h: 593}}>
        <ZcLeft>
          <BackTitle css={{pt: 40, pl: 40}}>
            <Image src='/zh.png' alt='ht' width={32} height={32} />
            <BackText css={{ml: 20}}>选择身份</BackText>
          </BackTitle>
          <IdentityWrap>
            {identityCards.map((i, index) => (
              <IdentityCard
                onClick={() => {
                  setIdentityNum(index)
                }}
                active={identityNum === index}
                css={index === 2 ? {opacity: 0} : {}}
                key={i.text}
              >
                <Image src={identityNum === index ? i.activeUrl : i.url} alt='Logo' width={32} height={32} />
                <NextStepText css={{ml: 10}}> {i.text}</NextStepText>
              </IdentityCard>
            ))}
          </IdentityWrap>
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            text='确定'
            onClick={() => {
              // to 2/3
              setStep(2)
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }
  if (step === 2) {
    stepNode = (
      <ZcCard css={{h: 593}}>
        <ZcLeft>
          <BackTitle css={{pt: 30, pl: 30}}>
            <Image className='use-image-round' src='/zh.png' alt='ht' width={34} height={34} />
            <BackText css={{ml: 20}}>欢迎注册趁早找！</BackText>
          </BackTitle>
          <QzyxText>求职意向</QzyxText>
          <FormWrap>
            <InputFormItem css={{w: 260}} label='期望岗位'>
              <Select css={{w: 220, mt: 10}} value={jobPosition} onSelect={setJobPosition} />
            </InputFormItem>

            <InputFormItem css={{w: 220}} label='期望行业'>
              <Select css={{w: 220, mt: 10}} value={jobPosition} onSelect={setJobPosition} />
            </InputFormItem>

            <InputFormItem css={{mt: 30, w: 260}} label='期望城市'>
              <Select css={{w: 220, mt: 10}} value={jobPosition} onSelect={setJobPosition} />
            </InputFormItem>

            <InputFormItem css={{mt: 30, w: 220}} label='工作性质'>
              <Select css={{w: 220, mt: 10}} value={jobPosition} onSelect={setJobPosition} />
            </InputFormItem>

            <InputFormItem css={{mt: 30, w: 480}} label='期望薪资'>
              <YZWrap css={{alignItems: 'center', mt: 10}}>
                <Select css={{w: 220, mr: 12}} value={jobPosition} onSelect={setJobPosition} />
                至
                <Select css={{w: 220, ml: 12}} value={jobPosition} onSelect={setJobPosition} />
              </YZWrap>
            </InputFormItem>
          </FormWrap>
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            disabled={true}
            text='确定'
            onClick={() => {
              // to 2/3
              setStep(4)
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }
  if (step === 3) {
    stepNode = (
      <ZcCard css={{h: 593}}>
        <ZcLeft>
          <BackTitle css={{pt: 30, pl: 30}}>
            <Image className='use-image-round' src='/zh.png' alt='ht' width={34} height={34} />
            <BackText css={{ml: 20}}>欢迎注册趁早找！</BackText>
          </BackTitle>
          <QzyxText>企业认证</QzyxText>
          <FormWrap>
            <InputFormItem css={{w: 480, mt: 10}} label='企业名称'>
              <TextField
                value={jobPosition}
                onChange={(e) => {
                  const {value} = e.target
                  setJobPosition(value)
                }}
                size='small'
                css={{bg: '$w', w: 480, h: 42}}
                placeholder='请填写'
              />
            </InputFormItem>

            <InputFormItem css={{w: 480, mt: 30}} label='企业地区'>
              <YZWrap css={{alignItems: 'center', mt: 10}}>
                <Select css={{w: 220}} placeholder='请选择省份' value={jobPosition} onSelect={setJobPosition} />
                <Select css={{w: 220, ml: 40}} placeholder='请选择城市' value={jobPosition} onSelect={setJobPosition} />
              </YZWrap>
            </InputFormItem>

            <InputFormItem css={{mt: 30, w: 260}} label='企业类型'>
              <Select css={{w: 220, mt: 10}} value={jobPosition} onSelect={setJobPosition} />
            </InputFormItem>

            <InputFormItem css={{mt: 30, w: 220}} label='您的职务'>
              <TextField
                value={jobPosition}
                onChange={(e) => {
                  const {value} = e.target
                  setJobPosition(value)
                }}
                size='small'
                css={{bg: '$w', w: 220, h: 42, mt: 10}}
                placeholder='请填写'
              />
            </InputFormItem>
          </FormWrap>
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            text='确定'
            onClick={() => {
              // to 2/3
              setStep(3)
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }
  if (step === 4) {
    stepNode = (
      <ZcCard css={{h: 593}}>
        <ZcLeft>
          <BackTitle css={{pt: 30, pl: 30}}>
            <Image className='use-image-round' src='/zh.png' alt='ht' width={34} height={34} />
            <BackText css={{ml: 20}}>欢迎注册趁早找！</BackText>
          </BackTitle>
          <QzyxText>企业认证补充</QzyxText>
          <QzyxText css={{fs: 16, color: '#616A67', fw: 400, mt: 40, mb: 10}}>营业执照：</QzyxText>
          <UploadZZ />
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            text='确定'
            onClick={() => {
              setStep(3)
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }
  if (step === 5) {
    stepNode = (
      <ZcCard css={{h: 593}}>
        <ZcLeft>
          <BackTitle css={{pt: 30, pl: 30}}>
            <Image className='use-image-round' src='/zh.png' alt='ht' width={34} height={34} />
            <BackText css={{ml: 20}}>欢迎注册趁早找！</BackText>
          </BackTitle>
          <YZWrap css={{flexDirectionCenter: 'column', mt: 134}}>
            <Image src='/qyshz.png' alt='Logo' width={64} height={64} />
            <ZcText css={{fs: 26, opacity: 1, mt: 20, mb: 10}}>认证审核中</ZcText>
            <ZcText css={{fs: 16, opacity: 1, color: '#3C4441', fw: 400}}>预计两个工作日内完成</ZcText>
          </YZWrap>
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            text='知道了'
            onClick={() => {
              // to 2/3
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }

  const forgetNode = (
    <ZcCard css={{h: 593}}>
      <ZcLeft>
        <BackTitle
          onClick={() => {
            setIsZc(false)
          }}
        >
          <Image src='/ht.png' alt='ht' width={22.63} height={22.63} />
          <BackText>返回</BackText>
        </BackTitle>
        <InputWrp css={{h: 64, mt: 39}}>
          <InputLabel>
            <RedStr>*</RedStr>账号：
          </InputLabel>
          <TextField
            css={{mt: 0, w: 420}}
            inputCss={{ml: 0, w: '100%'}}
            value={pwd}
            onChange={(e) => {
              const {value} = e.target
              setPwd(value)
              checkAll()
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
            value={pwd}
            onChange={(e) => {
              const {value} = e.target
              setPwd(value)
              checkAll()
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
            value={pwd}
            onChange={(e) => {
              const {value} = e.target
              setPwd(value)
              checkAll()
            }}
            placeholder='请输入密码'
          />
        </InputWrp>
        <InputWrp css={{h: 64, mt: 20}}>
          <InputLabel>
            <RedStr>*</RedStr>验证码：
          </InputLabel>
          <TextField
            css={{mt: 0, w: 250}}
            inputCss={{ml: 0, w: '100%'}}
            value={pwd}
            onChange={(e) => {
              const {value} = e.target
              setPwd(value)
              checkAll()
            }}
            placeholder='请输入密码'
          />
          <Button
            css={{w: 150, ml: 20, mt: 0}}
            text='获取验证码'
            onClick={() => {
              console.log('dsldwe')
            }}
          />
        </InputWrp>
        <Button
          css={{w: 420, ml: 158}}
          text='确认'
          onClick={() => {
            console.log('dsldwe')
          }}
        />
      </ZcLeft>
      <ZcRight>
        <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
        <ZcText>忘记密码</ZcText>
      </ZcRight>
    </ZcCard>
  )

  return (
    <>
      <Main>
        {isZc ? (
          stepNode
        ) : isForget ? (
          forgetNode
        ) : (
          <LoginCard>
            <LeftPart>
              <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
              欢迎使用趁早找
            </LeftPart>
            <RightPart>
              <FirstLine>
                {isSm ? (
                  <Image
                    onClick={() => {
                      setIsSm(false)
                    }}
                    src='/dndl.png'
                    alt='Logo'
                    width={52}
                    height={52}
                  />
                ) : (
                  <>
                    <Image
                      onClick={() => {
                        setIsSm(true)
                      }}
                      src='/sm.png'
                      alt='Logo'
                      width={52}
                      height={52}
                    />
                    <TipRectangle>
                      <Triangle />
                      扫码登录更安全
                    </TipRectangle>
                  </>
                )}
              </FirstLine>
              {isSm ? (
                <BWrap css={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <SmTitle>
                    使用 <SmGreen>趁早找APP</SmGreen> 或 微信 扫码登录
                  </SmTitle>
                  <Image src='/sm.png' alt='Logo' width={250} height={250} />
                  <ZcIcon
                    onClick={() => {
                      setIsZc(true)
                    }}
                  >
                    立即注册
                  </ZcIcon>
                  <LWrap css={{mt: 43, justifyContent: 'center'}}>
                    进入即代表您已同意
                    <Ht css={{ml: 14}}>
                      <Link href='/'>《用户协议》</Link>
                    </Ht>
                    <Ht>
                      <Link href='/'>《隐私政策》</Link>
                    </Ht>
                  </LWrap>
                </BWrap>
              ) : (
                <BWrap>
                  <TabWrap>
                    <Tab
                      active={isYzm}
                      onClick={() => {
                        setIsYzm(true)
                      }}
                    >
                      验证码登录
                    </Tab>
                    <Tab
                      active={!isYzm}
                      onClick={() => {
                        setIsYzm(false)
                      }}
                    >
                      密码登录
                    </Tab>
                  </TabWrap>
                  {isYzm ? (
                    <>
                      <TextField
                        value={phone}
                        onChange={(e) => {
                          const {value} = e.target
                          setPhone(value)
                        }}
                        icon={<Image src='/sj.png' alt='phone' width={20} height={24} />}
                        placeholder='请输入手机号'
                        err='提示：输入的账号未注册，请下载趁早找ap'
                      />
                      <YZWrap>
                        <TextField
                          value={yzm}
                          onChange={(e) => {
                            const {value} = e.target
                            setYZM(value)
                          }}
                          icon={<Image src='/yzm.png' alt='phone' width={20} height={24} />}
                          placeholder='请输入验证码'
                        />
                        <Button
                          css={{w: 150, ml: 20}}
                          text='获取验证码'
                          onClick={() => {
                            console.log('dsldwe')
                          }}
                        />
                      </YZWrap>
                    </>
                  ) : (
                    <>
                      <TextField
                        value={account}
                        onChange={(e) => {
                          const {value} = e.target
                          setAccount(value)
                        }}
                        icon={<Image src='/zh.png' alt='zh' width={20} height={24} />}
                        placeholder='请输入账号'
                        err={accountErr || (loginError ? loginError.message : '')}
                      />
                      <TextField
                        type='password'
                        value={password}
                        onChange={(e) => {
                          const {value} = e.target
                          setPassword(value)
                        }}
                        icon={<Image src='/yzm.png' alt='mm' width={20} height={24} />}
                        placeholder='请输入密码'
                        err={passwordErr}
                      />
                    </>
                  )}
                  <YZWrap>
                    <Button
                      text='登录/注册'
                      disabled={loginLoading}
                      onClick={() => {
                        setAccountErr('')
                        setPasswordErr('')

                        if (!account) {
                          setAccountErr('请输入账号')
                          return
                        }
                        if (!password) {
                          setPasswordErr('请输入密码')
                          return
                        }
                        onLogin({variables: {account, password}})
                      }}
                    />
                  </YZWrap>
                  <LWrap>
                    进入即代表您已同意
                    <Ht css={{ml: 14}}>
                      <Link href='/'>《用户协议》</Link>
                    </Ht>
                    <Ht>
                      <Link href='/'>《隐私政策》</Link>
                    </Ht>
                  </LWrap>
                </BWrap>
              )}
            </RightPart>
          </LoginCard>
        )}
      </Main>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}