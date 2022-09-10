import { TimerCyclesReducerAction, TimerCyclesReducerState } from './types'
import { TimerCycleInterface } from '../types'
import { TimerCyclesReducerActions } from './actions'

/* eslint-disable */



export function TimerCyclesReducer(state: TimerCyclesReducerState, action: TimerCyclesReducerAction): TimerCyclesReducerState {
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
