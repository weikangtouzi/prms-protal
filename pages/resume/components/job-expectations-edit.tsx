import {useState, useImperativeHandle, useEffect, forwardRef} from 'react'
import {Select} from '@/components/select'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'

import {EditWrap, ResuTitle, Flex, FormWrap, NormalText} from './styled'
import InputFormItem from '../../login/components/input-form'
import CitySelect from './city-select'
import LeftMenuTitle from './left-menu-title'
import EditCardItem from './edit-card-item'
import { stringForFullTime } from '@/utils/utils'

interface JProps {
  jobExp: any
}

function JobExpectationItemEdit({ jobExp, css }: JProps, ref) {

  const [jobIndustry, setJobIndustry] = useState<any>(jobExp?.industry_involved || '')
  const [jobIndustryList, setJobIndustryList] = useState<any[]>([])
  const [jobCategory, setJobCategory] = useState<any>(jobExp?.job_category || '')
  const [jobCategoryList, setJobCategoryList] = useState<any[]>([])
  const [fullTime, setFullTime] = useState<any>(jobExp?.full_time_job || '')
  const [city, setCity] = useState(jobExp?.aimed_city || '')
  const [minSalary, setMinSalary] = useState(jobExp?.min_salary_expectation || '')
  const [maxSalary, setMaxSalary] = useState(jobExp?.max_salary_expectation || '')

  useEffect(() => {
		Promise.all([
			HTAPI.request('/preludeDatas/industry_category.json', 'GET', {}, { needToken: false }),
			HTAPI.request('/preludeDatas/job_category.json', 'GET', {}, { needToken: false })
		]).then(([industryResponse, jobCategoryResponse]) => {
			setJobIndustryList(Object.keys(industryResponse).map((k) => ({
	      key: k,
	      value: k,
	      children: industryResponse[k].map((re: string) => ({key: re, value: re})),
	    })))
	    setJobCategoryList(Object.keys(jobCategoryResponse).map((k) => ({
	      key: k,
	      value: k,
	      children: Object.keys(jobCategoryResponse[k]).map((ck) => ({
	        key: ck,
	        value: ck,
	        children: jobCategoryResponse[k][ck].map((cl: string) => ({key: cl, value: cl})),
	      })),
	    })))
		})
  }, [])

  useImperativeHandle(
  	ref,
  	() => ({
  		onSubmit: (token, complete) => {
  			HTAPI.CandidateEditJobExpectations({
      		info: {
      			id: jobExp?.id,
      			job_category: jobCategory.map((ca: any) => ca),
            full_time_job: fullTime,
            max_salary_expectation: +maxSalary,
            min_salary_expectation: +minSalary,
            aimed_city: city[city.length - 1].value,
            industry_involved: jobIndustry.map((jo: any) => jo),
      		}
      	}, {}, token ? { Authorization: token } : {}).then(response => {
      		Toast.show('修改成功')
      		complete && complete(response)
      	})
  		}
  	})
  )

  return (
  	<EditWrap css={css}>
      <ResuTitle css={{fs: 18}}>编辑求职意向</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 430}} label='期望岗位'>
          <Select css={{w: 300, mt: 10}} value={{ value: jobCategory }} list={jobCategoryList} onSelect={(itemList) => setJobCategory(itemList.map(item => item.value))} />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='期望行业'>
          <Select css={{w: 300, mt: 10}} value={{ value: jobIndustry }} list={jobIndustryList} onSelect={(itemList) => setJobIndustry(itemList.map(item => item.value))} />
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='期望城市'>
          <CitySelect css={{w: 300, mt: 10}} value={city} onSelect={setCity} />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='期望薪资'>
          <Flex css={{mt: 10}}>
            <TextField
              value={minSalary}
              onChange={(e) => {
                const {value} = e.target
                setMinSalary(value)
              }}
              size='small'
              css={{w: 132, mr: 10, bg: '$w'}}
              placeholder='请填写'
            />
            至
            <TextField
              value={maxSalary}
              onChange={(e) => {
                const {value} = e.target
                setMaxSalary(value)
              }}
              size='small'
              css={{w: 132, ml: 10, bg: '$w'}}
              placeholder='请填写'
            />
          </Flex>
        </InputFormItem>
        <InputFormItem css={{mt: 30, w: 430}} label='工作性质'>
          <Select css={{w: 300, mt: 10}} value={{ value: stringForFullTime(fullTime) }} list={stringForFullTime(-1)} onSelect={(item) => setFullTime(item.key)} />
        </InputFormItem>
      </FormWrap>
    </EditWrap>
  )
}

export default forwardRef(JobExpectationItemEdit)

