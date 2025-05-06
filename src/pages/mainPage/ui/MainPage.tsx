import { Arrivals, Header, Basket, Promo, Brands } from 'widgets'
import { useBasket } from 'shared/hooks'

export const MainPage = () => {
  const { amount, addItem, removeItem } = useBasket()

  return (
    <div className="container">
      <Header />
      <Promo />
      <Brands />
      <Arrivals addItem={addItem} removeItem={removeItem} />
      {amount > 0 && <Basket amount={amount} />}
    </div>
  )
}
