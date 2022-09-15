import { Div } from './styles'

export function RequestFeedback() {
  return (
    <div className="mt-28 flex justify-between items-end">
      <Div.requestInfo className="flex flex-col">
        <div className="mb-10">
          <h2 className="title baloo text-Yellow-800 font-extrabold text-3xl leading-tight">
            Uhu! Pedido confirmado
          </h2>
          <span className="leading-tight text-xl">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>
      </Div.requestInfo>
      <img src="/sale.svg" alt="sale-image" />
    </div>
  )
}
