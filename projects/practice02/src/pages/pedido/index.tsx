import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect, useRef } from 'react'
import { SaleContext } from '../../code/contexts/Cart'
import { PaymentMethodsDisplay, SaleType } from '../../code/contexts/Cart/types'
import { randomInteger } from '../../code/utils/values'
import { Div } from './styles'

export function RequestFeedback() {
  const requestTime = randomInteger(10, 50)
  const {
    sale,
    actions: { clearSale },
  } = useContext(SaleContext)
  const lastSale = useRef<SaleType>({ ...sale })
  const { paymentMethod, address } = lastSale.current

  useEffect(() => {
    clearSale()
  }, [])

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
              Entrega em <strong>{address.road}</strong>, {address.number}{' '}
              {address.district} - {address.city}, {address.state}
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="p-2 bg-Yellow-500 text-white rounded-full">
              <Timer size={16} weight="fill" />
            </div>
            <div className="text-Black-300 flex flex-col items-start leading-tight">
              <span>Previsão de entrega</span>
              <strong>
                {requestTime} min - {requestTime + 10} min
              </strong>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="p-2 bg-Yellow-800 text-white rounded-full">
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div className="text-Black-300 flex flex-col items-start leading-tight">
              <span>Pagamento na entrega</span>
              <strong>
                {paymentMethod
                  ? PaymentMethodsDisplay[paymentMethod]
                  : 'Não selecionado'}
              </strong>
            </div>
          </div>
        </div>
      </Div.requestInfo>
      <img src="/sale.svg" alt="sale-image" />
    </div>
  )
}
