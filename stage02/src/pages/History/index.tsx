import { useContext } from 'react'
import { TimerCyclesContext } from '../../contexts/cycles'
import ptBR from 'date-fns/locale/pt-BR'
import { Div, Span } from './styles'
import { formatDistanceToNow } from 'date-fns'

export function History() {
  const { cycles, activeCycleId } = useContext(TimerCyclesContext)
  return (
    <Div.container className="grow flex p-14 flex-col">
      <h1 className="text-2xl text-Gray-100">Meu histórico</h1>
      <div className="grow overflow-auto mt-8">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutes} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.start, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.stop && (
                      <Span.status color="fail">Interrompido</Span.status>
                    )}
                    {cycle.id === activeCycleId && (
                      <Span.status color="progress">Em andamento</Span.status>
                    )}
                    {cycle.finished && (
                      <Span.status color="success">Finalizado</Span.status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Div.container>
  )
}
