import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { SaleContext } from '../../../../code/contexts/Cart'
import { ProductType } from '../../../../code/contexts/Cart/types'
import { adaptMoneyValue } from '../../../../code/utils/values'
import { ProductCounter } from '../../../../layouts/components/ProductCounter'

export function CoffeeBuy({ coffee }: { coffee: ProductType }) {
  const {
    actions: { removeProductFromCart },
  } = useContext(SaleContext)

  function handleRemoveProductFromCart() {
    removeProductFromCart(coffee.id)
  }
  return (
    <div className="coffee-buy flex items-start">
      <img src={coffee.fileUrl} alt="coffee-image" className="w-16 h-16" />
      <div className="coffee-data flex flex-col justify-center grow pl-5">
        <span className="leading-tight">{coffee.name}</span>
        <div className="flex mt-2 gap-x-2">
          <ProductCounter product={coffee} extraClasses="w-16 h-8" />
          <button
            className="h-8 bg-Gray-500 hover:bg-Gray-800 px-2 rounded-md text-sm"
            onClick={handleRemoveProductFromCart}
          >
            <Trash size={16} className="text-Purple-500 inline-block mr-1" />
            <span>REMOVER</span>
          </button>
        </div>
      </div>
      <strong className="text-Black-800">
        R$ {adaptMoneyValue((coffee.price * 100 * coffee.quantity) / 100)}
      </strong>
    </div>
  )
}
