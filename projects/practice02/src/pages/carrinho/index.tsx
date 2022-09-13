import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as Input from '../../layouts/elements/Input'

export function Cart() {
  return (
    <>
      <main className="mt-16">
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex flex-col">
            <div className="w-full">
              <h2 className="baloo font-bold text-lg leading-tight mb-4 gap-x-8">
                Complete seu pedido
              </h2>
              <div className="bg-Gray-200 p-10  rounded-md">
                <div className="flex gap-x-2">
                  <MapPinLine size={22} className="text-Yellow-800" />
                  <div className="flex flex-col">
                    <span className="leading-tight">Endereço de Entrega</span>
                    <span className="text-sm leading-tight text-Black-300">
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-8 gap-x-3 gap-y-4">
                  <Input.form type="text" placeholder="CEP" />
                  <div className="grid grid-cols-5 col-span-2 gap-x-3">
                    <Input.form
                      type="text"
                      extraClasses="col-span-4"
                      placeholder="Cidade"
                    />
                    <Input.form type="text" placeholder="UF" />
                  </div>
                  <Input.form type="text" placeholder="Bairro" />
                  <Input.form
                    type="text"
                    extraClasses="col-span-2"
                    placeholder="Rua"
                  />
                  <div className="col-span-2 relative">
                    <Input.form
                      type="text"
                      extraClasses="w-full h-full"
                      placeholder="Complemento"
                    />
                    <div className="flex absolute right-4 flex-col justify-center top-0 h-full">
                      <span className="italic text-Black-100 top-4 text-xs">
                        Opcional
                      </span>
                    </div>
                  </div>
                  <Input.form type="text" placeholder="Número" />
                </div>
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="bg-Gray-200 p-10  rounded-md">
                <div className="flex gap-x-2">
                  <CurrencyDollar size={22} className="text-Purple-500" />
                  <div className="flex flex-col">
                    <span className="leading-tight">Pagamento</span>
                    <span className="text-sm leading-tight text-Black-300">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-x-3 mt-8">
                  <button className="bg-Gray-500 rounded-md p-4 text-Black-300">
                    <div className="flex items-center">
                      <CreditCard
                        size={16}
                        className="text-Purple-500 inline mr-3"
                      />
                      <span className="text-xs leading-relaxed">
                        CARTÃO DE CRÉDITO
                      </span>
                    </div>
                  </button>
                  <button className="bg-Gray-500 rounded-md p-4 text-Black-300">
                    <div className="flex items-center">
                      <Bank size={16} className="text-Purple-500 inline mr-3" />
                      <span className="text-xs leading-relaxed">
                        CARTÃO DE DÉBITO
                      </span>
                    </div>
                  </button>
                  <button className="bg-Gray-500 rounded-md p-4 text-Black-300">
                    <div className="flex items-center">
                      <Money
                        size={16}
                        className="text-Purple-500 inline mr-3"
                      />
                      <span className="text-xs leading-relaxed">DINHEIRO</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
