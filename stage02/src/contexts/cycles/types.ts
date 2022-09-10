import { taskSchemaType } from '../../schemas/task'

export interface TimerCycleInterface extends taskSchemaType {
  id: string
  start: Date
  stop?: Date | undefined
  finished?: Date | undefined
}

export interface timerCyclesContextInterface {
  cycles: TimerCycleInterface[]
  activeCycle: TimerCycleInterface | undefined
  activeCycleId: string | null
  actions: {
    createCycle: (data: taskSchemaType) => void
    stopCycle: () => void
    killCycle: () => void
  }
}
