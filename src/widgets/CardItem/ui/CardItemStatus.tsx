import { StatusProps } from '../model/types'
import classes from './CardItem.module.css'

export const CardItemStatus = ({ characterStatus }: StatusProps) => {
  const statusClass = {
    alive: classes.statusAlive,
    dead: classes.statusDead,
    unknown: classes.statusUnknown,
  }[characterStatus.toLowerCase()]

  return (
    <div className={classes.status}>
      <div className={statusClass}>Status: {characterStatus}</div>
    </div>
  )
}
