import Image from 'next/image'
import {useState} from 'react'
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
  FoldBtn,
  PartTitle,
  ReZhaoWrap,
} from './components/styled'

import ZhiYeItem from './components/zhiye-item'
import ReZhaoItem from './components/re-zhao-item'
import ReMenQiYeItem from './components/re-menqiye-item'
import ZhiChangItem from './components/zhichang-item'
import ZhiChangLongItem from './components/zhichang-long-item'

const searchWords = ['高级产品经理', '项目经理', '后台开发', '前段开发', '自动化测试']

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'

const zys = [
  {
    id: 1,
    title: '产品',
    rightText: ['产品总监', '产品经理', '数据产品经理', '曾长产品'],
  },
  {
    id: 2,
    title: '产品',
    rightText: ['产品总监', '产品经理', '网络推广'],
  },
  {
    id: 3,
    title: '设计',
    rightText: ['平面设计', '美工', 'UI'],
  },
  {
    id: 4,
    title: '产品',
    rightText: ['产品总监', '产品经理', '数据产品经理', '曾长产品'],
  },
  {
    id: 5,
    title: '产品',
    rightText: ['产品总监', '产品经理', '数据产品经理', '曾长产品'],
  },
  {
    id: 6,
    title: '产品',
    rightText: ['产品总监', '产品经理', '数据产品经理', '曾长产品'],
  },
  {
    id: 7,
    title: '市场',
    rightText: ['市场营销', '市场推广', '网络推广'],
    details: [
      {
        left: '产品经理',
        children: [
          '产品经理',
          '网络产品经理',
          '移动产品经理',
          '产品助理',
          '数据产品经理',
          '电商产品经理',
          '游戏策划',
          '产品专员',
          '硬件产品经理',
        ],
      },
      {
        left: '高端产品职位',
        children: ['高端产品职位', '产品总监', '移动产品经理', '游戏制作人', '产品VP'],
      },
      {
        left: '其他产品职位',
        children: ['其他产品职位'],
      },
    ],
  },
  {
    id: 8,
    title: '美工',
    rightText: ['UIX', '美工'],
  },
  {
    id: 9,
    title: '产品',
    rightText: ['产品总监', '产品经理', '数据产品经理', '曾长产品'],
  },
  {
    id: 10,
    title: '市场',
    rightText: ['市场营销', '市场推广', '网络推广'],
  },
  {
    id: 11,
    title: '美工',
    rightText: ['UIX', '美工'],
  },
  {
    id: 12,
    title: '产品',
    rightText: ['产品总监', '产品经理', '数据产品经理', '曾长产品'],
    details: [
      {
        left: '产品经理',
        children: [
          '产品经理',
          '网络产品经理',
          '移动产品经理',
          '产品助理',
          '数据产品经理',
          '电商产品经理',
          '游戏策划',
          '产品专员',
          '硬件产品经理',
        ],
      },
      {
        left: '高端产品职位',
        children: ['高端产品职位', '产品总监', '移动产品经理', '游戏制作人', '产品VP'],
      },
      {
        left: '其他产品职位',
        children: ['其他产品职位'],
      },
    ],
  },
]

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

