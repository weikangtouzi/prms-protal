import * as DialogPrimitive from '@radix-ui/react-dialog'
import {styled} from '@/stitches.config'
import Icon from '../icon'

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  bg: 'rgba(0,0,0,0.6)',
  position: 'fixed',
  zIndex: 10,
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
  borderRadius: 10,
  position: 'fixed',
  top: 425,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  w: 639,
  h: 575,
  pt: 40,
  color: '#3C4441',
  textAlign: 'center',
  ff: '$fr',
  '&:focus': {outline: 'none'},
  zIndex: 11,
})

const StyledTitle = styled(DialogPrimitive.Title, {
  display: 'flex',
  alignItems: 'center',
  // flexDirection: 'column',
  position: 'absolute',
  right: 22,
  top: '-5px',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
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
  children: any
  open: boolean
  onOpenChange: (o: boolean) => void
  dialogCss?: any
  hasCloseIcon?: boolean
  onClose: (c: boolean) => void
  titleCss?: any
}

export function CloseDialog({
  hasCloseIcon = true,
  title,
  children,
  open,
  onOpenChange,
  dialogCss,
  titleCss,
  onClose,
}: IProps) {
  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <DialogContent
        css={dialogCss}
        onOpenAutoFocus={(e) => {
          e.preventDefault()
        }}
        onPointerDownOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogTitle>
          {hasCloseIcon ? (
            <Icon onClick={onClose} withClassName={false} css={{size: 27}} name='icon-icon_guanbi' />
          ) : null}
        </DialogTitle>
        <TitledText css={titleCss}>{title}</TitledText>
        {children}
      </DialogContent>
    </Dialog>
  )
}
