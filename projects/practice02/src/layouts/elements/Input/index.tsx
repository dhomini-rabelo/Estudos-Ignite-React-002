import { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import { Input } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  extraClasses?: string
}

export function form({ extraClasses = '', ...attributes }: Props) {
  return (
    <Input.form
      className={`bg-Gray-300 rounded text-sm leading-tight placeholder:text-Black-100 p-3 text-Black-300 ${extraClasses}`}
      {...attributes}
    />
  )
}

export function CepMaskInput({ extraClasses = '', ...attributes }: Props) {
  return (
    <InputMask
      mask="99999 999"
      maskChar=" "
      className={`bg-Gray-300 rounded text-sm leading-tight placeholder:text-Black-100 p-3 text-Black-300 input-default ${extraClasses}`}
      {...attributes}
    />
  )
}
