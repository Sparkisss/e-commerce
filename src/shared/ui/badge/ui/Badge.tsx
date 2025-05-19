import { BadgeProps } from '../model/types'
import classes from './Badge.module.css'

export const Badge = ({ amount }: BadgeProps) => {
  return (
    <article className="container">
      <h3 className={classes.title}>Basket</h3>
      <div className={classes.text}>{amount} goods</div>
    </article>
  )
}
