import Image from 'next/image'
import Icon from '@/components/icon'
import {Flex, ZItemWrap, WrapOneLine} from './styled'

interface ZProps {
  item: any
  onClick: () => void
}

export default function ZhaopinItem({item, onClick}: ZProps) {
  const {img, title, company, time, companyNum, gwNum, qzNum} = item
  return (
    <ZItemWrap onClick={onClick}>
      <Image alt='zhaopin' src={img} width={342} height={180} />
      <WrapOneLine css={{'-webkit-line-clamp': 2, mt: 20, fw: 600, color: '#3C4441'}}>{title}</WrapOneLine>
      <Flex css={{mt: 10, justifyContent: 'space-between'}}>
        <Flex css={{alignItems: 'center'}}>
          <Icon name='icon-icon_zaixianjianli' />
          <Flex css={{color: '$primary'}}>{companyNum}</Flex>企业
        </Flex>
        <Flex css={{alignItems: 'center'}}>
          <Icon name='icon-icon_zaixianjianli' />
          <Flex css={{color: '$primary'}}>{gwNum}</Flex>岗位
        </Flex>
        <Flex css={{alignItems: 'center'}}>
          <Icon name='icon-icon_zaixianjianli' />
          <Flex css={{color: '$primary'}}>{qzNum}</Flex>人求职
        </Flex>
      </Flex>
      <Flex css={{mt: 16, fs: 14, ff: '$fr', color: 'rgba(0,0,0,0.3)'}}>主办：{company}</Flex>
      <Flex css={{mt: 10, fs: 14, ff: '$fr', color: 'rgba(0,0,0,0.3)'}}>时间：{time}</Flex>
    </ZItemWrap>
  )
}
