import { Coffee, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { SaleContext } from '../../../code/contexts/Cart'
import { ProductType } from '../../../code/contexts/Cart/types'
import { Header } from './styles'

export function DefaultLayout() {
  const { sale } = useContext(SaleContext)

  const productsQuantity = sale.products.reduce(
    (accumulator: number, product: ProductType) =>
      product.quantity + accumulator,
    0,
  )

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
            className="p-2 bg-Yellow-100 text-Yellow-800 rounded-md hover:opacity-80 ml-2 relative"
          >
            <ShoppingCart size={22} weight="fill" />
            <div className="items-counter absolute bg-Yellow-800 top-0 right-0 text-xs leading-tight font-bold text-center h-5 w-5 rounded-full text-white flex items-center justify-center">
              <strong>{productsQuantity}</strong>
            </div>
          </NavLink>
        </nav>
      </Header.container>
      <Outlet />
    </>
  )
}
