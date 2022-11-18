import {useState} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {
  ReZhaoItemWrap,
  ReZhaoFirstLine,
  ReZhaoZhiYe,
  ReZhaoPrice,
  ReZhaoArrayText,
  ReZhaoBottomPart,
  ReZhaoBottomRightPart,
} from './styled'
import { reformComFinancing, reformCompanySize, reformEducationLevel, reformSalary } from '@/utils/utils'

const ReZhaoItem = ({item}: any) => {
	const router = useRouter()
  const {zy, price, needs = [ item.min_experience <= 0 ? '无经验要求' : `${item.min_experience}年及以上`, item?.address_description?.[4], reformEducationLevel(item.min_education)].filter(x => x), companyImg, companyName, companyNeeds = [reformComFinancing(item.comp_financing), reformCompanySize(item.comp_size)].filter(x => x)} = item
  const [active, setActive] = useState(false)
  return (
    <ReZhaoItemWrap
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
      onClick={() => {
      	router.push(`/job/${item.id ?? item.job_id}`)
      }}
    >
      <ReZhaoFirstLine>
        <ReZhaoZhiYe active={active}>{item.title}</ReZhaoZhiYe>
        <ReZhaoPrice>{reformSalary([item.min_salary, item.max_salary])}</ReZhaoPrice>
      </ReZhaoFirstLine>
      <ReZhaoArrayText>
        {needs.map((n: string, idx: number) => (
          <span key={n}>
            {n}
            {idx === needs.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
          </span>
        ))}
      </ReZhaoArrayText>
      <ReZhaoBottomPart>
        <img src={item?.logo ?? ''} alt='ht' width={48} height={48} />
        <ReZhaoBottomRightPart>
          <ReZhaoArrayText css={{fs: 16, color: '#3C4441', mb: 5}}>{item.comp_name}</ReZhaoArrayText>
          <ReZhaoArrayText>
            {companyNeeds.map((n: string, idx: number) => (
              <span key={n}>
                {n}
                {idx === companyNeeds.length - 1 ? null : <span>&nbsp;|&nbsp;</span>}
              </span>
            ))}
          </ReZhaoArrayText>
        </ReZhaoBottomRightPart>
      </ReZhaoBottomPart>
    </ReZhaoItemWrap>
  )
}

export default ReZhaoItem
