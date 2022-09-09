import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { taskSchema, taskSchemaType } from '../../schemas/task'
import { useState } from 'react'
import { TimerCyclesContext } from './context'
import { CountDown } from './components/CountDown'
import { TimerCycleForm } from './components/TimerCycleForm'
import { TimerCycleInterface } from './types'
// import * as zod from 'zod'

export function Index() {
  const [timerCycles, setTimerCycles] = useState<TimerCycleInterface[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = timerCycles.find((cycle) => cycle.id === activeCycleId)

  const cycleForm = useForm<taskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      minutes: 0,
    },
  })
  const { handleSubmit, watch, reset } = cycleForm

  const taskInputValue = watch('task')

  function handleFormSubmit(data: taskSchemaType) {
    const newCycle: TimerCycleInterface = {
      id: new Date().getTime().toString(),
      start: new Date(),
      ...data,
    }
    setTimerCycles((prev) => [...prev, newCycle])
    setActiveCycleId(newCycle.id)
    reset()
  }

  function handleStopCycle() {
    setActiveCycleId(null)
    setTimerCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId ? { ...cycle, stop: new Date() } : cycle,
      ),
    )
  }

  function killCycle(activeCycleId: string) {
    setActiveCycleId(null)
    setTimerCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId ? { ...cycle, finished: new Date() } : cycle,
      ),
    )
  }

  return (
    <TimerCyclesContext.Provider
      value={{ activeCycle, activeCycleId, actions: { killCycle } }}
    >
      <form
        className="grow flex flex-col items-center justify-center"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col items-center gap-14 justify-center">
          <FormProvider {...cycleForm}>
            <TimerCycleForm />
          </FormProvider>
          <CountDown />

          {activeCycle ? (
            <button
              type="button"
              className="w-full p-4 border-0 rounded-lg flex-center cursor-pointer bg-Red-500 text-Gray-100 hover:bg-Red-700"
              onClick={handleStopCycle}
            >
              <HandPalm size={24} className="inline mr-2" />
              Parar
            </button>
          ) : (
            <button
              type="submit"
              className="w-full p-4 border-0 rounded-lg flex-center cursor-pointer bg-Green-500 text-Gray-100 hover:bg-Green-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-Green-500"
              disabled={!taskInputValue}
            >
              <Play size={24} className="inline mr-2" />
              Começar
            </button>
          )}
        </div>
      </form>
    </TimerCyclesContext.Provider>
  )
}
