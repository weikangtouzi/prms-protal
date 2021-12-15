import Image from 'next/image'
import {ZhiChangLongItemWrap, ZCRightWrap, ReZhaoZhiYe, ReZhaoArrayText} from './styled'

const ZhiChangLongItem = ({item}: any) => {
  const {img, title, content, writer, time} = item
  return (
    <ZhiChangLongItemWrap>
      <Image className='image-shrink' src={img} width={342} height={140} alt='logo' />
      <ZCRightWrap>
        <div>
          <ReZhaoZhiYe
            css={{
              mb: 8,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              '-webkit-line-clamp': 2,
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
            }}
          >
            {title}
          </ReZhaoZhiYe>
          <ReZhaoArrayText
            css={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              '-webkit-line-clamp': 3,
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              mb: 15,
            }}
          >
            {content}
          </ReZhaoArrayText>
        </div>
        <ReZhaoArrayText css={{color: 'rgba(0,0,0,0.3)'}}>
          {writer}·{time}
        </ReZhaoArrayText>
      </ZCRightWrap>
    </ZhiChangLongItemWrap>
  )
}

export default ZhiChangLongItem
