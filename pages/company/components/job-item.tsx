import {useState} from 'react'
import {Flex, TitleText, JobItemWrap} from './styled'
import JobHoverItem from './job-hover-item'

interface JobIProps {
  item: any
}

export default function JobItem({item}: JobIProps) {
  const {job, subs, money, time} = item
  const [active, setActive] = useState(false)

  return (
    <JobItemWrap
      css={active ? {boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)'} : {}}
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      <Flex css={{justifyContent: 'space-between'}}>
        <TitleText css={active ? {fs: 18, color: '$primary'} : {fs: 18}}>{job}</TitleText>
        <TitleText css={{color: '#FF6500', fs: 18}}>{money}</TitleText>
      </Flex>
      <Flex css={{justifyContent: 'space-between', mt: 13}}>
        <TitleText css={{fs: 14, fw: 400, color: '#616A67'}}>{subs}</TitleText>
        <TitleText css={{fs: 14, fw: 400, color: '#616A67'}}>{time}</TitleText>
      </Flex>
      <JobHoverItem active={active} item={item} />
    </JobItemWrap>
  )
}
