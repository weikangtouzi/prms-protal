import {useState} from 'react'
import Image from 'next/image'
import {ResumeItemWrap, Flex, FloatLeftWrap, ResuTitle} from './styled'
import Icon from '@/components/icon'

interface RProps {
  item: {
    id: number
    title: string
    size: string
    img: string
  }
  onDelete: any
  onModify: any
  // onDownload: any;
}

export default function ResumeItem({item, onDelete, onModify}: RProps) {
  const [active, setActive] = useState(false)
  const {title, size, img} = item

  return (
    <ResumeItemWrap
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
      active={active}
    >
      <Flex>
        <Icon name='icon-icon_fujian' />
        {title}
      </Flex>
      <Icon
        onClick={() => {
          onDelete()
        }}
        name='icon-icon_fujian'
      />
      {active ? (
        <FloatLeftWrap>
          <Flex css={{borderBottom: '1px dashed rgba(0, 0, 0, 0.1)', pb: 23}}>
            <Image src={img} width={42} height={48} alt='img' />
            <Flex css={{flexDirection: 'column', alignItems: 'flex-start', ml: 20}}>
              <ResuTitle css={{fs: 16}}>{title}</ResuTitle>
              <ResuTitle css={{fs: 16, ff: '$fr', fw: 400, mt: 17}}>{size}</ResuTitle>
            </Flex>
          </Flex>
          <Flex css={{mt: 19, justifyContent: 'flex-end'}}>
            <ResuTitle onClick={onModify} css={{color: '#616A67', fs: 16, fw: 400, ff: '$fr'}}>
              重命名
            </ResuTitle>
            <ResuTitle css={{color: '#616A67', fs: 16, fw: 400, ff: '$fr', ml: 40}}>下载</ResuTitle>
          </Flex>
        </FloatLeftWrap>
      ) : null}
    </ResumeItemWrap>
  )
}
