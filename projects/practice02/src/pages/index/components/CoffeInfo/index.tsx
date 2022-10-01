import { Div } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { ProductType } from '../../../../code/contexts/Cart/types'
import { Link } from 'react-router-dom'
import { ProductCounter } from '../../../../layouts/components/ProductCounter'
import { adaptMoneyValue } from '../../../../code/utils/values'

export function CoffeeInfo({ coffee }: { coffee: ProductType }) {
  return (
    <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
      <img
        src={coffee.fileUrl}
        alt="coffee-type"
        className="coffee-image-product absolute"
      />
      <div className="mb-4 mt-3 flex gap-x-1">
        {coffee.categories.map((category) => (
          <span
            className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800"
            key={category}
          >
            {category}
          </span>
        ))}
      </div>
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
            {adaptMoneyValue(coffee.price)}
          </strong>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <ProductCounter product={coffee} />
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
