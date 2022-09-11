import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Index } from '../pages/index'

export function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}
