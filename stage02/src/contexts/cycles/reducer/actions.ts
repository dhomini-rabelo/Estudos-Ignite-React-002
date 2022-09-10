import { TimerCycleInterface } from '../types'

/* eslint-disable */
export enum TimerCyclesReducerActions {
  create = 'create',
  stop = 'stop',
  finish = 'finish',
}
/* eslint-enable */

export const cyclesActions = {
  create: (newCycle: TimerCycleInterface) => ({
    type: TimerCyclesReducerActions.create,
    payload: { newCycle },
  }),
  stop: () => ({
    type: TimerCyclesReducerActions.stop,
  }),
  finish: () => ({
    type: TimerCyclesReducerActions.finish,
  }),
}
