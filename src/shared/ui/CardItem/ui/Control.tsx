import { incrementAmount, decrementAmount } from 'entities/basketSlice'
import { useAppDispatch, useAppSelector } from 'shared/types/redux'
import { selectBasketItemAmount } from 'entities/basketSlice'
import classes from './CardItem.module.css'
import { Id } from '../model/types'

export const Control = ({ id }: Id) => {
  const dispatch = useAppDispatch()
  const amount = useAppSelector(selectBasketItemAmount(id))

  const onClickIncrement = () => {
    if (amount >= 9) console.log('to dig number')
    else dispatch(incrementAmount(id))
  }

  const onClickDecrement = () => {
    if (amount <= 1) console.log('Can not be smaller than 1')
    else dispatch(decrementAmount(id))
  }

  return (
    <article className={classes.control}>
      <div
        className={`${amount === 1 ? classes.disable : classes.active__minus}`}
        onClick={onClickDecrement}
      >
        -
      </div>
      <div>{amount}</div>
      <div
        className={`${amount === 9 ? classes.disable : classes.active__plus}`}
        onClick={onClickIncrement}
      >
        +
      </div>
    </article>
  )
}
