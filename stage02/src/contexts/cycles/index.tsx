import { createContext, ReactNode, useReducer } from 'react'
import { taskSchemaType } from '../../schemas/task'
import { TimerCyclesReducer } from './reducer'
import { cyclesActions } from './reducer/actions'
import { TimerCycleInterface, timerCyclesContextInterface } from './types'

/* eslint-disable */
export const TimerCyclesContext = createContext<timerCyclesContextInterface>(
  {} as timerCyclesContextInterface,
)

export function TimerCyclesContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [{ cycles, activeCycleId }, dispatchCycles] = useReducer(
    TimerCyclesReducer,
    { cycles: [], activeCycleId: null },
  )
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function killCycle() {
    dispatchCycles(cyclesActions.finish())
  }

  function createCycle(data: taskSchemaType) {
    const newCycle: TimerCycleInterface = {
      id: new Date().getTime().toString(),
      start: new Date(),
      ...data,
    }
    dispatchCycles(cyclesActions.create(newCycle))
  }

  function stopCycle() {
    dispatchCycles(cyclesActions.stop())
  }

  return (
    <TimerCyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        actions: { createCycle, stopCycle, killCycle },
      }}
    >
      {children}
    </TimerCyclesContext.Provider>
  )
}
