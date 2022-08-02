import {useState} from 'react'
import {styled} from '@/stitches.config'

const Container = styled('div', {
  position: 'relative',
  p: '0px 26px',
  borderRadius: '2px',
  display: 'flex',
  mt: 40,
  h: 64,
  alignItems: 'center',
  variants: {
    active: {
      true: {
        border: '1px solid $primary',
      },
      false: {
        border: '1px solid rgba(0,0,0,0.2)',
      },
    },
  },
  zIndex: 2,
})

const Input = styled('input', {
  border: 'none',
  outline: 'none',
  fs: 18,
  ml: 26,
  w: 'calc(100% - 72px)',
  '&::placeholder': {
    fw: 400,
    opacity: 0.2,
    ff: '$fr',
  },
})

const TextArea = styled('textarea', {
  border: 'none',
  outline: 'none',
  fs: 18,
  ml: 26,
  w: 'calc(100% - 72px)',
  '&::placeholder': {
    fw: 400,
    opacity: 0.2,
    ff: '$fr',
  },
})

const ErrDiv = styled('div', {
  color: '$dangerous',
  fs: 14,
  position: 'absolute',
  bottom: -25,
  left: 0,
  fw: 400,
  ff: '$fr',
})

const IconWrap = styled('div', {
  flexShrink: 0,
})

interface IProps {
  err?: any
  value?: string
  placeholder?: string
  icon?: any
  onChange?: (e: any) => void
  type?: string
  size?: string
  css?: any
  inputCss?: any
}

export function TextField({
  err = '',
  value = '',
  type = 'text',
  placeholder = '',
  icon = null,
  onChange,
  size = 'normal',
  css = {},
  inputCss = {},
}: IProps) {
  const [active, setActive] = useState(false)
  if (type === 'textarea') {
    return (
      <Container css={{h: 42, mt: 0, p: 20, w: 420, ...css}} active={active}>
        <TextArea
          css={{pl: 0, ml: 20, w: '100%'}}
          onFocus={() => {
            setActive(true)
          }}
          onBlur={() => {
            setActive(false)
          }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <ErrDiv>{err}</ErrDiv>
      </Container>
    )
  }
  if (size === 'small') {
    return (
      <Container css={{h: 42, mt: 0, p: 0, w: 420, ...css}} active={active}>
        <Input
          css={{pl: 0, ml: 20, w: '100%'}}
          type={type}
          onFocus={() => {
            setActive(true)
          }}
          onBlur={() => {
            setActive(false)
          }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <ErrDiv>{err}</ErrDiv>
      </Container>
    )
  }

  return (
    <Container css={css} active={active}>
      <IconWrap>{icon}</IconWrap>
      <Input
        css={inputCss}
        type={type}
        onFocus={() => {
          setActive(true)
        }}
        onBlur={() => {
          setActive(false)
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ErrDiv>{err}</ErrDiv>
    </Container>
  )
}
