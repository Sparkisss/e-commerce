import { useAppSelector } from 'shared/types/redux'
import { Basket } from './Basket'

export const BasketIndicator = () => {
  const amount = useAppSelector((state) => state.basket.value)

  if (amount === 0) return null
  return <Basket amount={amount} />
}
