import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Index } from './pages/Index'

export function RouterController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}
