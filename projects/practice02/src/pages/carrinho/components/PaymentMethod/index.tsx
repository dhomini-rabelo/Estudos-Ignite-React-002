import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { SaleContext } from '../../../../code/contexts/Cart'
import { PaymentMethods } from '../../../../code/contexts/Cart/types'

export function PayMentMethod() {
  const {
    actions: { setPaymentMethod },
  } = useContext(SaleContext)

  function handleSetPaymentMethod(paymentMethodType: PaymentMethods) {
    setPaymentMethod(paymentMethodType)
  }

  return (
    <div className="bg-Gray-200 p-10  rounded-md">
      <div className="flex gap-x-2">
        <CurrencyDollar size={22} className="text-Purple-500" />
        <div className="flex flex-col">
          <span className="leading-tight">Pagamento</span>
          <span className="text-sm leading-tight text-Black-300">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-3 mt-8">
        <button
          className="bg-Gray-500 hover:bg-Gray-800 rounded-md p-4 text-Black-300"
          onClick={() => handleSetPaymentMethod(PaymentMethods.CREDIT)}
        >
          <div className="flex items-center">
            <CreditCard size={16} className="text-Purple-500 inline mr-3" />
            <span className="text-xs">CARTÃO DE CRÉDITO</span>
          </div>
        </button>
        <button
          className="bg-Gray-500 hover:bg-Gray-800 rounded-md p-4 text-Black-300"
          onClick={() => handleSetPaymentMethod(PaymentMethods.DEBIT)}
        >
          <div className="flex items-center">
            <Bank size={16} className="text-Purple-500 inline mr-3" />
            <span className="text-xs">CARTÃO DE DÉBITO</span>
          </div>
        </button>
        <button
          className="bg-Gray-500 hover:bg-Gray-800 rounded-md p-4 text-Black-300"
          onClick={() => handleSetPaymentMethod(PaymentMethods.MONEY)}
        >
          <div className="flex items-center">
            <Money size={16} className="text-Purple-500 inline mr-3" />
            <span className="text-xs">DINHEIRO</span>
          </div>
        </button>
      </div>
    </div>
  )
}
