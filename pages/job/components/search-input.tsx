import {useState, useEffect, useRef} from 'react'
import {Button} from '@/components/button'
import {Select} from '@/components/select'
import Icon from '@/components/icon'
import {InputWrap, InputFilterBtn, HangyeWrap, RealInput} from './styled'
import HYItem from './hy-item'

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

interface SProps {
	keyword: string,
	setKeyword: (_: string) => void,
  onClickSearch?: any
  list?: any[]
}

export default function SearchInput({keyword, setKeyword, onClickSearch, list = defaultList}: SProps) {
  const [active, setActive] = useState(false)
  const [openHy, setOpenHy] = useState(false)
  const [zwValue, setZwValue] = useState('')
  const [hyValue, setHyValue] = useState('')

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenHy(false)
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
    <InputWrap onClick={() => {
    	onClickSearch(keyword)
    }}>
      <RealInput
        css={{w: 660}}
        onFocus={() => {
          setActive(true)
        }}
        onBlur={() => {
          setActive(false)
        }}
        active={active}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='搜索职位、公司'
      />
      {/*<InputFilterBtn active={active}>
        |
        <Select
          placeholder='职位类型'
          css={{w: 'auto', border: 'none', pl: 20}}
          placeholderCss={{fs: 16, color: '#616A67', ff: '$fr'}}
          iconName='icon-icon_xialaxuanxiang2'
          value={zwValue}
          onSelect={setZwValue}
        />
      </InputFilterBtn>
      <InputFilterBtn
        ref={wrapperRef}
        onClick={() => {
          setOpenHy(true)
        }}
        active={active}
      >
        |&nbsp;&nbsp;&nbsp;&nbsp;{hyValue || '公司行业'}
        <Icon name='icon-icon_xialaxuanxiang2' />
        {openHy ? (
          <HangyeWrap>
            {list.map((li) => (
              <HYItem
                onClick={(e: any) => {
                  e.stopPropagation()
                  setHyValue(li.value)
                  setOpenHy(false)
                }}
                defaultActive={hyValue === li.value}
                key={li.key}
              >
                {li.value}
              </HYItem>
            ))}
          </HangyeWrap>
        ) : null}
      </InputFilterBtn>*/}
      <Button css={{w: 120, h: 54, mt: 0, borderRadius: 0}} text='搜索' />
    </InputWrap>
  )
}
