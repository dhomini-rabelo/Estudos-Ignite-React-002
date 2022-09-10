import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { taskSchema, taskSchemaType } from '../../schemas/task'
import { useContext } from 'react'
import { CountDown } from './components/CountDown'
import { TimerCycleForm } from './components/TimerCycleForm'
import { TimerCyclesContext } from '../../contexts/cycles'
// import * as zod from 'zod'

export function Index() {
  const {
    activeCycle,
    activeCycleId,
    actions: { createCycle, stopCycle },
  } = useContext(TimerCyclesContext)
  const cycleForm = useForm<taskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      minutes: 0,
    },
  })
  const { handleSubmit, watch, reset } = cycleForm
  const taskInputValue = watch('task')

  function handleFormSubmit(data: taskSchemaType) {
    createCycle(data)
    reset()
  }

  function handleStopCycle() {
    stopCycle(activeCycleId!)
  }

  return (
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
  )
}
