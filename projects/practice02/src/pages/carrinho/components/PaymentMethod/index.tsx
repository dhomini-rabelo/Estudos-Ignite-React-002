import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { SaleContext } from '../../../../code/contexts/Cart'
import { PaymentMethods } from '../../../../code/contexts/Cart/types'
import { Button, Div } from './styles'

export function PayMentMethod() {
  const {
    sale: { paymentMethod },
    actions: { setPaymentMethod },
  } = useContext(SaleContext)

  function handleSetPaymentMethod(paymentMethodType: PaymentMethods) {
    setPaymentMethod(paymentMethodType)
  }

  return (
    <Div.paymentBox className="bg-Gray-200 p-10  rounded-md">
      <div className="flex gap-x-2">
        <CurrencyDollar size={22} className="text-Purple-500" />
        <div className="flex flex-col">
          <span className="leading-tight">Pagamento</span>
          <span className="text-sm leading-tight text-Black-300">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="grid psm:grid-cols-3 grid-cols-1 gap-x-3 gap-y-3 mt-8">
        <Button.payment
          type="button"
          active={paymentMethod === PaymentMethods.CREDIT}
          className="bg-Gray-500 hover:bg-Gray-800 rounded-md px-4 text-Black-300 h-12"
          onClick={() => handleSetPaymentMethod(PaymentMethods.CREDIT)}
        >
          <div className="flex items-center">
            <CreditCard size={16} className="text-Purple-500 inline mr-3" />
            <span className="text-xs">CARTÃO DE CRÉDITO</span>
          </div>
        </Button.payment>
        <Button.payment
          type="button"
          active={paymentMethod === PaymentMethods.DEBIT}
          className="bg-Gray-500 hover:bg-Gray-800 rounded-md px-4 text-Black-300 h-12"
          onClick={() => handleSetPaymentMethod(PaymentMethods.DEBIT)}
        >
          <div className="flex items-center">
            <Bank size={16} className="text-Purple-500 inline mr-3" />
            <span className="text-xs">CARTÃO DE DÉBITO</span>
          </div>
        </Button.payment>
        <Button.payment
          type="button"
          active={paymentMethod === PaymentMethods.MONEY}
          className="bg-Gray-500 hover:bg-Gray-800 rounded-md px-4 text-Black-300 h-12"
          onClick={() => handleSetPaymentMethod(PaymentMethods.MONEY)}
        >
          <div className="flex items-center">
            <Money size={16} className="text-Purple-500 inline mr-3" />
            <span className="text-xs">DINHEIRO</span>
          </div>
        </Button.payment>
      </div>
    </Div.paymentBox>
  )
}
