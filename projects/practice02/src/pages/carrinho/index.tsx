import { MapPinLine, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SaleContext } from '../../code/contexts/Cart'
import { ProductType } from '../../code/contexts/Cart/types'
import { adaptMoneyValue } from '../../code/utils/values'
import * as Input from '../../layouts/elements/Input'
import { CepMaskInput } from '../../layouts/elements/Input'
import { CoffeeBuy } from './components/CoffeeBuy'
import { PayMentMethod } from './components/PaymentMethod'
import { Div } from './styles'

export function Cart() {
  const { sale } = useContext(SaleContext)
  const shippingPrice = 6.5
  const productsForBuy = sale.products.filter(
    (product: ProductType) => product.quantity > 0,
  )
  const productsPrice = productsForBuy.reduce(
    (accumulator: number, state: ProductType) =>
      ((accumulator + state.price * state.quantity) * 100) / 100,
    0,
  )

  /* eslint-disable */
  return (
    <>
      <main className="mt-16">
        <div className="grid grid-cols-5 gap-x-8">
          <div className="col-span-3 flex flex-col">
            <div className="w-full">
              <h2 className="baloo font-bold text-lg leading-tight mb-4 gap-x-8">
                Complete seu pedido
              </h2>
              <div className="bg-Gray-200 p-10 rounded-md">
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
                  <CepMaskInput type="text" placeholder="CEP" />
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
              <PayMentMethod />
            </div>
          </div>
          <div className="w-full col-span-2">
            <h2 className="baloo font-bold text-lg leading-tight mb-4 gap-x-8">
              Cafés selecionados
            </h2>
            <Div.coffeeBuyContainer className="bg-Gray-200 p-10 rounded-md">
              {productsForBuy.map((product: ProductType) => (
                <>
                  <CoffeeBuy coffee={product} />
                  <div className="border-separation my-6"></div>
                </>
              ))}
              {productsForBuy.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-y-2 h-64">
                  <ShoppingCart size={64} weight="fill" className="text-Yellow-800" />
                  <span className="text-Black-100">O carrinho está vazio</span>
                  <Link to="/" className="py-2 px-2 bg-Yellow-500 hover:bg-Yellow-800 rounded-md text-white text-xs bold leading-relaxed">
                    COMPRAR
                  </Link>
                </div>
              ) : (
                <>
                    <div className="mb-6 flex flex-col gap-y-3">
                      <div className="flex justify-between items-center text-Black-300 leading-tight">
                        <span className="text-sm">Itens</span>
                        <span>R$ {adaptMoneyValue(productsPrice)}</span>
                      </div>
                      <div className="flex justify-between items-center text-Black-300 leading-tight">
                        <span className="text-sm">Entrega</span>
                        <span>R$ {adaptMoneyValue(shippingPrice)}</span>
                      </div>
                      <div className="flex justify-between items-center text-Black-300 bold text-xl leading-tight">
                        <strong>Total</strong>
                        <strong>
                          R${' '}
                          {adaptMoneyValue(
                            ((productsPrice + shippingPrice) * 100) / 100,
                          )}
                        </strong>
                      </div>
                    </div>
                    <button className="w-full py-3 px-2 bg-Yellow-500 hover:bg-Yellow-800 rounded-md text-white text-sm bold leading-relaxed">
                      CONFIRMAR PEDIDO
                    </button>
                </>
              )}
            </Div.coffeeBuyContainer>
          </div>
        </div>
      </main>
    </>
  )
}
