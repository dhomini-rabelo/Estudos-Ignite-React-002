import { ShoppingCart } from 'phosphor-react'
import { BaseSyntheticEvent, useContext, useState } from 'react'
import { FieldErrors, FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { SaleContext } from '../../code/contexts/Cart'
import { ProductType } from '../../code/contexts/Cart/types'
import { AddressSchema, AddressSchemaType } from '../../code/schemas/address'
import { adaptMoneyValue } from '../../code/utils/values'
import { AddressForm } from './components/AddressForm'
import { CoffeeBuy } from './components/CoffeeBuy'
import { PayMentMethod } from './components/PaymentMethod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Div } from './styles'
import { ModalForError } from './components/ModalForError'

export function Cart() {
  const navigateTo = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const {
    sale,
    actions: { setAddress },
  } = useContext(SaleContext)
  const shippingPrice = 6.5
  const productsForBuy = sale.products.filter(
    (product: ProductType) => product.quantity > 0,
  )
  const productsPrice = productsForBuy.reduce(
    (accumulator: number, state: ProductType) =>
      ((accumulator + state.price * state.quantity) * 100) / 100,
    0,
  )

  const AddressPageForm = useForm<AddressSchemaType>({
    resolver: zodResolver(AddressSchema),
    defaultValues: sale.address,
  })

  const { handleSubmit } = AddressPageForm

  function handleFormSubmit(data: AddressSchemaType) {
    if (sale.paymentMethod !== null) {
      setAddress(data)
      navigateTo('/pedido')
    } else {
      setErrorMessage('Escolha um método de pagamento')
    }
  }

  function handleFormErrors(
    errors: FieldErrors<AddressSchemaType>,
    event?: BaseSyntheticEvent,
  ) {
    const validationError = Object.values(errors)[0].message as string
    setErrorMessage(validationError)
  }

  function onCloseModalForError() {
    setErrorMessage('')
  }

  /* eslint-disable */
  return (
    <>
      {errorMessage && <ModalForError errorMessage={errorMessage} onClose={onCloseModalForError} />}
      <form className="mt-16" onSubmit={handleSubmit(handleFormSubmit, handleFormErrors)}>
        <Div.container className="grid grid-cols-5 gap-x-8 gap-y-8">
          <div className="col-span-5 pc:col-span-3 flex flex-col">
            <div className="w-full mx-auto max-box-length">
              <h2 className="baloo font-bold text-lg leading-tight mb-4 gap-x-8">
                Complete seu pedido
              </h2>
              <div className="bg-Gray-200 p-8 min:p-10 rounded-md">
                <FormProvider {...AddressPageForm}>
                  <AddressForm />
                </FormProvider>
              </div>
            </div>
            <div className="w-full mt-3 mx-auto max-box-length">
              <PayMentMethod />
            </div>
          </div>
          <div className="col-span-5 pc:col-span-2">
            <div className="w-full mx-auto mb-12 pc:mb-0 max-box-length">
              <h2 className="baloo font-bold text-lg leading-tight mb-4 gap-x-8">
                Cafés selecionados
              </h2>
              <Div.coffeeBuyContainer className="bg-Gray-200 p-8 min:p-10 rounded-md">
                {productsForBuy.map((product: ProductType) => (
                  <div key={product.id}>
                    <CoffeeBuy coffee={product} />
                    <div className="border-separation my-6"></div>
                  </div>
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
                    <button
                      className="w-full py-3 px-2 bg-Yellow-500 hover:bg-Yellow-800 rounded-md text-white text-sm bold leading-relaxed"
                      type="submit"
                    >
                      CONFIRMAR PEDIDO
                    </button>
                  </>
                )}
              </Div.coffeeBuyContainer>
            </div>
          </div>
        </Div.container>
      </form>
    </>
  )
}
