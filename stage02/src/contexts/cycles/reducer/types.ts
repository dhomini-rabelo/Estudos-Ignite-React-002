import { TimerCycleInterface } from '../types'

/* eslint-disable */
export enum TimerCyclesReducerActions {
  create = 'create',
  stop = 'stop',
  finish = 'finish',
}

export type TimerCyclesReducerState = {
  cycles: TimerCycleInterface[]
  activeCycleId: string | null
}

export type TimerCyclesReducerAction = {
  type: TimerCyclesReducerActions
  payload?: any
}
