import Image from 'next/image'
import {useState, useEffect} from 'react'
import {EditWrap, ResuTitle, RightBtn, Flex, UploadText, FormWrap, RadioItem, FormItemLabel} from './styled'
import {Button} from '@/components/button'
import {Select} from '@/components/select'
import {TextField} from '@/components/textfield'
import InputFormItem from '../../login/components/input-form'
import CitySelect from './city-select'
import { reformDistanceYears, reformEducationLevel } from '@/utils/utils'

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'

const defaultBasicInfo = {
  username: '',
  image_url: imgUrl,
  gender: true,
  birth_date: '',
  current_city: '',
  first_time_working: '',
  education: 'Doctor',
  phone_number: '',
  email: '',
}

function BasicInfo({ editAble }) {
  const [editInfo, setEditInfo] = useState(false)
  const [city, setCity] = useState('')
  const [education, setEducation] = useState<any>('')
  const [basicInfo, setBasicInfo] = useState<any>(defaultBasicInfo)
  const [newBasicInfo, setNewBasicInfo] = useState<any>(defaultBasicInfo)

  useEffect(() => {
  	HTAPI.UserGetBasicInfo().then((userBasicInfoData) => {
  		setBasicInfo(userBasicInfoData)
	    setNewBasicInfo(userBasicInfoData)
	    setEducation({ value: reformEducationLevel(userBasicInfoData.education) })
		})
  }, [])

  const meInfoDom = (
    <EditWrap css={{pl: 20}}>
      <ResuTitle css={{fs: 18}}>我的简历</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 430}} label='昵称：'>
          <TextField
            value={newBasicInfo?.username}
            onChange={(e) => {
              const {value} = e.target
              setNewBasicInfo((n: any) => ({...n, username: value}))
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='性别：'>
          <Flex css={{mt: 10}}>
            <RadioItem
              onClick={() => {
                setNewBasicInfo((n: any) => ({...n, gender: true}))
              }}
              active={newBasicInfo?.gender}
            >
              男
            </RadioItem>
            <RadioItem
              onClick={() => {
                setNewBasicInfo((n: any) => ({...n, gender: false}))
              }}
              active={!newBasicInfo?.gender}
              css={{ml: 26}}
            >
              女
            </RadioItem>
          </Flex>
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='出生日期：'>
          <TextField
            value={newBasicInfo?.birth_date}
            onChange={(e) => {
              const {value} = e.target
              setNewBasicInfo((n: any) => ({...n, birth_date: value}))
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='所在城市：'>
          <CitySelect css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='手机号码：'>
          <Flex css={{mt: 10, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Flex css={{w: 300, h: 42, bg: 'rgba(0, 0, 0, 0.05)', pl: 20, color: '#616A67', borderRadius: 2}}>
              {newBasicInfo?.phone_number}
            </Flex>
            <FormItemLabel css={{fs: 14, ff: '$fr', mt: 10}}>
              手机号码为登录账号，如需修改可在个人信息-账号安全 中修改
            </FormItemLabel>
          </Flex>
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='您的学历：'>
          <Select css={{w: 300, mt: 10}} value={education} list={reformEducationLevel(-1)} onSelect={setEducation} />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='首次参加工作时间：'>
          <TextField
            value={newBasicInfo?.first_time_working}
            onChange={(e) => {
              const {value} = e.target
              setNewBasicInfo((n: any) => ({...n, first_time_working: value}))
            }}
            size='small'
            css={{bg: '$w', w: 300, h: 42, mt: 10}}
            placeholder='请填写'
          />
        </InputFormItem>
        <Flex>
          <Button
            onClick={() => {
              setNewBasicInfo(basicInfo)
              setEducation({ value: reformEducationLevel(basicInfo.education) })
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
            	HTAPI.UserEditBasicInfo({ info: {
                username: newBasicInfo.username,
                gender: newBasicInfo.gender,
                birthday: newBasicInfo.birth_date,
                education: education.key,
                currentCity: newBasicInfo.current_city,
                firstTimeWorking: newBasicInfo.first_time_working,
              } }).then(response => {
              	Toast.show('修改成功')
					    	setEditInfo(false)
                setBasicInfo({...newBasicInfo, education})
					    })
            }}
            css={{w: 80, h: 42, ml: 20, fs: 16, mt: 56}}
            text='完成'
          />
        </Flex>
      </FormWrap>
    </EditWrap>
  )

  return (
    <>
      {editInfo ? (
        meInfoDom
      ) : (
        <Flex className={'item-scroll-bind'} css={{justifyContent: 'space-between', alignItems: 'flex-start', mt: 39, p: '0 20px'}}>
          <Flex css={{alignItems: 'flex-start'}}>
            <img alt='header' className='use-image-round' src={basicInfo?.image_url} width={64} height={64} />
            <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 20}}>
              <UploadText css={{fs: 24, mt: 0, fw: 600, color: '#3C4441'}}>{basicInfo?.username}</UploadText>
              <UploadText css={{mt: 9, ff: '$fr', color: '#3C4441'}}>
                {reformDistanceYears(basicInfo?.first_time_working)}年｜{education?.value}｜{reformDistanceYears(basicInfo?.birth_date)}岁
              </UploadText>
              <UploadText css={{mt: 9, ff: '$fr', color: '#3C4441'}}>
                {basicInfo.first_time_working}｜{basicInfo?.phone_number ?? basicInfo.email}
              </UploadText>
            </Flex>
          </Flex>

          {
          	editAble && (
          		<RightBtn
		            onClick={() => {
		              setEditInfo(true)
		            }}
		            css={{fs: 16}}
		          >
		            编辑
		          </RightBtn>
          	)
          }

        </Flex>
      )}
    </>
  )
}

export default BasicInfo
