import { ProductType, SaleType } from '../types'
import { SaleActionParamType, SaleActionsOptions } from './types'

export function SaleReducer(
  state: SaleType,
  action: SaleActionParamType,
): SaleType {
  switch (action.type) {
    case SaleActionsOptions.ADD_PRODUCT:
      return {
        products: [
          ...state.products,
          { ...action.payload.newCoffee, quantity: 1 },
        ],
      }
    case SaleActionsOptions.ADD_QUANTITY_FOR_PRODUCT: {
      const newProductsList = state.products.map((product: ProductType) => {
        if (product.id === action.payload.id) {
          const newProductQuantity = product.quantity + 1
          return { ...product, quantity: newProductQuantity }
        }
        return product
      })
      return {
        products: newProductsList,
      }
    }
  }
}
