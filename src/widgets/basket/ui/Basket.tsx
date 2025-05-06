import classes from './Basket.module.css'

export const Basket = ({ amount }: { amount: number }) => {
  return (
    <section className={classes.basket__wrap}>
      <img src="/myIcon/basket-shopping-simple.svg" alt="Basket" />
      <div>{amount}</div>
    </section>
  )
}