const qyList = [
  {id: 1, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联网，数据服'], peopleNum: 1344},
  {id: 2, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联网，数据服'], peopleNum: 134},
  {id: 3, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联网，数据服'], peopleNum: 24},
  {id: 4, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联网，数据服'], peopleNum: 99},
  {id: 5, img: imgUrl, name: '公司名称', needs: ['A轮', '50-150人', '移动互联网，数据服'], peopleNum: 12345},
]

const zcList = [
  {
    id: 1,
    img: imgUrl,
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
    content:
      '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
    writer: '作者名称',
    time: '·2021-10-01',
  },
  {
    id: 2,
    img: imgUrl,
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
    content:
      '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
    writer: '作者名称',
    time: '2021-10-01',
  },
  {
    id: 3,
    img: imgUrl,
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
    content:
      '为持续推动全市人力资源和社会保障事业业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
    writer: '作者名称',
    time: '·2021-10-01',
  },
  {
    id: 4,
    img: imgUrl,
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
    content:
      '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
    writer: '作者名称',
    time: '·2021-10-01',
  },
  {
    id: 5,
    img: imgUrl,
    title: '深圳人力资源和社会保障局关于公开',
    content:
      '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
    writer: '作者名称',
    time: '·2021-10-01',
  },
  {
    id: 6,
    img: imgUrl,
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展“十四五”规划（征求意见稿）》意见的通告',
    content:
      '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》《关于支持深圳建设中国特色社会主义先行示范区的意见》《中华人民共和国国民经济和社会发展第十四个五年规划和二〇三五年远景目标纲要》《广东省国美女阿什拉维啊神烦我了啊是对方为啦说的氛围阿双方为阿隆索范围阿斯顿发威',
    writer: '作者名称',
    time: '·2021-10-01',
  },
]

export default function Home() {
  const [active, setActive] = useState(false)
  const [isFold, setIsFold] = useState(true)
  const [zyList] = useState(zys)
  const [rzActive, setRzActive] = useState(0)
  const [zxActive, setZxActive] = useState(1)

  let list = zyList

  if (isFold) {
    list = zyList.slice(0, 7)
  }

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
        />
        <Button css={{w: 120, h: 54, mt: 0, borderRadius: 0}} text='搜索' />
      </InputWrap>
      <SearchWorldWrap>
        热门搜索：
        {searchWords.map((s) => (
          <SearchWorldText key={s}>{s}</SearchWorldText>
        ))}
      </SearchWorldWrap>
      <BodyWrap>
        <FirstWrap>
          <FirstLeftWrap
            onMouseLeave={() => {
              setIsFold(true)
            }}
          >
            {list.map((z) => (
              <ZhiYeItem item={z} key={z.id} />
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
              <SplideSlide>
                <Image alt='header' src={imgUrl} width={684} height={364} />
              </SplideSlide>
              <SplideSlide>
                <Image alt='header' src={imgUrl} width={684} height={364} />
              </SplideSlide>
            </Splide>
          </FirstRightWrap>
        </FirstWrap>
        <PartTitle text='热招职位' />
        <Tabs list={rzTabs} active={rzActive} onClickItem={setRzActive} />
        <ReZhaoWrap>
          {rzList.map((rz) => (
            <ReZhaoItem key={rz.id} item={rz} />
          ))}
        </ReZhaoWrap>
        <Button
          css={{mt: 30, w: 200, h: 46, ml: '50%', fs: 14, transform: 'translate(-50%,0)'}}
          text='查看更多'
          onClick={() => {
            console.log('查看更多 ')
          }}
        />
        <PartTitle text='热门企业' />
        <ReZhaoWrap>
          {qyList.map((rz) => (
            <ReMenQiYeItem key={rz.id} item={rz} />
          ))}
        </ReZhaoWrap>
        <Button
          css={{mt: 10, w: 200, h: 46, ml: '50%', fs: 14, transform: 'translate(-50%,0)'}}
          text='查看更多'
          onClick={() => {
            console.log('查看更多 ')
          }}
        />
        <PartTitle text='职场资讯' />
        <Tabs list={zxTabs} active={zxActive} onClickItem={setZxActive} />
        <ReZhaoWrap>
          {zcList.slice(0, 3).map((rz) => (
            <ZhiChangItem key={rz.id} item={rz} />
          ))}
          {zcList.slice(3).map((rz) => (
            <ZhiChangLongItem key={rz.id} item={rz} />
          ))}
        </ReZhaoWrap>
        <Button
          css={{mt: 30, mb: 80, w: 200, h: 46, ml: '50%', fs: 14, transform: 'translate(-50%,0)'}}
          text='查看更多'
          onClick={() => {
            console.log('查看更多 ')
          }}
        />
      </BodyWrap>
    </Main>
  )
}
