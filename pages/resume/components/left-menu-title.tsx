import {useState, useEffect} from 'react'
import {VerticalDivider, Flex, RightBtn} from './styled'

interface LProps {
  title: string
  onEdit?: any
  children: any
  edit: boolean
  disabled?: boolean
}

export default function LeftMenuTitle({title, children, onEdit, edit = false, disabled = false}: LProps) {
  const [active, setActive] = useState(false)

  return (
    <Flex
      css={{
        flexDirection: 'column',
        p: '20px 20px 10px 20px',
        mt: 20,
        alignItems: 'flex-start',
        backgroundColor: active || edit ? '#F5F6F8' : '$w',
      }}
      onMouseMove={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
    >
      {edit ? null : (
        <Flex css={{alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
          <Flex css={{fw: 600}}>
            <VerticalDivider />
            {title}
          </Flex>
          {disabled ? null : (
            <RightBtn onClick={onEdit} css={{fs: 16}}>
              添加
            </RightBtn>
          )}
        </Flex>
      )}
      {children}
    </Flex>
  )
}
