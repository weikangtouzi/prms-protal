import Image from 'next/image'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {Main, InputWrap, RealInput, SearchWorldWrap, SearchWorldText, PartTitle} from '../components/styled'
import {Flex, TopLeftPartWrap, TopLeftTitleWrap, WrapOneLine} from './components/styled'
import ZhaopinItem from './components/zhaopin-item'

import {Button} from '@/components/button'
import Icon from '@/components/icon'

const searchWords = ['深圳人才招聘', '招聘会名称']
const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'

const mainImgTitle = '粤港澳大湾区高端人才招聘会诚邀您参与！助力粤港澳大湾区集聚人才参与！助力粤港澳大湾区集聚人才'
const mainImgTime = '2021年10月01日-2021年10-30日'

const list = [
  {
    id: 1,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办：主办方名称',
    time: '时间：2021年10月01日-2021年10月30',
  },
  {
    id: 2,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办：主办方名称',
    time: '时间：2021年10月01日-2021年10月30',
  },
  {
    id: 3,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办：主办方名称',
    time: '时间：2021年10月01日-2021年10月30',
  },
  {
    id: 4,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发力资源和社会保障事业发',
    companyNum: 2000,
    gwNum: 1000,
    qzNum: 1200,
    company: '主办方名称',
    time: '2021年10月01日-2021年10月30',
  },
]
export default function Recruitment() {
  const router = useRouter()
  const [active, setActive] = useState(false)
  return (
    <Main>
      <InputWrap>
        <RealInput
          onFocus={() => {
            setActive(true)
          }}
          onBlur={() => {
            setActive(false)
          }}
          active={active}
          placeholder='搜索招聘会名称、主办公司'
        />
        <Button css={{w: 120, h: 54, mt: 0, borderRadius: 0}} text='搜索' />
      </InputWrap>
      <SearchWorldWrap>
        热门搜索：
        {searchWords.map((s) => (
          <SearchWorldText key={s}>{s}</SearchWorldText>
        ))}
      </SearchWorldWrap>
      <Flex css={{bg: 'rgba(242,244,246,1)', pt: 20, width: '100%', justifyContent: 'center'}}>
        <TopLeftPartWrap>
          <Image alt='header' src={imgUrl} width={682} height={392} />
          <TopLeftTitleWrap>
            <WrapOneLine>{mainImgTitle}</WrapOneLine>
            <Flex css={{fs: 16, alignItems: 'center'}}>
              <Icon name='icon-icon_shijian-copy' />
              {mainImgTime}
            </Flex>
          </TopLeftTitleWrap>
        </TopLeftPartWrap>
        <Flex css={{flexDirection: 'column'}}>
          <Flex>
            <Image alt='header' src={imgUrl} width={486} height={120} />
          </Flex>
          <Flex css={{mt: 16}}>
            <Image alt='header' src={imgUrl} width={486} height={120} />
          </Flex>
          <Flex css={{mt: 16}}>
            <Image alt='header' src={imgUrl} width={486} height={120} />
          </Flex>
        </Flex>
      </Flex>
      <PartTitle text='线下招聘会' />
      <Flex css={{w: 1184, flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {list.map((l) => (
          <a key={l.id} href={`/recruitment/${l.id}`} target='_blank' rel='noreferrer'>
            <ZhaopinItem item={l}></ZhaopinItem>
          </a>
        ))}
      </Flex>
      <a href='/recruitment/list' target='_blank' rel='noreferrer'>
        <Button css={{mt: 30, mb: 0, w: 200, h: 46, fs: 14}} text='查看更多' />
      </a>
      <PartTitle text='视频招聘会' />
      <Flex css={{w: 1184, flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {list.map((l) => (
          <a key={l.id} href={`/recruitment/${l.id}`} target='_blank' rel='noreferrer'>
            <ZhaopinItem item={l}></ZhaopinItem>
          </a>
        ))}
      </Flex>
      <Button
        css={{mt: 30, mb: 80, w: 200, h: 46, fs: 14}}
        text='查看更多'
        onClick={() => {
          console.log('查看更多 ')
        }}
      />
    </Main>
  )
}
