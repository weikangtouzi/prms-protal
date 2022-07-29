import {useState, useEffect, useRef} from 'react'
import {Select} from '@/components/select'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'

import {EditWrap, ResuTitle, Flex, FormWrap, NormalText} from './styled'
import InputFormItem from '../../login/components/input-form'
import CitySelect from './city-select'
import LeftMenuTitle from './left-menu-title'
import EditCardItem from './edit-card-item'
import { stringForFullTime } from '@/utils/utils'
import JobExpectationItemEdit from './job-expectations-edit'

interface JProps {
  jobExp: any
}

function JobExpectationItem({jobExp, ...props}: JProps) {
  const [edit, setEdit] = useState(false)

  const editRef = useRef()

  const qzEditDom = (
    <>
    	<JobExpectationItemEdit ref={editRef} jobExp={jobExp} {...props} />
      <Flex>
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
            mt: 56,
            ml: 120,
          }}
          text='取消'
        />
        <Button
          onClick={() => {
          	editRef.current.onSubmit(() => {
          		setEdit(false)
          		props.onRefresh()
          	})
          }}
          css={{w: 80, h: 42, ml: 20, fs: 16, mt: 56}}
          text='完成'
        />
      </Flex>
    </>
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
          disabled={!props.editAble}
        >
          <NormalText>
            {jobExp.job_category}｜{jobExp.industry_involved}｜{jobExp.aimed_city}｜{jobExp.min_salary_expectation}-
            {jobExp.max_salary_expectation}｜{stringForFullTime(jobExp.full_time_job)}
          </NormalText>
        </EditCardItem>
      ) : null}
    </>
  )
  return (
    <>
    	{edit ? qzEditDom : jobExpDom}
    </>
  )
}

function JobExpectations({ jobExpList, ...props }) {
	return (
		<LeftMenuTitle title='求职意向' disabled>
		{
			jobExpList?.map((item, index) => {
				return (
					<JobExpectationItem key={index} jobExp={item} {...props} />
				)
			})
		}
    </LeftMenuTitle>
	)
}

export default JobExpectations
