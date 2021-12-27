import Image from 'next/image'
import {ZhiChangItemWrap, ReZhaoZhiYe, ReZhaoArrayText} from './styled'

const ZhiChangItem = ({item}: any) => {
  const {img, title, content, writer, time, id} = item
  return (
    <a href={`/news/${id}`} target='_blank' rel='noreferrer'>
      <ZhiChangItemWrap>
        <Image src={img} width={342} height={140} alt='logo' />
        <ReZhaoZhiYe
          css={{
            mt: 10,
            mb: 10,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            '-webkit-line-clamp': 2,
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
          }}
        >
          {title}
        </ReZhaoZhiYe>
        <ReZhaoArrayText css={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', mb: 20}}>
          {content}
        </ReZhaoArrayText>
        <ReZhaoArrayText css={{color: 'rgba(0,0,0,0.3)'}}>
          {writer}·{time}
        </ReZhaoArrayText>
      </ZhiChangItemWrap>
    </a>
  )
}

export default ZhiChangItem
