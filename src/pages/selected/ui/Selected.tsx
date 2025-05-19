import { selectedFavorItemIds, ShowItems } from 'entities'
import { useAppSelector } from 'shared/types/redux'
import classes from './Selected.module.css'
import { OrderSummary } from 'widgets'
import { Badge } from 'shared'

export const Selected = () => {
  const items = useAppSelector(selectedFavorItemIds)
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
