import {useState} from 'react'
import {useRouter} from 'next/router'
import {ZhiYeItems, ZhiYeItemsWrapLeft, ZhiYeItemsLeftListContainer, ItemsHead, ItemRightText, ZhiYeItemsRight, Flex, BottomLine} from './styled'
import Icon from '@/components/icon'

const ZhiYeItem = ({item, isFold}: any) => {
	const router = useRouter()
  const {title, sublist = []} = item
  const [over, setOver] = useState(false)

  return (
    <ZhiYeItems
    	css={{ zIndex: (!isFold || over) ? 1 : 0 }}
      onMouseOver={() => {
        setOver(true)
      }}
      onMouseLeave={() => {
        setOver(false)
      }}
    >
      <ZhiYeItemsWrapLeft>
        <ItemsHead active={over}>{title}&nbsp;&nbsp;|&nbsp;&nbsp;</ItemsHead>
        <ZhiYeItemsLeftListContainer>
	        {sublist.map((r: string, index: number) => (
	          <ItemRightText active={over} key={index}>
	            {r.title}
	          </ItemRightText>
	        ))}
        </ZhiYeItemsLeftListContainer>
        {over ? <Icon name='icon-icon_xialaxuanxiang-copy' /> : <Icon name='icon-icon_xialaxuanxiang' />}
      </ZhiYeItemsWrapLeft>
      {over ? (
        <ZhiYeItemsRight>
          <ItemsHead>{title}</ItemsHead>
          {item.sublist.map((d: any, index: number) => (
            <Flex css={{mt: 15}} key={index}>
              <ItemRightText css={{ml: 0, w: 94}} active={false}>
                {d.title}
              </ItemRightText>
              <Flex css={{flexDirection: 'column'}}>
                <Flex css={{flexWrap: 'wrap'}}>
                  {d.sublist.map((c: string, index: number) => (
                    <ItemRightText active={false} css={{color: '#3C4441', mb: 20, cursor: 'pointer'}} key={index} onClick={() => {
                    	router.push(`/job?category=${c.title}`)
                    }}>
                      {c.title}
                    </ItemRightText>
                  ))}
                </Flex>
                {index === item.sublist.length - 1 ? null : <BottomLine />}
              </Flex>
            </Flex>
          ))}
        </ZhiYeItemsRight>
      ) : null}
    </ZhiYeItems>
  )
}

export default ZhiYeItem
