import Image from 'next/image'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Button} from '@/components/button'
import {Tabs} from '@/components/tabs'
import {
  Main,
  InputWrap,
  RealInput,
  SearchWorldWrap,
  SearchWorldText,
  BodyWrap,
  FirstWrap,
  FirstLeftWrap,
  FirstRightWrap,
  FirstRight,
  FoldBtn,
  PartTitle,
  ReZhaoWrap,
} from './components/styled'

import ZhiYeItem from './components/zhiye-item'
import ReZhaoItem from './components/re-zhao-item'
import ZhiChangItem from './components/zhichang-item'
import ZhiChangLongItem from './components/zhichang-long-item'

const searchWords = ['高级产品经理', '项目经理', '后台开发', '前端开发', '自动化测试']

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'

const rzTabs = ['互联网', '教育行业', '建筑行业', '医疗行业', '服务行业', '金融行业', '行业名称']
const zxTabs = ['资讯分类', '资讯教育', '建筑资讯', '医疗资讯', '服务资讯', '金融资讯', '网络资讯']

const rzList = [
  {
    id: 1,
    zy: '产品经理',
    price: '15-20K',
    needs: ['深圳', '1-3年', '本科', '全职'],
    companyImg: imgUrl,
    companyName: '公司名称',
    companyNeeds: ['A轮', '50-150人', '移动互联网，数据服'],
  },
  {
    id: 2,
    zy: '产品经理',
    price: '15-20K',
    needs: ['深圳', '1-3年', '本科', '全职'],
    companyImg: imgUrl,
    companyName: '公司名称',
    companyNeeds: ['A轮', '50-150人', '移动互联网，数据服'],
  },
  {
    id: 3,
    zy: '产品经理',
    price: '15-20K',
    needs: ['深圳', '1-3年', '本科', '全职'],
    companyImg: imgUrl,
    companyName: '公司名称',
    companyNeeds: ['A轮', '50-150人', '移动互联网，数据服'],
  },
  {
    id: 4,
    zy: '产品经理',
    price: '15-20K',
    needs: ['深圳', '1-3年', '本科', '全职'],
    companyImg: imgUrl,
    companyName: '公司名称',
    companyNeeds: ['A轮', '50-150人', '移动互联网，数据服'],
  },
]

const zcList = [
  {
    id: 1,
    img: imgUrl,
    title:
      '2021网络安全人才趋势报告',
    content:
      '进入数字经济时代，互联网、大数据、人工智能、云计算、5G等技术全面渗透到各行各业，改造并影响着生产生活的各个环节。随之而来的网络安全挑战复杂程度之高，演变速度之快，远远超出既往经验。随着网络安全的重要',
    writer: '趁早找',
    time: '·2021-10-01',
  },
  {
    id: 2,
    img: imgUrl,
    title:
      '拿不到年终奖就跳槽？80后或成最硬核职场人 | 2018年终奖调查报告',
    content:
      '江西一集团堆了一座5亿现金墙，为公司1万员工发放人均5万元的年终奖；浙江温州一家汽车部件公司，奖励100名优秀员工一人一台价值11万元新车。有种奖，叫做别人的年终奖。西湖的水，我的泪！辛辛苦苦搬砖一年',
    writer: '趁早找',
    time: '2021-10-01',
  },
  {
    id: 3,
    img: imgUrl,
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
    content:
      '为持续推动全市人力资源和社会保障事业业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
    writer: '趁早找',
    time: '·2021-10-01',
  },
  {
    id: 4,
    img: imgUrl,
    title:
      '职场青年感情状态报告：1/4年轻人正在精神异地恋，不想结婚因为穷',
    content:
      '2017年，人才市场上发生了许多大事。互联网行业继续高歌猛进，传统行业积极求变；巨头和独角兽在自我分裂、合并和竞争中制造了无数话题，创业公司依然在生死门间巡回，有一飞冲天的奇迹，也有悲情退',
    writer: '趁早找',
    time: '·2021-10-01',
  },
  {
    id: 5,
    img: imgUrl,
    title: '2016年应届生就业竞争力报告：专业与技能篇',
    content:
      '2016年应届生求职季正不断深入, 实体经济的下行与新一代大学生求职偏好的“进化”，令今年的校招市场呈现出一些不同的景象。移动互联网招聘平台趁早找近日发布的《2016年应届生就业',
    writer: '趁早找',
    time: '·2021-10-01',
  },
  {
    id: 6,
    img: imgUrl,
    title:
      '这个七夕【直】想和你尝鲜！',
    content:
      '一年一度七夕节，牛郎织女诉相思。今天这样特别的日子里，总需要一种特殊的方式来表达爱意，送礼物则是最基础的仪式感表现。等等等等…..你不会还在送玫瑰跟巧克力吧？是时候“尝尝鲜”啦！8月7日-8月11日，',
    writer: '趁早找',
    time: '·2021-10-01',
  },
]

