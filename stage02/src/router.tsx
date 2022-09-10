import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { Index } from './pages/Index'
import { History } from './pages/History'
import { TimerCyclesContextProvider } from './contexts/cycles'

export function RouterController() {
  return (
    <TimerCyclesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/historico" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TimerCyclesContextProvider>
  )
}
