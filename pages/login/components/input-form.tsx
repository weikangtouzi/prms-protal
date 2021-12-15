import {FormItemWrap, FormItemLabel} from './styled'

interface InProps {
  label: string
  css?: any
  children: any
}

export default function InputFormItem({label, css, children}: InProps) {
  return (
    <FormItemWrap css={css}>
      <FormItemLabel>{label}</FormItemLabel>
      {children}
    </FormItemWrap>
  )
}
