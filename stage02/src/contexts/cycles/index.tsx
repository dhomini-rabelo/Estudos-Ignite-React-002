import { createContext, ReactNode, useReducer } from 'react'
import { taskSchemaType } from '../../schemas/task'
import { TimerCycleInterface } from './types'

interface timerCyclesContextInterface {
  cycles: TimerCycleInterface[]
  activeCycle: TimerCycleInterface | undefined
  activeCycleId: string | null
  actions: {
    createCycle: (data: taskSchemaType) => void
    stopCycle: () => void
    killCycle: () => void
  }
}

/* eslint-disable */
export const TimerCyclesContext = createContext<timerCyclesContextInterface>(
  {} as timerCyclesContextInterface,
)

enum TimerCyclesReducerActions {
  create,
  stop,
  finish,
}

type TimerCyclesReducerState = {
  cycles: TimerCycleInterface[]
  activeCycleId: string | null
}

type TimerCyclesReducerAction = {
  type: TimerCyclesReducerActions
  payload?: any
}

function TimerCyclesReducer(
  state: TimerCyclesReducerState,
  action: TimerCyclesReducerAction,
): TimerCyclesReducerState {
  switch (action.type) {
    case TimerCyclesReducerActions.create:
      const { newCycle }: { newCycle: TimerCycleInterface } = action.payload
      return { cycles: [...state.cycles, newCycle], activeCycleId: newCycle.id }
    case TimerCyclesReducerActions.stop:
      return {
        cycles: state.cycles.map((cycle) =>
          cycle.id === state.activeCycleId
            ? { ...cycle, stop: new Date() }
            : cycle,
        ),
        activeCycleId: null,
      }
      case TimerCyclesReducerActions.finish:
        return {
          cycles: state.cycles.map((cycle) =>
            cycle.id === state.activeCycleId
              ? { ...cycle, finished: new Date() }
              : cycle,
          ),
          activeCycleId: null,
        }
  }
}

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
