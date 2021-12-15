import {styled} from '@/stitches.config'

const TabWrap = styled('div', {
  w: 1184,
  h: 60,
  bg: '$w',
  m: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  pt: 17,
  fs: 18,
})

const TabItem = styled('div', {
  userSelect: 'none',
  variants: {
    active: {
      true: {
        color: '$primary',
        fw: 600,
        ff: '$system',
      },
      false: {
        color: '#616A67',
        fw: 400,
        ff: '$fr',
      },
    },
  },
})

const TabBottomLine = styled('div', {
  h: 2,
  mt: 16,
  variants: {
    active: {
      true: {
        bg: '$primary',
      },
      false: {
        bg: '$w',
      },
    },
  },
})

export const Tabs = ({
  css = {},
  list,
  active,
  onClickItem,
}: {
  css?: any
  list: string[]
  active: number
  onClickItem: (e: any) => void
}) => {
  return (
    <TabWrap css={css}>
      {list.map((l, idx) => (
        <TabItem
          active={idx === active}
          onClick={() => {
            onClickItem(idx)
          }}
          key={l}
        >
          {l}
          <TabBottomLine active={idx === active} />
        </TabItem>
      ))}
    </TabWrap>
  )
}
