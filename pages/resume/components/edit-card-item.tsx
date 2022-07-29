import {useState, useEffect} from 'react'
import {Flex, RightBtn} from './styled'

interface LProps {
  onEdit?: any
  onDelete?: any
  children: any
  css?: any
}

export default function EditCardItem({onDelete, onEdit, children, css = {}, disabled=false}: LProps) {
  const [active, setActive] = useState(false)

  return (
    <Flex
      css={{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        bg: '$w',
        w: '100%',
        boxShadow: active ? '0px 4px 10px 0px rgba(0, 0, 0, 0.1)' : 'none',
        p: '10px 18px 10px 12px',
        ...css,
      }}
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      {children}
      {(!disabled && active) ? (
        <Flex>
          {onEdit ? (
            <RightBtn onClick={onEdit} css={{fs: 16, mr: 10}}>
              编辑
            </RightBtn>
          ) : null}
          {onDelete ? (
            <RightBtn onClick={onEdit} css={{fs: 16}}>
              删除
            </RightBtn>
          ) : null}
        </Flex>
      ) : null}
    </Flex>
  )
}
