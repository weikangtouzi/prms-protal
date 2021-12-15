import type {ReactElement} from 'react'
import Image from 'next/image'
import MainLayout from '@/layouts/main'
import {ResuTitle, Main, LeftWrap, LeftTitleWrap, RightBtn, Flex, UploadText, NormalText} from './components/styled'
import LeftMenuTitle from './components/left-menu-title'

const resumeMenu = [
  {
    text: '个人信息',
  },
  {
    text: '求职意向',
  },
  {
    text: '个人优势',
  },
  {
    text: '工作经历',
  },
  {
    text: '项目经历',
  },
  {
    text: '教育经历',
  },
]

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
export default function Resume() {
  const qzDom = <NormalText css={{mt: 30}}>期望岗位｜期望行业｜期望城市｜期望薪资｜工作性质</NormalText>
  const grDom = (
    <NormalText css={{mt: 30, lineHeight: '30px'}}>
      1、精通Photoshop，Illustrator等设计软件，精准的视觉设计把控 <br />
      2、有手机端和pc端设计以及平面设计经验 3、能合理分析用户需求，制作高保真低保真原型图 <br />
      4、具有一定的手绘功底
      <br /> 5、爱好写作，能及时分析热点
      <br /> 6、性格开朗，乐观向上，勤奋刻苦，喜欢接触不同的事物，也喜欢尝试不同的事情
    </NormalText>
  )

  const gzDom = (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32, mt: 30}}>
      <Flex css={{fw: 600}}>深圳市华为科技有限公司</Flex>
      <Flex css={{fw: 600, mt: 10}}>2010.01.10-2021.10.1 ｜UI设计</Flex>
      <NormalText css={{ml: 0, mt: 20}}>工作内容：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
    </Flex>
  )
  const xmDom = (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32, mt: 30}}>
      <Flex css={{fw: 600, fs: 18}}>抖音APP</Flex>
      <Flex css={{fw: 600, mt: 10}}>2010.01.10-2021.10.1 ｜UI设计</Flex>
      <NormalText css={{ml: 0, mt: 20}}>项目描述：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
      <NormalText css={{ml: 0, mt: 30}}>项目业绩：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
    </Flex>
  )
  const jyDom = (
    <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 32, mt: 30}}>
      <Flex css={{fw: 600}}>深圳大学</Flex>
      <Flex css={{fw: 600, mt: 10}}>视觉传达艺术设计 ｜本科</Flex>
      <NormalText css={{ml: 0, mt: 20}}>在校经历：</NormalText>
      <NormalText css={{ml: 0, mt: 10, color: '#8C9693', lineHeight: '30px'}}>
        1.根据产品的定位和需求，负责移动端和PC端的UI设计规划及迭代 <br />
        2.负责参与设计体验、流程的制定和规范，保障用户体验的一致性 <br />
        3.确保高质量的视觉输出，有清晰的设计思维来推进项目进度 <br />
        4.配合产品、研发、测试，完成产品迭代适配、验收、发布，并对产品用户体验负责。
      </NormalText>
    </Flex>
  )

  return (
    <Main>
      <LeftWrap>
        <LeftTitleWrap>
          <ResuTitle>我的简历</ResuTitle>
          <RightBtn>返回</RightBtn>
        </LeftTitleWrap>

        <Flex css={{justifyContent: 'space-between', alignItems: 'flex-start', mt: 39, p: '0 20px'}}>
          <Flex css={{alignItems: 'flex-start'}}>
            <Image alt='header' className='use-image-round' src={imgUrl} width={64} height={64} />
            <Flex css={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', ml: 20}}>
              <UploadText css={{fs: 24, mt: 0, fw: 600, color: '#3C4441'}}>陈小小</UploadText>
              <UploadText css={{mt: 9, ff: '$fr', color: '#3C4441'}}>5年｜本科｜25岁</UploadText>
              <UploadText css={{mt: 9, ff: '$fr', color: '#3C4441'}}>2017.03｜130******90</UploadText>
            </Flex>
          </Flex>
        </Flex>
        {resumeMenu.slice(1).map((lr, idx) => (
          <LeftMenuTitle key={lr.text} title={lr.text} edit={false} disabled>
            {idx === 0 ? qzDom : null}
            {idx === 1 ? grDom : null}
            {idx === 2 ? gzDom : null}
            {idx === 3 ? xmDom : null}
            {idx === 4 ? jyDom : null}
          </LeftMenuTitle>
        ))}
      </LeftWrap>
    </Main>
  )
}

Resume.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
