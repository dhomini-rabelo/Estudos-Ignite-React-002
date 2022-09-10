import { TimerCycleInterface } from '../types'
import { TimerCyclesReducerActions } from './actions'

export type TimerCyclesReducerState = {
  cycles: TimerCycleInterface[]
  activeCycleId: string | null
}

export type TimerCyclesReducerAction = {
  type: TimerCyclesReducerActions
  payload?: any
}
