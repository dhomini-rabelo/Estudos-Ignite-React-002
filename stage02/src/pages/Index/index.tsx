import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Div } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { taskSchema, taskSchemaType } from '../../schemas/task'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
// import * as zod from 'zod'

interface FormCycleInterface extends taskSchemaType {
  id: string
  start: Date
  stop?: Date | undefined
  finished?: Date | undefined
}

export function Index() {
  const [formCycles, setFormCycles] = useState<FormCycleInterface[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsPassed, setSecondsPassed] = useState<number>(0)
  const activeCycle = formCycles.find((cycle) => cycle.id === activeCycleId)
  const [minutesDisplay, secondsDisplay] = getCountDownRepresentation(
    activeCycle,
    secondsPassed,
  )
  const { register, handleSubmit, watch, reset } = useForm<taskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      minutes: 0,
    },
  })
  const taskInputValue = watch('task')

  useEffect(() => {
    let interval: number | null = null

    if (activeCycle) {
      document.title = activeCycle.task
      interval = setInterval(() => {
        const difference = differenceInSeconds(new Date(), activeCycle.start)
        const totalSeconds = activeCycle.minutes * 60
        if (difference >= totalSeconds) {
          setFormCycles((prev) =>
            prev.map((cycle) =>
              cycle.id === activeCycleId
                ? { ...cycle, finished: new Date() }
                : cycle,
            ),
          )
          setActiveCycleId(null)
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(difference)
        }
      }, 997)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [activeCycle, activeCycleId])

  function handleFormSubmit(data: taskSchemaType) {
    const newCycle: FormCycleInterface = {
      id: new Date().getTime().toString(),
      start: new Date(),
      ...data,
    }
    setFormCycles((prev) => [...prev, newCycle])
    setActiveCycleId(newCycle.id)
    setSecondsPassed(0)
    reset()
  }

  function handleStopCycle() {
    setActiveCycleId(null)
    setFormCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId ? { ...cycle, stop: new Date() } : cycle,
      ),
    )
  }

  function getCountDownRepresentation(
    activeCycle: FormCycleInterface | undefined,
    secondsPassed: number,
  ): [string, string] {
    const currentSeconds = activeCycle
      ? activeCycle.minutes * 60 - secondsPassed
      : 0
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60
    const minutesForRepresentation = String(minutesAmount).padStart(2, '0')
    const secondsForRepresentation = String(secondsAmount).padStart(2, '0')
    return [minutesForRepresentation, secondsForRepresentation]
  }

  return (
    <form
      className="grow flex flex-col items-center justify-center"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col items-center gap-14 justify-center">
        <Div.inputsContainer className="w-full flex items-center justify-center gap-2 text-Gray-100 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            list="todo-title-suggestions"
            placeholder="Dê um nome para seu projeto"
            className="input-pomo grow text-center"
            {...register('task')}
            disabled={!!activeCycle}
          />
          <datalist id="todo-title-suggestions">
            <option value="a0" />
            <option value="a1" />
            <option value="a2" />
          </datalist>
          <label htmlFor="minutes">durante</label>
          <input
            type="number"
            placeholder="00"
            className="input-pomo w-16 text-center"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutes', {
              valueAsNumber: true,
            })}
          />
          <span>minutos .</span>
        </Div.inputsContainer>
        <Div.countDown className="text-Gray-100 flex gap-4">
          <span className="index-countdown">
            {minutesDisplay[0]} {minutesDisplay[1]}
          </span>
          <span className="index-countdown text-Green-500 w-16 overflow-hidden flex justify-center py-2 px-0">
            :
          </span>
          <span className="index-countdown">
            {secondsDisplay[0]} {secondsDisplay[1]}
          </span>
        </Div.countDown>
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
