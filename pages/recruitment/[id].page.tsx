import Image from 'next/image'
import {useState} from 'react'
import Icon from '@/components/icon'
import {
  Main,
  CompanyHead,
  CompanyBodyWrap,
  Flex,
  TitleText,
  LeftWrap,
  RightWrap,
  TabWrap,
} from '../company/components/styled'
import TabItem from '../company/components/tab-item'
import {ConfirmDialog} from '@/components/dialogs'
import {Button} from '@/components/button'

import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
const zpName = '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展》'
const content =
  '	为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《深圳市国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》等文件，我局编制了《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》。为保证公众知情权和参与权，提高文件质量，根据《重大行政决策程序暂行条例》（国务院令第713号），现就《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》公开征求社会公众意见。社会各机关团体、企事业单位和个人均可向我局提出意见和建议，并于2021年11月23日前，通过以下方式反馈我局：<br />（一）信函邮寄：通过EMS寄送至深圳市福田区深南大道8005号深圳人才园7046室，政策法规处收，联系电话：0755-88123017，请在邮件上标注“‘深圳人社’十四五规划征求意见”字样。　　（二）邮箱反馈：zengyujing@hrss.sz.gov.cn。　　（三）登录市人力资源保障局官网“民意征集”栏目直接填写反馈意见（http://hrss.sz.gov.cn/zmhd/mydc/）　　以单位名义反馈的，请在反馈意见后注明单位名称、联系人及联系方式，并盖单位公章；以个人名义反馈的，请在反馈意见后注明姓名、联系方式、身份证号码，并签名确认。匿名反馈意见一律不予采纳。　　特此通告。　　附件：深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）'

const companyList = [
  {
    id: 1,
    img: imgUrl,
    name: '公司名称',
    detail: 'A轮｜50-150人｜移动互联网 数据服务',
  },
  {
    id: 2,
    img: imgUrl,
    name: '公司名称',
    detail: 'A轮｜50-150人｜移动互联网 数据服务',
  },
  {
    id: 3,
    img: imgUrl,
    name: '公司名称',
    detail: 'A轮｜50-150人｜移动互联网 数据服务',
  },
]

const commentList = [
  {
    id: 1,
    img: imgUrl,
    name: '陈女士 · HR',
    describe: '刚刚活跃',
    time: '2021-10-01',
    comment: '问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述',
    child: [
      {
        id: 2,
        img: imgUrl,
        name: '主办方公司名字',
        time: '2021-10-01',
        comment: '问题描述问题描述问题描述问题描述问题描',
      },
      {
        id: 3,
        img: imgUrl,
        name: '主办方公司名字',
        time: '2021-10-01',
        comment: '问题描述问题描述问题描述问题描述问题描',
      },
    ],
  },
  {
    id: 4,
    img: imgUrl,
    name: '陈女士 · HR',
    describe: '刚刚活跃',
    time: '2021-10-01',
    comment: '问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述',
    child: [
      {
        id: 5,
        img: imgUrl,
        name: '主办方公司名字',
        time: '2021-10-01',
        comment: '问题描述问题描述问题描述问题描述问题描',
      },
      {
        id: 6,
        img: imgUrl,
        name: '主办方公司名字',
        time: '2021-10-01',
        comment: '问题描述问题描述问题描述问题描述问题描',
      },
    ],
  },
]

