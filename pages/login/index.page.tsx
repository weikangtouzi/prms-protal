import type {ReactElement} from 'react'
import {useEffect, useState, useRef} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/layouts/main'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'
import UploadZZ from './components/uploader'
import {Select} from '@/components/select'
import {
  BackText,
  BackTitle,
  BWrap, ForgetTip,
  FormWrap,
  Ht,
  IdentityCard,
  IdentityWrap,
  InputLabel,
  InputWrp,
  LeftPart,
  LittleTitle,
  LoginCard,
  LWrap,
  Main,
  NextButtonWrp,
  NextStepText,
  QzyxText,
  RedStr,
  RightPart,
  Tab,
  TabWrap,
  YZWrap,
  ZcCard,
  ZcLeft,
  ZcRight,
  ZcText
} from './components/styled'
import InputFormItem from './components/input-form'
import {useInterval} from 'ahooks'
import validator from '@/utils/validator'
import HTAuthManager from '@/common/auth/common/model/HTAuthManager'
import { reloadEnterpriseLocation } from '@/utils/utils'
import JobExpectationItemEdit from '@/pages/resume/components/job-expectations-edit'

const identityCards = [
  {
    url: '/qz-black.png',
    activeUrl: '/qz.png',
    text: '求职',
    identity: 'PersonalUser',
    role: 'PersonalUser',
  },
  {
    url: '/qz-black.png',
    activeUrl: '/qz.png',
    text: '招聘',
    identity: 'EnterpriseUser',
    role: 'Admin',
  },
]

