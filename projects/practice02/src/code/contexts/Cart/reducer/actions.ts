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
}
