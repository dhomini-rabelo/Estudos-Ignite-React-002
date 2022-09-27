import { createContext, ReactNode, useReducer } from 'react'
import { Coffees } from '../../data/Coffees'
import { CoffeeType } from '../../data/Coffees/types'
import { AddressSchemaType } from '../../schemas/address'
import { SaleReducer } from './reducer'
import { SaleConsumer } from './reducer/actions'
import { PaymentMethods, SaleContextType } from './types'

export const SaleContext = createContext<SaleContextType>({} as SaleContextType)

export function SaleProvider({ children }: { children: ReactNode }) {
  const [sale, saleDispatch] = useReducer(SaleReducer, {
    products: Coffees.map((coffee: CoffeeType) => ({ ...coffee, quantity: 0 })),
    paymentMethod: null,
    address: {
      zipCode: '',
      city: '',
      state: '',
      district: '',
      road: '',
      complement: '',
      number: '',
    },
  })

  function addQuantityForProduct(coffeeId: number) {
    saleDispatch(SaleConsumer.addQuantity(coffeeId))
  }

  function removeQuantityForProduct(coffeeId: number) {
    saleDispatch(SaleConsumer.removeQuantity(coffeeId))
  }

  function removeProductFromCart(coffeeId: number) {
    saleDispatch(SaleConsumer.removeProduct(coffeeId))
  }

  function setPaymentMethod(paymentMethod: PaymentMethods) {
    saleDispatch(SaleConsumer.setPaymentMethod(paymentMethod))
  }

  function setAddress(address: AddressSchemaType) {
    saleDispatch(SaleConsumer.setAddress(address))
  }

  function clearSale() {
    saleDispatch(SaleConsumer.clearSale())
  }

  return (
    <SaleContext.Provider
      value={{
        sale,
        actions: {
          addQuantityForProduct,
          removeQuantityForProduct,
          removeProductFromCart,
          setPaymentMethod,
          setAddress,
          clearSale,
        },
      }}
    >
      {children}
    </SaleContext.Provider>
  )
}
