import * as zod from 'zod'

export interface AddressSchemaType {
  zipCode: string
  city: string
  state: string
  district: string
  road: string
  complement: string | undefined
  number: string
}

export const AddressSchema = zod.object({
  zipCode: zod
    .string()
    .length(9, 'Formato inválido para de CEP, use 00000-000.'),
  city: zod.string(),
  state: zod.string().length(2, 'UF precisa ter 2 caracteres.'),
  district: zod.string(),
  road: zod.string(),
  complement: zod.string().optional(),
  number: zod.string(),
})
