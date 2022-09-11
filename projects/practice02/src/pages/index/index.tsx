import { NavLink } from 'react-router-dom'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Header } from './styles'

export function Index() {
  return (
    <>
      <Header.container className="flex justify-between items-center mt-8">
        <img src="/logo.svg" alt="project-logo" />
        <nav className="flex items-center justify-center">
          <NavLink
            to="/"
            className="p-2 bg-Yellow-100 text-Yellow-800 rounded-md hover:opacity-80"
          >
            <Coffee size={22} weight="fill" />
          </NavLink>
          <NavLink
            to="/carrinho"
            className="p-2 bg-Yellow-100 text-Yellow-800 rounded-md hover:opacity-80 ml-2"
          >
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </Header.container>
      <div className="mt-32 flex justify-between flex-wrap-reverse lg:flex-nowrap gap-y-8">
        <div className="flex flex-col">
          <h2 className="baloo text-5xl font-extrabold leading-tight text-Black-800">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <span className="text-xl leading-tight text-Black-500 mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <div className="flex mt-16 flex-wrap gap-y-5 gap-x-10">
            <div className="ad-box flex items-center justify-start">
              <div className="p-2 bg-Yellow-800 text-Gray-100 rounded-full">
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span className="ml-3 text-Black-300">
                Compra simples e segura
              </span>
            </div>
            <div className="ad-box flex items-center justify-start">
              <div className="p-2 bg-Black-300 text-Gray-100 rounded-full">
                <Package size={16} weight="fill" />
              </div>
              <span className="ml-3 text-Black-300">
                Embalagem mantém o café intacto
              </span>
            </div>
          </div>
          <div className="flex flex-wrap mt-5 gap-y-5 gap-x-10">
            <div className="ad-box flex items-center justify-start">
              <div className="p-2 bg-Yellow-500 text-Gray-100 rounded-full">
                <Timer size={16} weight="fill" />
              </div>
              <span className="ml-3 text-Black-300">
                Entrega rápida e rastreada
              </span>
            </div>
            <div className="ad-box flex items-center justify-start">
              <div className="p-2 bg-Purple-800 text-Gray-100 rounded-full">
                <Coffee size={16} weight="fill" />
              </div>
              <span className="ml-3 text-Black-300">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
        <img
          src="/coffee.svg"
          alt="coffee-cup"
          className="mx-auto inline-block"
        />
      </div>
    </>
  )
}
