import {styled} from '@/stitches.config'

const ButtonStyled = styled('button', {
  h: 64,
  w: '100%',
  mt: 40,
  borderRadius: '2px',
  fs: 18,
  fw: 400,
  ff: '$fr',
  color: '$w',
  bg: '$primary',
  border: '1px solid $primary',
  cursor: 'pointer',
  userSelect: 'none',
  variants: {
    disabled: {
      true: {opacity: 0.2},
      false: {},
    },
  },
})

interface IProps {
  text: any
  onClick?: (e: any) => void
  css?: any
  disabled?: boolean
}

export function Button({text, onClick = () => {}, css, disabled = false}: IProps) {
  return (
    <ButtonStyled css={css} disabled={disabled} onClick={disabled ? () => {} : onClick}>
      {text}
    </ButtonStyled>
  )
}
