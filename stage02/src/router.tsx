import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { Index } from './pages/Index'
import { History } from './pages/History'
import { TimerCyclesContextProvider } from './contexts/cycles'

export function RouterController() {
  return (
    <BrowserRouter>
      <TimerCyclesContextProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/historico" element={<History />} />
          </Route>
        </Routes>
      </TimerCyclesContextProvider>
    </BrowserRouter>
  )
}
