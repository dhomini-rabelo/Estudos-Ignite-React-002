import { Play } from 'phosphor-react'
import { Div } from './styles'

export function Index() {
  return (
    <form className="grow flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-14 justify-center">
        <Div.inputsContainer className="w-full flex items-center justify-center gap-2 text-Gray-100 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            name="task"
            id="task"
            list="todo-title-suggestions"
            placeholder="Dê um nome para seu projeto"
            className="input-pomo grow text-center"
          />
          <datalist id="todo-title-suggestions">
            <option value="a0" />
            <option value="a1" />
            <option value="a2" />
          </datalist>
          <label htmlFor="minutes">durante</label>
          <input
            type="number"
            name="minutes"
            id="minutes"
            placeholder="00"
            className="input-pomo w-16 text-center"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos .</span>
        </Div.inputsContainer>
        <Div.countDown className="text-Gray-100 flex gap-4">
          <span className="index-countdown">0 0</span>
          <span className="index-countdown text-Green-500 w-16 overflow-hidden flex justify-center py-2 px-0">
            :
          </span>
          <span className="index-countdown">0 0</span>
        </Div.countDown>
        <button
          type="submit"
          className="w-full p-4 border-0 rounded-lg flex-center cursor-pointer bg-Green-500 text-Gray-100 hover:bg-Green-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-Green-500"
          disabled
        >
          <Play size={24} className="inline mr-2" />
          Começar
        </button>
      </div>
    </form>
  )
}
