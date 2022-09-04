import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  function randint(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <>
      <header>
        <h1>Header {randint(1, 10)}</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
