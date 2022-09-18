import { Minus, Plus } from 'phosphor-react'
import { ProductType } from '../../../code/contexts/Cart/types'

export function ProductCounter({
  product,
  addQuantityFunction,
  removeQuantityFunction,
  extraClasses = '',
}: {
  product: ProductType
  addQuantityFunction: (id: number) => void
  removeQuantityFunction: (id: number) => void
  extraClasses?: string
}) {
  function handleAddQuantityForProduct() {
    addQuantityFunction(product.id)
  }

  function handleRemoveQuantityForProduct() {
    if (product.quantity > 0) {
      removeQuantityFunction(product.id)
    }
  }

  return (
    <div
      className={`p-2 rounded-md bg-Gray-500 flex items-center justify-center ${extraClasses}`}
    >
      <button
        className="text-Purple-500 hover:text-Purple-800"
        onClick={handleRemoveQuantityForProduct}
      >
        <Minus size={14} weight="fill" />
      </button>
      <span className="text-Black-800 mx-1">
        <strong>{product.quantity}</strong>
      </span>
      <button
        className="text-Purple-500 hover:text-Purple-800"
        onClick={handleAddQuantityForProduct}
      >
        <Plus size={14} weight="fill" />
      </button>
    </div>
  )
}
