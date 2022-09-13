import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/models/Default'
import { Cart } from '../pages/carrinho'
import { Index } from '../pages/index'

export function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
