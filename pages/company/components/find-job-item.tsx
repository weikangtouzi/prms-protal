import {useState} from 'react'
import Image from 'next/image'
import {Flex, TitleText, FindJobItemWrap} from './styled'
import JobHoverItem from './job-hover-item'
import { reformComFinancing, reformCompanySize, reformEducationLevel, reformSalary } from '@/utils/utils'

interface JobIProps {
  item: any
}

export default function FindJobItem({item}: JobIProps) {
  const {job, subs, money, id, time, isUrgent, company, companyText, fl = [], logo, hr, onLine} = item
  const [active, setActive] = useState(false)
  let salaryTitle = `${item.min_salary}-${item.max_salary}`
  if (item.min_salary == 0 && item.max_salary == 0) {
  	salaryTitle = '面议'
  }

  return (
    <FindJobItemWrap
      css={active ? {boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)'} : {}}
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      <a href={`/job/${item.id ?? item.job_id}`} target='_blank' rel='noreferrer'>
        <Flex css={{justifyContent: 'space-between', pb: 20, borderBottom: '1px dashed rgba(0,0,0,0.1)'}}>
          <Flex css={{flexDirection: 'column'}}>
            <Flex css={{alignItems: 'center'}}>
              <TitleText css={active ? {fs: 18, color: '$primary', mr: 10} : {fs: 18, mr: 10}}>{item.title}</TitleText>
              {isUrgent ? (
                <TitleText css={{fs: 14, color: '#FF4B4B', border: '1px solid #FF4B4B', p: '3px 15px', mr: 15}}>
                  急招
                </TitleText>
              ) : null}
              <TitleText css={{fs: 14, fw: 400, color: '#616A67', ff: '$fr'}}>{time}</TitleText>
            </Flex>
            <Flex css={{alignItems: 'center', mt: 13}}>
              <TitleText css={{color: '#FF6500', fs: 18}}>{salaryTitle}</TitleText>
              <TitleText css={{fs: 14, fw: 400, color: '#616A67', ml: 15, ff: '$fr'}}>{[`${item.min_experience}年及以上`, item?.address_description?.[4], reformEducationLevel(item?.min_education?.name ?? item?.min_education)].filter(x => x).join('  |  ')}</TitleText>
            </Flex>
          </Flex>
          <Flex css={{justifyContent: 'space-between', w: 398, alignItems: 'center'}}>
            <Flex css={{flexDirection: 'column'}}>
              <TitleText css={{color: '#3C4441', fs: 16, ff: '$fr', fw: 400}}>{item.comp_name}</TitleText>
              <TitleText css={{color: '#616A67', fs: 14, ff: '$fr', fw: 400, mt: 16}}>{[reformComFinancing(item.comp_financing), reformCompanySize(item.comp_size)].join(' | ')}</TitleText>
            </Flex>
            <img src={item.logo} width={58} height={58} alt='xxx' />
          </Flex>
        </Flex>
        <Flex css={{justifyContent: 'space-between', mt: 13}}>
          <Flex>
            <TitleText css={{fs: 14, fw: 400, color: '#616A67'}}>{`${item.hr_name}·${item.hr_pos}`}</TitleText>
            <TitleText css={{fs: 14, fw: 400, color: '$primary', ml: 15}}>在线</TitleText>
          </Flex>
          <Flex css={{w: 398}}>
            {item.tags.map((f: string) => (
              <TitleText
                key={f}
                css={{fs: 14, fw: 400, color: '#616A67', ff: '$fr', bg: '#EFF2F1', p: '4px 10px', mr: 20}}
              >
                {f}
              </TitleText>
            ))}
          </Flex>
        </Flex>
      </a>
      <JobHoverItem active={active} item={item} />
    </FindJobItemWrap>
  )
}
