import { BasketIndicator } from 'widgets'
import { Outlet } from 'react-router'
import { Header } from 'widgets'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <BasketIndicator />
      <Outlet />
    </>
  )
}
