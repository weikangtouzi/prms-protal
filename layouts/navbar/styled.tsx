import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import {styled} from '@/stitches.config'

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
export const StyledContent = styled(DialogPrimitive.Content, {
  bg: '$w',
  borderRadius: 2,
  position: 'fixed',
  top: 278,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  w: 671,
  p: '23px 22px',
  '&:focus': {outline: 'none'},
})

export const StyledTitle = styled(DialogPrimitive.Title, {
  m: '37px 134px 40px 32px',
  display: 'flex',
  alignItems: 'flex-end',
})

export const StyledDescription = styled(DialogPrimitive.Description, {
  m: '10px 0 20px',
  color: '$primary',
  fontSize: 15,
  lineHeight: 1.5,
})

export const Dialog = Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = StyledContent
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose = DialogPrimitive.Close

const DropdownStyledContent = styled(DropdownMenuPrimitive.Content, {
  w: 140,
  fs: 16,
  fw: 400,
  pb: 22,
  bg: 'white',
  borderRadius: 2,
  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
})
const itemStyles = {
  all: 'unset',
  color: ' #616A67',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  h: 42,
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: 'gray',
    pointerEvents: 'none',
  },

  '&:focus': {
    bg: '$primary',
    color: '$w',
  },
}
const StyledItem = styled(DropdownMenuPrimitive.Item, {...itemStyles})
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {...itemStyles})
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {...itemStyles})
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    bg: '$primary',
    color: '$w',
  },
  ...itemStyles,
})
const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: 'balck',
})
const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  w: 100,
  h: 0,
  borderBottom: '1px dashed rgba(0,0,0,0.1)',
  m: '14px 20px',
})
const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'white',
})

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuContent = DropdownStyledContent
export const DropdownMenuItem = StyledItem
export const DropdownMenuCheckboxItem = StyledCheckboxItem
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
export const DropdownMenuRadioItem = StyledRadioItem
export const DropdownMenuItemIndicator = StyledItemIndicator
export const DropdownMenuTriggerItem = StyledTriggerItem
export const DropdownMenuLabel = StyledLabel
export const DropdownMenuSeparator = StyledSeparator
export const DropdownMenuArrow = StyledArrow
