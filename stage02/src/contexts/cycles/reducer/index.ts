import { TimerCyclesReducerAction, TimerCyclesReducerState } from './types'
import { produce } from 'immer'
import { TimerCycleInterface } from '../types'
import { TimerCyclesReducerActions } from './actions'

/* eslint-disable */



export function TimerCyclesReducer(state: TimerCyclesReducerState, action: TimerCyclesReducerAction): TimerCyclesReducerState {
  switch (action.type) {
    
    case TimerCyclesReducerActions.create:
      const { newCycle }: { newCycle: TimerCycleInterface } = action.payload
      return { cycles: [...state.cycles, newCycle], activeCycleId: newCycle.id }

    case TimerCyclesReducerActions.stop: 
      return produce(state, draft => {
        draft.cycles[getCurrentCycleIndexById(draft.activeCycleId!)].stop = new Date()
        draft.activeCycleId = null
      })

    case TimerCyclesReducerActions.finish:
      return produce(state, draft => {
        draft.cycles[getCurrentCycleIndexById(draft.activeCycleId!)].finished = new Date()
        draft.activeCycleId = null
      })

  }

  function getCurrentCycleIndexById(cycleId: string): number {
    return state.cycles.findIndex((cycle) => cycle.id === cycleId)
  }
}
