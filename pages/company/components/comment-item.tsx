import {useState} from 'react'
import Image from 'next/image'
import {Flex, TitleText, ExpandContextWrap, ExpandBtnWrap, ContextWrap, BtnWrap} from './styled'
import Icon from '@/components/icon'

interface CProps {
  item: any
}
export default function CommentItem({item}: CProps) {
  const [expand, setExpand] = useState(false)
  const {id, img, name, position, tags = [], context, time, thumbed, thumbNum} = item
  return (
    <Flex key={id} css={{borderTop: '1px dashed  rgba(0, 0, 0, 0.1)', pt: 19, mt: 22, alignItems: 'flex-start'}}>
      <Image alt='name' className='use-image-round' width={48} height={48} src={img} />
      <Flex css={{w: 747, ml: 9, flexDirection: 'column'}}>
        <Flex css={{w: '100%', justifyContent: 'space-between'}}>
          <TitleText css={{fs: 16, fw: 400, ff: '$fr'}}>{name}</TitleText>
          <TitleText css={{fs: 16, fw: 400, ff: '$fr'}}>面试职位：{position}</TitleText>
        </Flex>
        <Flex>
          {tags.map((t: string) => (
            <Flex
              css={{
                borderRight: 4,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                p: '7px 16px',
                mr: 10,
                mt: 14,
                fs: 14,
                color: '#616A67',
              }}
              key={t}
            >
              {t}
            </Flex>
          ))}
        </Flex>
        {expand ? (
          <ExpandContextWrap>
            {context}
            <ExpandBtnWrap
              onClick={() => {
                setExpand(false)
              }}
            >
              收起
            </ExpandBtnWrap>
          </ExpandContextWrap>
        ) : (
          <ContextWrap>
            <BtnWrap
              onClick={() => {
                setExpand(true)
              }}
            >
              展开
            </BtnWrap>
            {context}
          </ContextWrap>
        )}

        <Flex css={{w: '100%', justifyContent: 'space-between'}}>
          <TitleText css={{fs: 16, fw: 400, ff: '$fr'}}>{time}</TitleText>
          <TitleText css={{fs: 14, fw: 400, ff: '$fr', color: '$primary'}}>
            <Icon name={thumbed ? 'icon-icon_dianzan' : 'icon-icon_weidianzan'} />
            {thumbNum}
          </TitleText>
        </Flex>
      </Flex>
    </Flex>
  )
}
