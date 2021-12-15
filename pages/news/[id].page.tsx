import Image from 'next/image'
import {Main} from '../components/styled'
import {styled} from '@/stitches.config'

const Flex = styled('div', {
  display: 'flex',
})

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
const companyName = '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保障事业发展》'
const companyText =
  '为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》为持续推动全市人力资源和社会保障事业高质量发展，依据《粤港澳大湾区发展规划纲要》'

const list = [
  {
    id: '1',
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保征求《深圳市人力资源和社会保障事业发展障征求《深圳市人力资源和社会保障事业发展事业发展',
    writer: '作者名称 · 2021-10-01',
  },
  {
    id: '2',
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保征求《深圳市人力资源和社会保障事业发展障征求《深圳市人力资源和社会保障事业发展事业发展',
    writer: '作者名称 · 2021-10-01',
  },
  {
    id: '3',
    title:
      '深圳人力资源和社会保障局关于公开征求《深圳市人力资源和社会保征求《深圳市人力资源和社会保障事业发展障征求《深圳市人力资源和社会保障事业发展事业发展',
    writer: '作者名称 · 2021-10-01',
  },
]

export default function NewsDetail() {
  return (
    <Main css={{pt: 16, bg: '#F5F6F8'}}>
      <Flex>
        <Flex css={{w: 884, flexDirection: 'column'}}>
          <Flex css={{bg: '$w', p: 40, flexDirection: 'column'}}>
            <Flex css={{flexDirection: 'column', borderBottom: '1px dashed rgba(0,0,0,0.1)', mb: 19}}>
              <Flex css={{fs: 30, fw: 600, color: '#3C4441', mb: 10, lineHeight: '42px'}}>{companyName}</Flex>
              <Flex css={{color: '#3C4441', fs: 16, mb: 20, ff: '$fr', lineHeight: '28px'}}>{companyText}</Flex>
            </Flex>
            <Flex css={{justifyContent: 'space-between'}}>
              <Flex css={{color: '#3C4441', fs: 16, ff: '$fr'}}>资讯分类名称</Flex>
              <Flex css={{color: '#3C4441', fs: 16, ff: '$fr'}}>作者名称 · 2021-10-01</Flex>
            </Flex>
          </Flex>
          <Flex
            css={{
              p: 40,
              bg: '$w',
              mt: 16,
              mb: 114,
              color: '#3C4441',
              ff: '$fr',
              whiteSpace: 'break-spaces',
              lineHeight: '30px',
              flexDirection: 'column',
            }}
          >
            {companyName}
            <Flex css={{mt: 20, mb: 20}}>
              <Image src={imgUrl} width={804} height={350} alt='h' />
            </Flex>
            {companyText}
          </Flex>
        </Flex>
        <Flex css={{w: 284, ml: 16, flexDirection: 'column'}}>
          <Flex css={{bg: '$w', p: '20px 20px 30px 20px', flexDirection: 'column'}}>
            <Flex css={{fs: 24, mb: 34, color: '#3C4441', fw: 600, lineHeight: '32px'}}>作者介绍</Flex>
            <Flex css={{alignItems: 'center', flexDirection: 'column'}}>
              <Image className='use-image-round' alt='h' width={100} height={100} src={imgUrl} />
              <Flex css={{mt: 15, color: '#3C4441', fs: 18, fw: 600, mb: 10, lineHeight: '25px'}}>陈小小</Flex>
              <Flex css={{color: '#616A67', fs: 18, ff: '$fr', lineHeight: '25px'}}>高级产品经理</Flex>
            </Flex>
          </Flex>
          <Flex css={{mt: 16, bg: '$w', p: 20, flexDirection: 'column'}}>
            <Flex css={{fs: 24, color: '#3C4441', fw: 600, lineHeight: '32px'}}>相关资讯</Flex>

            {list.map((li, idx) => (
              <Flex
                css={{
                  flexDirection: 'column',
                  borderBottom: idx === list.length - 1 ? 'none' : '1px dashed rgba(0,0,0,0.1)',
                }}
                key={li.id}
              >
                <Flex
                  css={{
                    color: '#3C4441',
                    fw: 600,
                    fs: 18,
                    mt: 20,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    '-webkit-line-clamp': 3,
                    '-webkit-box-orient': 'vertical',
                  }}
                >
                  {li.title}
                </Flex>
                <Flex css={{color: '#616A67', fs: 16, mt: 10, mb: 19}}>{li.writer}</Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Main>
  )
}
