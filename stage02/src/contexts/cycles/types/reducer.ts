import { TimerCycleInterface } from './context'

/* eslint-disable */
export enum TimerCyclesReducerActions {
  create,
  stop,
  finish,
}

export type TimerCyclesReducerState = {
  cycles: TimerCycleInterface[]
  activeCycleId: string | null
}

export type TimerCyclesReducerAction = {
  type: TimerCyclesReducerActions
  payload?: any
}
