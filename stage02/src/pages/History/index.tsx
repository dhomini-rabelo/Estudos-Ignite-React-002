import { Div, Span } from './styles'

export function History() {
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
            <tr>
              <td>task</td>
              <td>20 minutos</td>
              <td>há 5 minutos</td>
              <td>
                <Span.status color="success">Concluído</Span.status>
              </td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 minutos</td>
              <td>há 5 minutos</td>
              <td>
                <Span.status color="fail">Interrompido</Span.status>
              </td>
            </tr>
            <tr>
              <td>task</td>
              <td>20 minutos</td>
              <td>há 5 minutos</td>
              <td>
                <Span.status color="progress">Em andamento</Span.status>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Div.container>
  )
}
