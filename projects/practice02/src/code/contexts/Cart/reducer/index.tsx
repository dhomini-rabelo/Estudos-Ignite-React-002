import produce from 'immer'
import { Coffees } from '../../../data/Coffees'
import { CoffeeType } from '../../../data/Coffees/types'
import { ProductType, SaleType } from '../types'
import { SaleActionParamType, SaleActionsOptions } from './types'

export function SaleReducer(
  state: SaleType,
  action: SaleActionParamType,
): SaleType {
  switch (action.type) {
    case SaleActionsOptions.ADD_QUANTITY_FOR_PRODUCT:
      return produce(state, (draft) => {
        draft.products[
          getProductIndexById(action.payload.id, state.products)
        ].quantity += 1
      })
    case SaleActionsOptions.REMOVE_QUANTITY_FOR_PRODUCT:
      return produce(state, (draft) => {
        draft.products[
          getProductIndexById(action.payload.id, state.products)
        ].quantity -= 1
      })
    case SaleActionsOptions.REMOVE_ALL_QUANTITY_FOR_PRODUCT:
      return produce(state, (draft) => {
        draft.products[
          getProductIndexById(action.payload.id, state.products)
        ].quantity = 0
      })
    case SaleActionsOptions.SET_PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.paymentMethod
      })
    case SaleActionsOptions.SET_ADDRESS:
      return produce(state, (draft) => {
        draft.address = action.payload.address
      })
    case SaleActionsOptions.CLEAR_SALE:
      return produce(state, (draft) => {
        draft.products = Coffees.map((coffee: CoffeeType) => ({
          ...coffee,
          quantity: 0,
        }))
        draft.paymentMethod = null
      })
  }

  function getProductIndexById(id: number, products: ProductType[]) {
    const index = products.findIndex(
      (product: ProductType) => product.id === id,
    )

    if (index === -1) {
      throw new Error('Id not exists in product list')
    }

    return index
  }
}
