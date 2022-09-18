import { CoffeeType } from '../../data/Coffees/types'

export interface ProductType extends CoffeeType {
  quantity: number
}

/* eslint-disable */
export enum PaymentMethods {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  MONEY = 'MONEY',
}
/* eslint-enable */

export interface SaleType {
  products: ProductType[]
  paymentMethod: PaymentMethods | null
}

export interface SaleContextType {
  sale: SaleType
  actions: {
    addQuantityForProduct: (coffeeId: number) => void
    removeQuantityForProduct: (coffeeId: number) => void
    removeProductFromCart: (coffeeId: number) => void
    setPaymentMethod: (paymentMethod: PaymentMethods) => void
  }
}