export default function Recruitment() {
  const [activeTab, setActiveTab] = useState(1)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Main>
      <CompanyHead css={{h: 209}}>
        <Flex css={{justifyContent: 'space-between'}}>
          <Flex css={{flexDirection: 'column', ml: 10, w: 822}}>
            <TitleText>{zpName}</TitleText>
            <TitleText
              css={{
                fs: 16,
                fw: 400,
                ff: '$fr',
                mt: 9,
                lineHeight: '25px',
                color: '#3C4441',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Icon name='icon-icon_shijian' />
              2021年10月01日-2021年10-30日
            </TitleText>
            <TitleText
              css={{
                fs: 16,
                fw: 400,
                ff: '$fr',
                mt: 9,
                lineHeight: '25px',
                color: '#3C4441',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Icon name='icon-icon_dingwei' />
              广东省深圳市福田区人才园
            </TitleText>
          </Flex>
          <Flex css={{flexDirection: 'column'}}>
            <Flex>
              <Flex css={{flexDirection: 'column', alignItems: 'center'}}>
                <TitleText css={{fs: 26}}>56789</TitleText>
                <TitleText css={{fs: 16, fw: 400, ff: '$fr', mt: 10}}>招聘职位</TitleText>
              </Flex>
              <Flex css={{flexDirection: 'column', alignItems: 'center', ml: 52}}>
                <TitleText css={{fs: 26}}>56789</TitleText>
                <TitleText css={{fs: 16, fw: 400, ff: '$fr', mt: 10}}>位求职者</TitleText>
              </Flex>
            </Flex>
            <Button
              text='立即报名'
              onClick={() => {
                setDialogOpen(true)
              }}
              css={{w: 240, h: 42, mt: 20, fs: 16}}
            />
          </Flex>
        </Flex>
      </CompanyHead>
      <CompanyBodyWrap css={{pb: 80}}>
        <LeftWrap>
          <TabWrap>
            <TabItem
              onClick={() => {
                setActiveTab(1)
              }}
              title='招聘会详情'
              active={activeTab === 1}
            ></TabItem>
            <TabItem
              onClick={() => {
                setActiveTab(2)
              }}
              title='招聘会问答'
              active={activeTab === 2}
            ></TabItem>
          </TabWrap>

          {activeTab === 1 ? (
            <Flex css={{mt: 16, bg: '$w', p: 40, flexDirection: 'column'}}>
              <Splide options={{arrows: false, autoplay: true, type: 'loop'}}>
                <SplideSlide>
                  <Image alt='header' src={imgUrl} width={804} height={364} />
                </SplideSlide>
                <SplideSlide>
                  <Image alt='header' src={imgUrl} width={804} height={364} />
                </SplideSlide>
              </Splide>
              <Flex css={{fs: 16, color: '#3C4441', ff: '$fr', whiteSpace: 'break-spaces', mt: 42}}>{content}</Flex>
            </Flex>
          ) : (
            <Flex css={{mt: 16, flexDirection: 'column'}}>
              {commentList.map((co) => (
                <Flex css={{mt: 16, bg: '$w', p: 40, flexDirection: 'column'}} key={co.id}>
                  <Flex css={{alignItems: 'flex-start'}}>
                    <Image alt='header' className='use-image-round' src={co.img} width={48} height={48} />
                    <Flex css={{fs: 16, color: '#3C4441', ff: '$fr', ml: 15, w: 740, justifyContent: 'space-between'}}>
                      <Flex css={{flexDirection: 'column'}}>
                        {co.name}
                        <Flex css={{mt: 16}}>{co.describe}</Flex>
                      </Flex>
                      <Flex css={{color: '#616A67'}}>{co.time}</Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    css={{
                      ml: 63,
                      mt: 7,
                      p: 20,
                      bg: '#F2F7F5',
                      borderRadius: '0px 20px 20px 20px',
                      w: 'max-content',
                      fw: 600,
                      color: '#3C4441',
                    }}
                  >
                    {co.comment}
                  </Flex>
                  {co.child.map((cc) => (
                    <Flex css={{ml: 63, mt: 15, flexDirection: 'column'}} key={cc.id}>
                      <Flex css={{alignItems: 'center', justifyContent: 'space-between'}}>
                        <Flex css={{alignItems: 'center'}}>
                          <Image alt='header' className='use-image-round' src={cc.img} width={32} height={32} />
                          <Flex css={{ml: 10, color: '#616A67'}}>{cc.name}</Flex>
                          <TitleText css={{fs: 16, ml: 10}}>回复</TitleText>
                        </Flex>
                        <Flex css={{color: '#616A67'}}>{cc.time}</Flex>
                      </Flex>
                      <Flex
                        css={{
                          ml: 42,
                          mt: 7,
                          p: 20,
                          bg: '#F2F7F5',
                          borderRadius: '0px 20px 20px 20px',
                          w: 'max-content',
                          fw: 600,
                          color: '#3C4441',
                        }}
                      >
                        {cc.comment}
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
          )}
        </LeftWrap>
        <Flex css={{flexDirection: 'column'}}>
          <RightWrap>
            <TitleText css={{fs: 24}}>
              活动承办
              {companyList.map((cm) => (
                <Flex
                  key={cm.id}
                  css={{flexDirection: 'column', mt: 20, pb: 20, borderBottom: '1px dashed rgba(0,0,0,0.1)'}}
                >
                  <TitleText css={{fs: 18, color: '#3C4441'}}>主办方</TitleText>
                  <Flex css={{mt: 21, alignItems: 'flex-start'}}>
                    <Image alt='hr' src={cm.img} width={48} height={48} />
                    <Flex css={{flexDirection: 'column', ml: 10}}>
                      <TitleText css={{fs: 16, fw: 400, ff: '$fr', color: '#616A67'}}>{cm.name}</TitleText>
                      <TitleText css={{fs: 14, fw: 400, ff: '$fr', mt: 2, color: '#616A67'}}>{cm.detail}</TitleText>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </TitleText>
          </RightWrap>
          <RightWrap css={{mt: 16}}>
            <TitleText css={{fs: 24}}>参加企业</TitleText>
            <Flex css={{flexDirection: 'column'}}>
              {companyList.map((cm) => (
                <Flex key={cm.id} css={{mt: 21, alignItems: 'flex-start'}}>
                  <Image alt='hr' src={cm.img} width={48} height={48} />
                  <Flex css={{flexDirection: 'column', ml: 10}}>
                    <TitleText css={{fs: 16, fw: 400, ff: '$fr', color: '#616A67'}}>{cm.name}</TitleText>
                    <TitleText css={{fs: 14, fw: 400, ff: '$fr', mt: 2, color: '#616A67'}}>{cm.detail}</TitleText>
                  </Flex>
                </Flex>
              ))}
            </Flex>

            <a href='/recruitment/companies' target='_blank' rel='noreferrer'>
              <Flex
                css={{
                  color: '$primary',
                  border: '1px solid $primary',
                  w: 135,
                  h: 42,
                  borderRadius: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 20,
                }}
              >
                查看999企业 &gt;
              </Flex>
            </a>
          </RightWrap>
        </Flex>
      </CompanyBodyWrap>
      <ConfirmDialog
        title='成功'
        css={{w: 398, h: 213}}
        iconName='icon-icon_chenggong'
        hideBtns={true}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        bodyText={
          <Flex css={{flexDirection: 'column', alignItems: 'center'}}>
            招聘会操作报名成功
            <Button
              onClick={() => {
                setDialogOpen(false)
              }}
              css={{
                mt: 20,
                w: 200,
                h: 46,
                bg: '$w',
                fs: 14,
                color: '$primary',
                border: '1px solid $primary',
              }}
              text='我知道了'
            />
          </Flex>
        }
      />
    </Main>
  )
}
