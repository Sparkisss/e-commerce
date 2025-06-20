import { useAppSelector } from 'shared/types/redux'
import { selectBasketItemsCount } from 'entities'
import { useLocation } from 'react-router'
import { Basket } from './Basket'

export const BasketIndicator = () => {
  const itemsAmount = useAppSelector(selectBasketItemsCount)
  const location = useLocation()

  const isBasketPage = location.pathname === '/basket'
  if (itemsAmount === 0 || isBasketPage) return null
  return <Basket amount={itemsAmount} />
}
