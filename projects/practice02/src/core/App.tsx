import { SaleProvider } from '../code/contexts/Cart'
import './global.style.css'
import { RoutesController } from './router'

export function App() {
  return (
    <SaleProvider>
      <RoutesController />
    </SaleProvider>
  )
}
