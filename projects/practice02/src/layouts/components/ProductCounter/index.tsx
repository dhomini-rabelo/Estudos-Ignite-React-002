import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { SaleContext } from '../../../code/contexts/Cart'
import { ProductCounterProps } from './types'

export function ProductCounter({
  product,
  extraClasses = '',
}: ProductCounterProps) {
  const {
    actions: { addQuantityForProduct, removeQuantityForProduct },
  } = useContext(SaleContext)

  function handleAddQuantityForProduct() {
    addQuantityForProduct(product.id)
  }

  function handleRemoveQuantityForProduct() {
    if (product.quantity > 0) {
      removeQuantityForProduct(product.id)
    }
  }

  return (
    <div
      className={`p-2 rounded-md bg-Gray-500 flex items-center justify-center ${extraClasses}`}
    >
      <button
        type="button"
        className="text-Purple-500 hover:text-Purple-800"
        onClick={handleRemoveQuantityForProduct}
      >
        <Minus size={14} weight="fill" />
      </button>
      <span className="text-Black-800 mx-1">
        <strong>{product.quantity}</strong>
      </span>
      <button
        type="button"
        className="text-Purple-500 hover:text-Purple-800"
        onClick={handleAddQuantityForProduct}
      >
        <Plus size={14} weight="fill" />
      </button>
    </div>
  )
}
