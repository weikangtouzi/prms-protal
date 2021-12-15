import {useState} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {ReMenQiYeItemWrap, ReZhaoZhiYe, ReZhaoArrayText, ReMenQiYeBtn} from './styled'

const ReMenQiYeItem = ({item, css}: any) => {
  const router = useRouter()
  const {img, name, needs = [], peopleNum, id} = item
  const [active, setActive] = useState(false)
  return (
    <ReMenQiYeItemWrap
      css={css}
      onClick={() => {
        console.log('click item')
        router.push(`/company/${id}`)
      }}
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      <Image className='image-4-radius image-shrink' src={img} width={70} height={70} alt='logo' />
      <ReZhaoZhiYe css={{fw: 400, mt: 20, mb: 10}} active={active}>
        {name}
      </ReZhaoZhiYe>
      <ReZhaoArrayText>
        {needs.map((n: string, idx: number) => (
          <span key={n}>
            {n}
            {idx === needs.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
          </span>
        ))}
      </ReZhaoArrayText>
      <ReMenQiYeBtn
        onClick={(e: any) => {
          e.stopPropagation()
          console.log('click btn')
          router.push({
            pathname: '/company/' + id,
            query: {
              tab: 'zhaopin',
            },
          })
        }}
      >
        <ReZhaoZhiYe css={{fw: 400}} active>
          {peopleNum}&nbsp;
        </ReZhaoZhiYe>
        个热招职位
      </ReMenQiYeBtn>
    </ReMenQiYeItemWrap>
  )
}

export default ReMenQiYeItem
