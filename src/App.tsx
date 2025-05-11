import { BasketIndicator } from 'widgets'
import { Outlet } from 'react-router'
import { Header } from 'widgets'

export const App = () => {
  return (
    <div className="container">
      <Header />
      <BasketIndicator />
      <Outlet />
    </div>
  )
}
