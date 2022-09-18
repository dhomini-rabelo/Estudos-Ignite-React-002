import { SaleActionsOptions } from './types'

export const SaleConsumer = {
  addQuantity(coffeeId: number) {
    return {
      type: SaleActionsOptions.ADD_QUANTITY_FOR_PRODUCT,
      payload: {
        id: coffeeId,
      },
    }
  },
  removeQuantity(coffeeId: number) {
    return {
      type: SaleActionsOptions.REMOVE_QUANTITY_FOR_PRODUCT,
      payload: {
        id: coffeeId,
      },
    }
  },
  removeProduct(coffeeId: number) {
    return {
      type: SaleActionsOptions.REMOVE_ALL_QUANTITY_FOR_PRODUCT,
      payload: {
        id: coffeeId,
      },
    }
  },
}
