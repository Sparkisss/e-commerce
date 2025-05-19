import { useAppSelector } from 'shared/types/redux'
import { selectedBasketItemIds } from 'entities'
import classes from './Basket.module.css'
import { OrderSummary } from 'widgets'
import { ShowItems } from 'entities'
import { Badge } from 'shared'

export const Basket = () => {
  const items = useAppSelector(selectedBasketItemIds)
  return (
    <main className="container">
      <Badge amount={items.length} />
      <article className={classes.layout}>
        <aside className={classes.sidebar}>
          <OrderSummary />
        </aside>
        <ShowItems items={items} />
      </article>
    </main>
  )
}
