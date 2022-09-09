import { taskSchemaType } from '../../schemas/task'

export interface TimerCycleInterface extends taskSchemaType {
  id: string
  start: Date
  stop?: Date | undefined
  finished?: Date | undefined
}
