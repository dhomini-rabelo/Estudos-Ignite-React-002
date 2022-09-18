import { Div } from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { ProductType } from '../../../../code/contexts/Cart/types'
import { useContext } from 'react'
import { SaleContext } from '../../../../code/contexts/Cart'
import { Link } from 'react-router-dom'

export function CoffeeInfo({ coffee }: { coffee: ProductType }) {
  const {
    actions: { addQuantityForProduct, removeQuantityForProduct },
  } = useContext(SaleContext)

  function handleAddQuantityForProduct() {
    addQuantityForProduct(coffee.id)
  }

  function handleRemoveQuantityForProduct() {
    if (coffee.quantity > 0) {
      removeQuantityForProduct(coffee.id)
    }
  }

  return (
    <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
      <img
        src={coffee.fileUrl}
        alt="coffee-type"
        className="coffee-image-product absolute"
      />
      {coffee.categories.map((category) => (
        <span
          className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3"
          key={category}
        >
          {category}
        </span>
      ))}
      <h3 className="text-Black-500 font-bold text-xl leading-tight">
        {coffee.name}
      </h3>
      <span className="text-Black-100 text-sm mt-1 text-center">
        {coffee.description}
      </span>
      <div className="buy flex items-center justify-between mt-8 w-full">
        <div className="text-Black-300 leading-tight">
          <span className="text-sm">R$</span>{' '}
          <strong className="baloo font-extrabold text-2xl">
            {coffee.price.toFixed(2).toString().replace('.', ',')}
          </strong>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <div className="p-2 rounded-md bg-Gray-500 flex items-center justify-center">
            <button
              className="text-Purple-500 hover:text-Purple-800"
              onClick={handleRemoveQuantityForProduct}
            >
              <Minus size={14} weight="fill" />
            </button>
            <span className="text-Black-800 mx-1">
              <strong>{coffee.quantity}</strong>
            </span>
            <button
              className="text-Purple-500 hover:text-Purple-800"
              onClick={handleAddQuantityForProduct}
            >
              <Plus size={14} weight="fill" />
            </button>
          </div>
          <Link
            to="/carrinho"
            className="bg-Purple-800 hover:bg-Purple-500 text-Gray-200 p-2 rounded-md"
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </Link>
        </div>
      </div>
    </Div.coffee>
  )
}
