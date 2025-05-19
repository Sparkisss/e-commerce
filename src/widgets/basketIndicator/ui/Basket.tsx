import classes from './Basket.module.css'
import { Link } from 'react-router'

export const Basket = ({ amount }: { amount: number }) => {
  return (
    <section className={classes.basket__wrap}>
      <Link to="/basket">
        <img src="/myIcon/basket-shopping-simple.svg" alt="Basket" />
      </Link>
      <div>{amount}</div>
    </section>
  )
}
