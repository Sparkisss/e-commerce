import { useAppSelector } from 'shared/types/redux'
import { selectBasketItems } from 'entities'
import { Basket } from './Basket'

export const BasketIndicator = () => {
  const itemsAmount = useAppSelector(selectBasketItems)

  if (itemsAmount === 0) return null
  return <Basket amount={itemsAmount} />
}
