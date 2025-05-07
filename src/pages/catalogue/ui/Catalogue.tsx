import { useBasket } from 'shared/hooks'
import { Arrivals } from 'widgets'
import { Basket } from 'widgets'

export const Catalogue = () => {
  const { amount, addItem, removeItem } = useBasket()
  return (
    <main>
      <Arrivals addItem={addItem} removeItem={removeItem} />
      {amount > 0 && <Basket amount={amount} />}
    </main>
  )
}
