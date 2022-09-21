import * as zod from 'zod'

export interface AddressSchemaType {
  zipCode: string
  city: string
  state: string
  district: string
  road: string
  complement: string
  number: string
}

export const AddressSchema = zod.object({
  zipCode: zod.string(),
  city: zod.string(),
  state: zod.string(),
  district: zod.string(),
  road: zod.string(),
  complement: zod.string(),
  number: zod.string(),
})
