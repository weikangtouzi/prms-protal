import {VerticalDivider, Flex, RightBtn} from './styled'

interface LProps {
  title: string
  onEdit?: any
  children: any
  edit: boolean
  disabled?: boolean
}

export default function LeftMenuTitle({title, children, onEdit, edit = false, disabled = false}: LProps) {
  return (
    <>
      {edit ? null : (
        <Flex css={{alignItems: 'center', justifyContent: 'space-between', mt: 40, p: '0 20px'}}>
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
    </>
  )
}
