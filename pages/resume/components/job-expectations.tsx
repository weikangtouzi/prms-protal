import {useState, useEffect} from 'react'
import {Select} from '@/components/select'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'

import {fetchIndustry, fetchJob} from '../api/josn'
import {EditWrap, ResuTitle, Flex, FormWrap, NormalText} from './styled'
import InputFormItem from '../../login/components/input-form'
import CitySelect from './city-select'
import LeftMenuTitle from './left-menu-title'
import EditCardItem from './edit-card-item'

import {useUpdateJobExpectationMutation} from '@/generated'

const fullTimeList = [
  {
    key: 'Full',
    value: '全职',
  },
  {
    key: 'Part',
    value: '兼职',
  },
  {
    key: 'InternShip',
    value: '实习',
  },
]

interface JProps {
  jobExp: any
}

function JobExpectations({jobExp}: JProps) {
  const [edit, setEdit] = useState(false)

  const [jobIndustry, setJobIndustry] = useState<any>(jobExp?.industry_involved || '')
  const [jobIndustryList, setJobIndustryList] = useState<any[]>([])
  const [jobCategory, setJobCategory] = useState<any>(jobExp?.job_category || '')
  const [jobCategoryList, setJobCategoryList] = useState<any[]>([])
  const [fullTime, setFullTime] = useState<any>(jobExp?.full_time_job || '')
  const [city, setCity] = useState(jobExp?.aimed_city || '')
  const [minSalary, setMinSalary] = useState(jobExp?.min_salary_expectation || '')
  const [maxSalary, setMaxSalary] = useState(jobExp?.max_salary_expectation || '')

  const [updateJobExpectation] = useUpdateJobExpectationMutation()

  useEffect(() => {
    fetchIndustry().then((res) => {
      const ji = Object.keys(res).map((k) => ({
        key: k,
        value: k,
        children: res[k].map((re: string) => ({key: re, value: re})),
      }))

      setJobIndustryList(ji)
    })
    fetchJob().then((r) => {
      const ca = Object.keys(r).map((k) => ({
        key: k,
        value: k,
        children: Object.keys(r[k]).map((ck) => ({
          key: ck,
          value: ck,
          children: r[k][ck].map((cl: string) => ({key: cl, value: cl})),
        })),
      }))
      setJobCategoryList(ca)
    })
  }, [])

  const qzEditDom = (
    <EditWrap>
      <ResuTitle css={{fs: 18}}>编辑求职意向</ResuTitle>
      <FormWrap>
        <InputFormItem css={{mt: 30, w: 430}} label='期望岗位'>
          <Select css={{w: 300, mt: 10}} value={jobCategory} list={jobCategoryList} onSelect={setJobCategory} />
        </InputFormItem>
        <InputFormItem css={{mt: 30}} label='期望行业'>
          <Select css={{w: 300, mt: 10}} value={jobIndustry} list={jobIndustryList} onSelect={setJobIndustry} />
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
          <Select css={{w: 300, mt: 10}} value={fullTime} list={fullTimeList} onSelect={setFullTime} />
        </InputFormItem>
        <Flex>
          <Button
            onClick={() => {
              //   setEditQz(false)
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
              console.log(jobIndustry, jobCategory, minSalary, maxSalary, city, fullTime)

              updateJobExpectation({
                variables: {
                  jobInfo: {
                    job_category: jobCategory.map((ca: any) => ca.key),
                    full_time_job: fullTime.key,
                    max_salary_expectation: +maxSalary,
                    min_salary_expectation: +minSalary,
                    aimed_city: city[city.length - 1].value,
                    industry_involved: jobIndustry.map((jo: any) => jo.key),
                  },
                },
              })
              //   setEditQz(false)
            }}
            css={{w: 80, h: 42, ml: 20, fs: 16, mt: 56}}
            text='完成'
          />
        </Flex>
      </FormWrap>
    </EditWrap>
  )
  const emptyDom = (
    <EditCardItem
      onEdit={() => {
        setEdit(true)
      }}
      css={{mt: 30}}
    >
      <NormalText>期望岗位｜期望行业｜期望城市｜期望薪资｜工作性质</NormalText>
    </EditCardItem>
  )

  const jobExpDom = (
    <>
      {jobExp ? (
        <EditCardItem
          onEdit={() => {
            setEdit(true)
          }}
          css={{mt: 30}}
        >
          <NormalText>
            {jobExp.job_category}｜{jobExp.industry_involved}｜{jobExp.aimed_city}｜{jobExp.min_salary_expectation}-
            {jobExp.max_salary_expectation}｜{jobExp.full_time_job}
          </NormalText>
        </EditCardItem>
      ) : null}
      {jobExp || edit ? null : emptyDom}
    </>
  )
  return (
    <>
      <LeftMenuTitle title='求职意向' edit={edit} disabled>
        {edit ? qzEditDom : jobExpDom}
      </LeftMenuTitle>
    </>
  )
}

export default JobExpectations
