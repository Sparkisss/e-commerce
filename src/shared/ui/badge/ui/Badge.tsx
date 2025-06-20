import { selestTotalItemCount } from 'entities/basketSlice'
import { useAppSelector } from 'shared/types/redux'
import { BadgeProps } from '../model/types'
import classes from './Badge.module.css'

export const Badge = ({ amount }: BadgeProps) => {
  const totalItems = useAppSelector(selestTotalItemCount)
  return (
    <article className="container">
      <h3 className={classes.title}>Basket</h3>
      <div className={classes.text}>
        {amount}({totalItems}) goods
      </div>
    </article>
  )
}
