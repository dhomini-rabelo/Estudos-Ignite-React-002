import { Div } from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function CoffeeInfo() {
  return (
    <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
      <img
        src="coffees/expresso-tradicional.svg"
        alt="coffee-type"
        className="coffee-image-product absolute"
      />
      <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
        TRADICIONAL
      </span>
      <h3 className="text-Black-500 font-bold text-xl leading-tight">
        Expresso Tradicional
      </h3>
      <span className="text-Black-100 text-sm mt-1 text-center">
        O tradicional café feito com água quente e grãos moídos
      </span>
      <div className="buy flex items-center justify-between mt-8 w-full">
        <div className="text-Black-300 leading-tight">
          <span className="text-sm">R$</span>{' '}
          <strong className="baloo font-extrabold text-2xl">9,90</strong>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
            <button className="text-Purple-500">
              <Minus size={14} weight="fill" />
            </button>
            <span className="text-Black-800 mx-1">
              <strong>0</strong>
            </span>
            <button className="text-Purple-500">
              <Plus size={14} weight="fill" />
            </button>
          </div>
          <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </div>
    </Div.coffee>
  )
}
