import { createContext, ReactNode, useReducer } from 'react'
import { Coffees } from '../../data/Coffees'
import { CoffeeType } from '../../data/Coffees/types'
import { SaleReducer } from './reducer'
import { SaleContextType } from './types'

export const SaleContext = createContext<SaleContextType>({} as SaleContextType)

export function SaleProvider({ children }: { children: ReactNode }) {
  const [sale, saleDispatch] = useReducer(SaleReducer, {
    products: Coffees.map((coffee: CoffeeType) => ({ ...coffee, quantity: 0 })),
  })
  return (
    <SaleContext.Provider value={{ sale }}>{children}</SaleContext.Provider>
  )
}
