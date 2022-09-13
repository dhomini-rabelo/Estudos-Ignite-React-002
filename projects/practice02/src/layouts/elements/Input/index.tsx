import { InputHTMLAttributes } from 'react'
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
