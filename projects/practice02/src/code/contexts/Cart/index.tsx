import { createContext, ReactNode, useReducer } from 'react'
import { SaleContextType, SaleType } from './types'

export const SaleContext = createContext<SaleContextType>({} as SaleContextType)

export function SaleProvider({ children }: { children: ReactNode }) {
  const [sale, saleDispatch] = useReducer(
    (state: SaleType, action: any) => state,
    { products: [] },
  )
  return (
    <SaleContext.Provider value={{ sale }}>{children}</SaleContext.Provider>
  )
}