export async function getServerSideProps({ context }) {
	const response = await HTAPI.request('/preludeDatas/job_category.json')
	return {
		props: {
			jobCategoryList: Object.keys(response).map((key, index) => {
				let childList = response[key]
				return {
					id: index,
					title: key,
					sublist: Object.keys(childList).map((key, index) => {
						return {
							id: index,
							title: key,
							sublist: childList[key].map((key, index) => ({
								id: index,
								title: key
							}))
						}
					})
				}
			}),
			bannerList: [
				'https://img.freepik.com/free-vector/hand-drawn-hello-spring-illustration_1188-459.jpg?t=st=1648118348~exp=1648118948~hmac=27414c7963326a2b1f6f25cda2fb2ef682f8b4550ce2bc4c191e45768c8e564b&w=1060',
				'https://img.freepik.com/free-vector/watercolor-spring-illustration_23-2149283727.jpg?t=st=1648118477~exp=1648119077~hmac=df19f1bdb4a150e8882d7485ec39f8c5271faa484355ea9fc5aaca872d27f83d&w=1060',
				'https://img.freepik.com/free-vector/flat-spring-illustration_23-2149281781.jpg?w=1060',
				'https://img.freepik.com/free-vector/watercolor-spring-illustration_23-2149283722.jpg?t=st=1648118348~exp=1648118948~hmac=33f10f97f893419876cac5bd3090cd8f0ccd843f015f423b59309e2ac405aaae&w=1060',
				'https://img.freepik.com/free-vector/hand-drawn-spring-illustration_23-2149285248.jpg?w=1060',
			].sort(() => Math.random() - 0.5)
		}
	}
}

export default function Home({ jobCategoryList = [], bannerList = [] }) {
	const router = useRouter()
  const [active, setActive] = useState(false)
  const [isFold, setIsFold] = useState(true)
  const [rzActive, setRzActive] = useState(0)
  const [zxActive, setZxActive] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [jobList, setJobList] = useState([])

  if (process.browser) {
		document.onkeydown = function(event) {
	    if(event.keyCode != 13) {
	    	return
	    }
	    if (!active) {
	    	return
	    }
	    router.push(`/job?keyword=${keyword}`)
		}
	}

	useEffect(() => {
		HTAPI.CandidateSearchJob({
	    filter: {
	        page: 0,
	        pageSize: 18,
	    }
	  }).then(response => {
	  	setJobList(response?.data ?? [])
	  })
	}, [])

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
          placeholder='搜索职位、公司'
          value={keyword}
          onChange={event => setKeyword(event.target.value)}
        />
        <Button css={{w: 120, h: 54, mt: 0, borderRadius: 0}} text='搜索' onClick={() => {
        	router.push(`/job?keyword=${keyword}`)
        } } />
      </InputWrap>
      <SearchWorldWrap>
        热门搜索：
        {searchWords.map((s) => (
          <SearchWorldText key={s} onClick={() => {
          	router.push(`/job?keyword=${s}`)
          }}>{s}</SearchWorldText>
        ))}
      </SearchWorldWrap>
      <BodyWrap>
        <FirstWrap>
          <FirstLeftWrap
            onMouseLeave={() => {
              setIsFold(true)
            }}
          >
            {(isFold ? jobCategoryList.slice(0, 7) : jobCategoryList).map((z) => (
              <ZhiYeItem item={z} key={z.id} isFold={isFold} />
            ))}
            {isFold ? (
              <FoldBtn
                onMouseMove={() => {
                  setIsFold(false)
                }}
              >
                显示全部职位
              </FoldBtn>
            ) : null}
          </FirstLeftWrap>
          <FirstRightWrap>
            <Splide options={{arrows: false, autoplay: true, type: 'loop'}}>
            	{
            		bannerList.map((item, index) => {
            			return (
            				<SplideSlide key={index}>
			                <FirstRight alt='header' src={item} />
			              </SplideSlide>
            			)
            		})
            	}
            </Splide>
          </FirstRightWrap>
        </FirstWrap>
        <PartTitle text='热招职位' />
        {/*<Tabs list={rzTabs} active={rzActive} onClickItem={setRzActive} />*/}
        <ReZhaoWrap>
          {jobList.map((rz) => (
            <ReZhaoItem key={rz.id} item={rz} />
          ))}
        </ReZhaoWrap>
        <Button
          css={{mt: 30, w: 200, h: 46, ml: '50%', fs: 14, transform: 'translate(-50%,0)'}}
          text='查看更多'
          onClick={() => {
            router.push('/job')
          }}
        />
        <PartTitle text='职场资讯' />
        <Tabs list={zxTabs} active={zxActive} onClickItem={setZxActive} />
        <ReZhaoWrap css={{ mb: 80 }}>
          {zcList.sort(() => Math.random() - 0.5).slice(0, 3).map((rz) => (
            <ZhiChangItem key={rz.id} item={rz} />
          ))}
          {zcList.sort(() => Math.random() - 0.5).slice(3).map((rz) => (
            <ZhiChangLongItem key={rz.id} item={rz} />
          ))}
        </ReZhaoWrap>
        {/*<Button
          css={{mt: 30, mb: 80, w: 200, h: 46, ml: '50%', fs: 14, transform: 'translate(-50%,0)'}}
          text='查看更多'
          onClick={() => {
            console.log('查看更多 ')
          }}
        />*/}
      </BodyWrap>
    </Main>
  )
}
