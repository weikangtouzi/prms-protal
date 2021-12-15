import {useState, useEffect, useRef} from 'react'
import {styled} from '@/stitches.config'
import Icon from '../icon'

const Container = styled('div', {
  h: 42,
  w: 220,
  borderRadius: '2px',
  fs: 18,
  fw: 400,
  ff: '$fr',
  color: '#3C4441',
  bg: '$w',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  pl: 20,
  position: 'relative',
})

const PlaceHolderText = styled('div', {
  color: 'rgba(0, 0, 0, 0.1)',
})

interface IProps {
  placeholder?: string
  placeholderCss?: any
  list?: any[]
  css?: any
  value?: any
  onSelect?: any
  iconName?: string
  valueCloseable?: boolean
}

const defaultList = [
  {
    key: 'nolimit',
    value: '不限',
  },
  {
    key: 'gaoji',
    value: '高级管理',
  },
  {
    key: 'jishu',
    value: '技术',
  },
  {
    key: 'cp',
    value: '产品',
    children: [
      {
        key: 'cpjl',
        value: '产品经理',
      },
      {
        key: 'gjcpzw',
        value: '高级高端产品职位',
      },
      {
        key: 'qt',
        value: '其他产品职位',
      },
    ],
  },
  {
    key: 'sj',
    value: '设计',
  },
  {
    key: 'yy',
    value: '运营',
  },
  {
    key: 'cxy',
    value: '程序员',
  },
  {
    key: 'boss',
    value: '老板',
  },
]

const OpenWrap = styled('div', {
  position: 'absolute',
  bottom: -278,
  left: 0,
  display: 'flex',
})
const OpenListWrap = styled('div', {
  w: 180,
  h: 272,
  overflowY: 'scroll',
  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  zIndex: 20,
  borderRight: '1px solid #8C9693',
  bg: '$w',
})

const CloseableValueWrap = styled('div', {
  color: '$primary',
  fw: 600,
  display: 'flex',
  alignItems: 'center',
})

const OpenItem = styled('div', {
  w: 180,
  h: 42,
  color: '#616A67',
  pl: 20,
  pt: 10,
  pb: 10,
  variants: {
    active: {
      true: {
        bg: '#F2F7F5',
      },
      false: {
        bg: '$w',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export function Select({
  placeholder = '请选择',
  list = defaultList,
  placeholderCss = {},
  value,
  valueCloseable = false,
  onSelect,
  css,
  iconName = 'icon-icon_xialaxuanxiang',
}: IProps) {
  const [open, setOpen] = useState(false)
  const [firstSelected, setFirstSelected] = useState<any>()
  const [secondSelected, setSecondSelected] = useState<any>()
  const [secondList, setSecondList] = useState<any[]>([])

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <Container
      ref={wrapperRef}
      css={css}
      onClick={() => {
        setOpen(true)
      }}
    >
      {value ? (
        valueCloseable ? (
          <CloseableValueWrap>
            <Icon
              onClick={(e: any) => {
                e.stopPropagation()
                onSelect('')
              }}
              name='icon-icon_guanbi'
            />
            {value.value}
          </CloseableValueWrap>
        ) : (
          value.value
        )
      ) : null}
      {value ? null : <PlaceHolderText css={placeholderCss}>{placeholder}</PlaceHolderText>}
      <Icon name={iconName} />
      {open ? (
        <OpenWrap>
          <OpenListWrap>
            {list.map((l) => (
              <OpenItem
                active={firstSelected && firstSelected.key === l.key}
                onClick={(e) => {
                  e.stopPropagation()

                  if (l.children && l.children.length > 0) {
                    setSecondList(l.children)
                    setFirstSelected(l)
                  } else {
                    setSecondList([])
                    setFirstSelected(l)
                    setSecondSelected('')
                    setOpen(false)
                    onSelect(l)
                  }
                }}
                key={l.key}
              >
                {l.value}
              </OpenItem>
            ))}
          </OpenListWrap>
          {secondList.length > 0 ? (
            <OpenListWrap>
              {secondList.map((sc) => (
                <OpenItem
                  active={secondSelected && secondSelected.key === sc.key}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSecondSelected(sc)
                    onSelect(sc)
                    setOpen(false)
                  }}
                  key={sc.key}
                >
                  {sc.value}
                </OpenItem>
              ))}
            </OpenListWrap>
          ) : null}
        </OpenWrap>
      ) : null}
    </Container>
  )
}
