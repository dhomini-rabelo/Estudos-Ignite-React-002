import { createContext, ReactNode, useReducer } from 'react'
import { SaleReducer } from './reducer'
import { SaleContextType } from './types'

export const SaleContext = createContext<SaleContextType>({} as SaleContextType)

export function SaleProvider({ children }: { children: ReactNode }) {
  const [sale, saleDispatch] = useReducer(SaleReducer, { products: [] })
  return (
    <SaleContext.Provider value={{ sale }}>{children}</SaleContext.Provider>
  )
}
