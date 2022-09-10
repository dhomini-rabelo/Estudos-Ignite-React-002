import { Div } from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { TimerCyclesContext } from '../../../../contexts/cycles'

export function TimerCycleForm() {
  const { activeCycle } = useContext(TimerCyclesContext)
  const { register } = useFormContext()

  return (
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
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Descanso" />
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
  )
}
