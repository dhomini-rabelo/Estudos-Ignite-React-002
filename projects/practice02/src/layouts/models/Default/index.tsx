import { Coffee, ShoppingCart } from 'phosphor-react'
import { NavLink, Outlet } from 'react-router-dom'
import { Header } from './styles'

export function DefaultLayout() {
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
      <Outlet />
    </>
  )
}
