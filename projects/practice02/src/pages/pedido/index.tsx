import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
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
        <div className="info-box p-10 flex flex-col gap-y-8">
          <div className="flex items-center gap-x-3">
            <div className="p-2 bg-Purple-800 text-white rounded-full">
              <MapPin size={16} weight="fill" />
            </div>
            <span className="text-Black-300 leading-tight">
              Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
              Farrapos - Porto Alegre, RS
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="p-2 bg-Yellow-500 text-white rounded-full">
              <Timer size={16} weight="fill" />
            </div>
            <div className="text-Black-300 flex flex-col items-start leading-tight">
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="p-2 bg-Yellow-800 text-white rounded-full">
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div className="text-Black-300 flex flex-col items-start leading-tight">
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </Div.requestInfo>
      <img src="/sale.svg" alt="sale-image" />
    </div>
  )
}
