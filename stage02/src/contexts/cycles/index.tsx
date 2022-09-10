import { createContext, ReactNode, useReducer } from 'react'
import { taskSchemaType } from '../../schemas/task'
import { TimerCyclesReducer } from './reducer'
import {
  TimerCycleInterface,
  timerCyclesContextInterface,
} from './types/context'
import { TimerCyclesReducerActions } from './types/reducer'

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
    dispatchCycles({
      type: TimerCyclesReducerActions.finish,
    })
  }

  function createCycle(data: taskSchemaType) {
    const newCycle: TimerCycleInterface = {
      id: new Date().getTime().toString(),
      start: new Date(),
      ...data,
    }
    dispatchCycles({
      type: TimerCyclesReducerActions.create,
      payload: { newCycle },
    })
  }

  function stopCycle() {
    dispatchCycles({
      type: TimerCyclesReducerActions.stop,
    })
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
