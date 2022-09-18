import { CoffeeType } from '../../data/Coffees/types'

export interface ProductType extends CoffeeType {
  quantity: number
}

export interface SaleType {
  products: ProductType[]
}

export interface SaleContextType {
  sale: SaleType
  actions: {
    addQuantityForProduct: (coffeeId: number) => void
    removeQuantityForProduct: (coffeeId: number) => void
    removeProductFromCart: (coffeeId: number) => void
  }
}
