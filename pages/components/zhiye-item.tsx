import {useState} from 'react'
import {ZhiYeItems, ZhiYeItemsWrapLeft, ItemsHead, ItemRightText, ZhiYeItemsRight, Flex, BottomLine} from './styled'
import Icon from '@/components/icon'

const ZhiYeItem = ({item}: any) => {
  const {title, rightText = [], details = []} = item
  const [over, setOver] = useState(false)

  return (
    <ZhiYeItems
      onMouseOver={() => {
        setOver(true)
      }}
      onMouseLeave={() => {
        setOver(false)
      }}
    >
      <ZhiYeItemsWrapLeft>
        <ItemsHead active={over}>{title}&nbsp;&nbsp;|&nbsp;&nbsp;</ItemsHead>
        {rightText.map((r: string) => (
          <ItemRightText active={over} key={r}>
            {r}
          </ItemRightText>
        ))}
      </ZhiYeItemsWrapLeft>
      {over ? <Icon name='icon-icon_xialaxuanxiang-copy' /> : <Icon name='icon-icon_xialaxuanxiang' />}
      {over ? (
        <ZhiYeItemsRight>
          <ItemsHead>{title}</ItemsHead>
          {details.map((d: any, index: number) => (
            <Flex css={{mt: 15}} key={d.left}>
              <ItemRightText css={{ml: 0, w: 94}} active={false}>
                {d.left}
              </ItemRightText>
              <Flex css={{flexDirection: 'column'}}>
                <Flex css={{flexWrap: 'wrap'}}>
                  {d.children.map((c: string) => (
                    <ItemRightText active={false} css={{color: '#3C4441', mb: 20}} key={c}>
                      {c}
                    </ItemRightText>
                  ))}
                </Flex>
                {index === details.length - 1 ? null : <BottomLine />}
              </Flex>
            </Flex>
          ))}
        </ZhiYeItemsRight>
      ) : null}
    </ZhiYeItems>
  )
}

export default ZhiYeItem
