import { CoffeeType } from '../../data/Coffees/types'

export interface ProductType extends CoffeeType {
  quantity: number
}

export interface SaleType {
  products: ProductType[]
}

export interface SaleContextType {
  sale: SaleType
}
