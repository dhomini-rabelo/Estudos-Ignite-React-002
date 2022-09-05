import Logo from '../../assets/images/Logo.svg'
import { NavLink, Outlet } from 'react-router-dom'
import { Div } from './styles'
import { Scroll, Timer } from 'phosphor-react'

export function DefaultLayout() {
  return (
    <Div.container className="bg-Gray-800 flex flex-col text-Gray-100">
      <header className="flex justify-between items-center">
        <img src={Logo} alt="project-logo" />
        <nav className="flex gap-2" id="header-links">
          <NavLink
            to="/"
            className="w-12 h-12 flex items-center justify-center text-Gray-100"
          >
            <Timer size={24} />
          </NavLink>
          <NavLink
            to="/historico"
            className="w-12 h-12 flex items-center justify-center text-Gray-100"
          >
            <Scroll size={24} />
          </NavLink>
        </nav>
      </header>
      <main className="grow flex w-full">
        <Outlet />
      </main>
    </Div.container>
  )
}
