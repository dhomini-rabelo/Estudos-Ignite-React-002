import { createContext } from 'react'
import { TimerCycleInterface } from './types'

interface timerCyclesContextInterface {
  activeCycle: TimerCycleInterface | undefined
  activeCycleId: string | null
  actions: {
    killCycle: (activeCycleId: string) => void
  }
}

/* eslint-disable */
export const TimerCyclesContext = createContext<timerCyclesContextInterface>({} as timerCyclesContextInterface)