export default function Login() {
	const router = useRouter()
  const [phone, setPhone] = useState('');

  const isPhone = validator.phone(phone)
  // 密码登录
  const [yzm, setYZM] = useState('')
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [accountErr, setAccountErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')

  // 验证码登录
  const [isYzm, setIsYzm] = useState(false)
  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')
  const [username, setUserName] = useState('')
  const isUsername = validator.username(username);
  const [email, setEmail] = useState('')
  const [nextDisabled, setNextDisabled] = useState(true)
  // -1 注册 验证手机号码
  // 0 注册 填个人信息
  // 1 注册 选择身份
  // 2 注册 填写求职意向
  // 3 注册 填写企业认证
  // 4 注册 填写企业认证补充
  // 5 注册 填写认证审核中
  const [step, setStep] = useState(0)
  const [tempToken, setTempToken] = useState('')
  const [identityNum, setIdentityNum] = useState(0)

  const [jobPosition, setJobPosition] = useState('')
  const [charterUrl, setCharterUrl] = useState('')
  const editRef = useRef()

  const [companyName, setCompanyName] = useState('')
  const [companyProfile, setCompanyProfile] = useState('')

  const checkAll = () => {
    if (pwd && pwd2) {
      setNextDisabled(false)
    }
  }

  const [countdown, setCountdown] = useState<number>(0);

  useInterval(() => {
    if(countdown > 0){
      setCountdown(pre => pre - 1);
    }
  },1000);

  let stepNode = null

  let stepAction = null


  const loginDidTouch = () => {
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

    localStorage.clear()
    if(isYzm) {

    } else {
    	HTAPI.UserLogIn({
    		info: {
    			account, 
    			password
    		}
    	}).then(response => {
    		setTempToken(response.token)
				setStep(1)
    	})
    }
	}

	const switchIdentityDidTouch = () => {
		const selectedIdentity = identityCards[identityNum]
		const chooseAdminAndHrRole = () => {
			return new Promise((resolve, reject) => {
				HTAPI.UserChooseOrSwitchIdentity({
		  		targetIdentity: 'EnterpriseUser',
					role: 'Admin'
		  	}, { showError: false }, { Authorization: tempToken }).then(response => {
		  		resolve({ token: response, role: 'Admin' })
		  	}).catch(() => {
		  		HTAPI.UserChooseOrSwitchIdentity({
		    		targetIdentity: 'EnterpriseUser',
						role: 'HR'
		    	}, { showError: false }, { Authorization: tempToken }).then(response => {
		    		resolve({ token: response, role: 'HR' })
		  		}).catch(e => {
		  			reject(e)
		  		})
		  	})
			})
		}
		switch(selectedIdentity.identity) {
			case 'PersonalUser': {
				HTAPI.UserChooseOrSwitchIdentity({
		  		targetIdentity: 'PersonalUser',
					role: 'PersonalUser'
		  	}, {}, { Authorization: tempToken }).then(response => {
  				HTAPI.CandidateGetAllJobExpectations({}, {}, { Authorization: response }).then((expectationList) => {
						if ((expectationList?.length ?? 0) <= 0) {
							setTempToken(response)
							setStep(2)
							return
						}
						HTAuthManager.updateKeyValueList({ userToken: response })
						router.push('/')
					})

					chooseAdminAndHrRole().then(response => {
  					HTAuthManager.updateKeyValueList({ enterpriseToken: response.token, enterpriseRole: response.role })
  				})
		  	})
				break
			}
			case 'EnterpriseUser': {
				chooseAdminAndHrRole().then(response => {
					HTAuthManager.updateKeyValueList({ enterpriseToken: response?.token, enterpriseRole: response?.role })

  				HTAPI.UserChooseOrSwitchIdentity({
		    		targetIdentity: 'PersonalUser',
						role: 'PersonalUser'
		    	}, { showError: false }, { Authorization: tempToken }).then(response => {
		    		HTAPI.CandidateGetAllJobExpectations({}, {}, { Authorization: response }).then((expectationList) => {
							if ((expectationList?.length ?? 0) <= 0) {
								return
							}
							HTAuthManager.updateKeyValueList({ userToken: response })
						})
		    	})

		    	reloadEnterpriseLocation()

				}).catch(e => {
					HTAPI.ENTCheckEnterpriseIdentification({}, {}, { Authorization: tempToken }).then(response => {
		    		if (response.status == 'Waiting') {
		    			setStep(5)
		    		} else if (response.status == 'Passed') {
		    			setStep(6)
		    		} else {
		    			setStep(3)
		    		}
		    	})
				})
				break
			}
		}
	}

	if (process.browser) {
		document.onkeydown = function(event) {
	    if(event.keyCode != 13) {
	    	return
	    }
	    stepAction && stepAction()
		}
	}

  if(step === -1) {
    stepNode = (
      <ZcCard css={{h: 367}}>
        <ZcLeft>
          <BackTitle css={{pt: 40, pl: 40}}>
            <Image src='/zh.png' alt='ht' width={32} height={32} />
            <BackText css={{ml: 20}}>验证手机号</BackText>
          </BackTitle>
          <FormWrap>
            <TextField
              value={phone}
              onChange={(e) => {
                const {value} = e.target
                setPhone(value)
              }}
              err={!isPhone && '请输入正确的手机号码'}
              icon={<Image src='/sj.png' alt='phone' width={20} height={24} />}
              placeholder='请输入手机号'
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
                text={countdown > 0 ? countdown: '获取验证码'}
                disabled={countdown > 0 || !isPhone}
                onClick={() => {
                	HTAPI.StaticSendSms({
							    	phoneNumber: phone
							    }, { showLoading: true }).then(response => {
							    	setCountdown(60)
							    })
                }}
              />
            </YZWrap>
          </FormWrap>
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            text='确定'
            disabled={!(!!yzm?.length && yzm.length === 6)}
            onClick={() => {
            	HTAPI.UserVerifyCodeConsume({
            		info: {
            			phoneNumber: phone,
	                verifyCode: yzm,
	                operation: 'UserRegister'
            		}
            	}).then(() => {
            		setStep(-2)
            	})
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }

  if (step == -2) {
  	stepNode = (
  		<ZcCard css={{h: 600}}>
	      <ZcLeft>
	        <BackTitle
	          onClick={() => {
	            setStep(-1)
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
	        {/*<AvatarUploader fileUrl={fileUrl} setFileUrl={setFileUrl} />*/}

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
	            err={!isUsername && '请输入长度在6到12之间的用户名'}
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
	            	HTAPI.UserRegister({
	            		info: {
	            			username,
		                password: pwd,
		                confirmPassword: pwd2,
		                email,
		                phoneNumber: phone
	            		}
	            	}).then((res) => {
	                HTAuthManager.updateKeyValueList({ userToken: res })
	                setStep(1)
	              })
	              // setStep(1)
	            }}
	          />
	        </div>
	      </ZcRight>
	    </ZcCard>
  	)
  }

  if (step == -10) {
  	stepNode = (
  		<ZcCard css={{h: 593}}>
		    <ZcLeft>
		      <BackTitle
		        onClick={() => {
		          setStep(0)
		        }}
		      >
		        <Image src='/ht.png' alt='ht' width={22.63} height={22.63} />
		        <BackText>返回</BackText>
		      </BackTitle>
		      <InputWrp css={{h: 64, mt: 39}}>
		        <InputLabel>
		          <RedStr>*</RedStr>手机号：
		        </InputLabel>
		        <TextField
		          css={{mt: 0, w: 420}}
		          inputCss={{ml: 0, w: '100%'}}
		          value={phone}
		          onChange={(e) => {
		            const {value} = e.target
		            setPhone(value)
		            checkAll()
		          }}
		          placeholder='请输入手机号'
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
		          value={pwd2}
		          onChange={(e) => {
		            const {value} = e.target
		            setPwd2(value)
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
		          value={yzm}
		          onChange={(e) => {
		            const {value} = e.target
		            setYZM(value)
		            checkAll()
		          }}
		          placeholder='请输入密码'
		        />
		        <Button
		          css={{w: 150, ml: 20, mt: 0}}
		          disabled={countdown > 0}
		          text={countdown > 0 ? countdown : '获取验证码'}
		          onClick={() => {
		          	HTAPI.StaticSendSms({
						    	phoneNumber: phone
						    }, { showLoading: true }).then(response => {
						    	setCountdown(60)
						    })
		          }}
		        />
		      </InputWrp>
		      <Button
		        css={{w: 420, ml: 158}}
		        text='确认'
		        onClick={() => {
		        	HTAPI.UserVerifyCodeConsume({
		        		info: {
		        			phoneNumber: phone,
		              verifyCode: yzm,
		              operation: 'UserResetPassword'
		        		}
		        	}).then(() => {
		        		HTAPI.UserResetPassword({
		          		info: {
		          			phoneNumber: phone,
				            password: pwd,
				            confirmPassword: pwd2,
		          		}
		          	}).then(response => {
		          		setStep(0)
		          	})
		        	})
		        }}
		      />
		    </ZcLeft>
		    <ZcRight>
		      <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
		      <ZcText>忘记密码</ZcText>
		    </ZcRight>
		  </ZcCard>
  	)
  }

  if (step == 0) {
  	stepAction = loginDidTouch
  	stepNode = (
  		<LoginCard>
	      <LeftPart>
	        <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
	        欢迎使用趁早找
	      </LeftPart>
	      <RightPart>
	        <BWrap>
	          <TabWrap>
	            {/*<Tab*/}
	            {/*  active={isYzm}*/}
	            {/*  onClick={() => {*/}
	            {/*    setIsYzm(true)*/}
	            {/*  }}*/}
	            {/*>*/}
	            {/*  验证码登录*/}
	            {/*</Tab>*/}
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
	                  disabled={countdown > 0}
	                  text={countdown > 0 ? countdown : '获取验证码'}
	                  onClick={() => {
	                  	HTAPI.StaticSendSms({
									    	phoneNumber: phone
									    }, { showLoading: true }).then(response => {
									    	setCountdown(60)
									    })
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
	                placeholder='请输入手机号'
	                err={accountErr}
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
	              text='登录'
	              disabled={false}
	              onClick={stepAction}
	            />
	          </YZWrap>
	          <YZWrap>
	            <Button
	              css={{
	                bg: '$w',
	                color: '$primary'
	              }}
	              text='注册'
	              disabled={false}
	              onClick={() => {
	                // todo
	                setStep(-1)
	              }}
	            />
	          </YZWrap>
	          <LWrap>
	            进入即代表您已同意
	            <Ht css={{ml: 14}}>
	              <Link href='/about/agreement'>《用户协议》</Link>
	            </Ht>
	            <Ht>
	              <Link href='/about/privacy'>《隐私政策》</Link>
	            </Ht>
	            <ForgetTip onClick={() => setStep(-10)}>忘记密码？</ForgetTip>
	          </LWrap>
	        </BWrap>
	      </RightPart>
	    </LoginCard>
  	)

  }

  if (step === 1) {
  	stepAction = switchIdentityDidTouch
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
            onClick={stepAction}
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
          <JobExpectationItemEdit ref={editRef} css={{ marginLeft: 20, marginTop: -30, bg: 'transparent' }} />
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            disabled={false}
            text='确定'
            onClick={() => {
            	editRef.current.onSubmit(tempToken, (response) => {
            		switchIdentityDidTouch()
            	})
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
          <QzyxText>企业认证补充</QzyxText>
          <QzyxText css={{fs: 16, color: '#616A67', fw: 400, mt: 40, mb: 10}}>营业执照：</QzyxText>
          <UploadZZ setFileUrl={setCharterUrl} />
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            text='确定'
            onClick={() => {
              setStep(4)
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

            {/*<InputFormItem css={{w: 480, mt: 30}} label='企业地区'>
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
            </InputFormItem>*/}
          </FormWrap>
        </ZcLeft>
        <ZcRight>
          <Image src='/logo.png' alt='Logo' width={94.62} height={30.62} />
          <Button
            text='确定'
            onClick={() => {
            	HTAPI.UserEnterpriseIdentify({
            		info: {
            			enterpriseName: jobPosition,
            			charter: charterUrl
            		}
            	}).then(response => {
            		setStep(5)
            	})
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
              // router.push('/')
              setStep(0)
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }

  if (step === 6) {
    stepNode = (
      <ZcCard css={{h: 593}}>
        <ZcLeft>
          <BackTitle css={{pt: 30, pl: 30}}>
            <Image className='use-image-round' src='/zh.png' alt='ht' width={34} height={34} />
            <BackText css={{ml: 20}}>欢迎注册趁早找！</BackText>
          </BackTitle>
          <QzyxText>企业认证信息补充</QzyxText>
          <FormWrap>
            <InputFormItem css={{w: 480, mt: 10}} label='企业名称'>
              <TextField
                value={companyName}
                onChange={(e) => {
                  const {value} = e.target
                  setCompanyName(value)
                }}
                size='small'
                css={{bg: '$w', w: 480, h: 42}}
                placeholder='请填写'
              />
            </InputFormItem>
            <InputFormItem css={{w: 480, mt: 10}} label='企业介绍'>
              <TextField
                value={companyProfile}
                onChange={(e) => {
                  const {value} = e.target
                  setCompanyProfile(value)
                }}
                size='small'
                css={{bg: '$w', w: 480, h: 42}}
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
            	HTAPI.ENTInsertEnterpriseBasicInfo({
            		info: {
            			enterpriseName: companyName,
									abbreviation: companyName,
									enterpriseLocation: [],
									enterprisecCoordinate: [0, 0],
									enterpriseIndustry: [],
									enterpriseProfile: companyProfile,
									enterpriseNature: 'Extra',
									enterpriseFinancing: 'NotYet',
									enterpriseSize: 'LessThanFifteen',
            		}
            	}).then(response => {
            		switchIdentityDidTouch()
            	})
            }}
          />
        </ZcRight>
      </ZcCard>
    )
  }

  return (
    <>
      <Main>
        { stepNode }
      </Main>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
