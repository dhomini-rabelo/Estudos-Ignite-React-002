import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/models/Default'
import { Index } from '../pages/index'

export function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
