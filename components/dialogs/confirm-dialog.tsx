import * as DialogPrimitive from '@radix-ui/react-dialog'
import {styled} from '@/stitches.config'
import {Button} from '../button'
import Icon from '../icon'

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  bg: 'rgba(0,0,0,0.6)',
  position: 'fixed',
  inset: 0,
})

function Root({children, ...props}: any) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  )
}
const StyledContent = styled(DialogPrimitive.Content, {
  bg: '$w',
  borderRadius: 2,
  position: 'fixed',
  top: 278,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  w: 512,
  h: 238,
  p: '94px 62px 0',
  color: '#3C4441',
  textAlign: 'center',
  ff: '$fr',
  '&:focus': {outline: 'none'},
  zIndex: 11,
})

const StyledTitle = styled(DialogPrimitive.Title, {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'absolute',
  top: '2px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  w: '100%',
})

const TitledText = styled('div', {
  fs: 26,
  fw: 600,
  color: 'black',
})

const Dialog = Root
const DialogContent = StyledContent
const DialogTitle = StyledTitle

interface IProps {
  title: string
  bodyText: any
  open: boolean
  onOpenChange: (o: boolean) => void
  iconName?: string
  hideBtns?: boolean
  css?: any
}

export function ConfirmDialog({
  title,
  bodyText,
  open,
  onOpenChange,
  css,
  iconName = 'icon-icon_gantanhao',
  hideBtns = false,
}: IProps) {
  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <DialogContent
        css={css}
        onOpenAutoFocus={(e) => {
          e.preventDefault()
        }}
        onPointerDownOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogTitle>
          <Icon css={{size: 70, mb: 13}} withClassName={false} name={iconName} />
          <TitledText>{title}</TitledText>
        </DialogTitle>
        {bodyText}
        {hideBtns ? null : (
          <div>
            <Button
              onClick={() => {
                onOpenChange(false)
              }}
              css={{
                mt: 20,
                mr: 40,
                w: 120,
                h: 46,
                bg: '$w',
                color: '#3C4441',
                border: '1px solid rgba(0, 0, 0, 0.2)',
              }}
              text='取消'
            />
            <Button
              css={{mt: 20, w: 120, h: 46}}
              text='确定'
              onClick={() => {
                console.log('queding')
                onOpenChange(true)
              }}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
