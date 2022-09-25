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
  zipCode: zod.string().length(9),
  city: zod.string(),
  state: zod.string().length(2),
  district: zod.string(),
  road: zod.string(),
  complement: zod.string().optional(),
  number: zod.string(),
})
