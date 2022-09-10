import { createContext, ReactNode, useState } from 'react'
import { taskSchemaType } from '../schemas/task'
import { TimerCycleInterface } from './types'

interface timerCyclesContextInterface {
  cycles: TimerCycleInterface[]
  activeCycle: TimerCycleInterface | undefined
  activeCycleId: string | null
  actions: {
    createCycle: (data: taskSchemaType) => void
    stopCycle: (activeCycleId: string) => void
    killCycle: (activeCycleId: string) => void
  }
}

/* eslint-disable */
export const TimerCyclesContext = createContext<timerCyclesContextInterface>({} as timerCyclesContextInterface)


export function TimerCyclesContextProvider({children}: {children: ReactNode}) {
  const [timerCycles, setTimerCycles] = useState<TimerCycleInterface[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const activeCycle = timerCycles.find((cycle) => cycle.id === activeCycleId)

  function killCycle(activeCycleId: string) {
    setActiveCycleId(null)
    setTimerCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId ? { ...cycle, finished: new Date() } : cycle,
      ),
    )
  }

  function createCycle(data: taskSchemaType) {
    const newCycle: TimerCycleInterface = {
      id: new Date().getTime().toString(),
      start: new Date(),
      ...data,
    }
    setTimerCycles((prev) => [...prev, newCycle])
    setActiveCycleId(newCycle.id)
  }

  function stopCycle(activeCycleId: string) {
    setActiveCycleId(null)
    setTimerCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId ? { ...cycle, stop: new Date() } : cycle,
      ),
    )
  }
  
  return (
    <TimerCyclesContext.Provider value={{ cycles: timerCycles, activeCycle, activeCycleId, actions: { createCycle, stopCycle, killCycle } }}>
      {children}
    </TimerCyclesContext.Provider>
  )
}