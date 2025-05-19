import { useAppSelector } from 'shared/types/redux'
import classes from './OrderSummary.module.css'
import { Button, Checkbox } from 'shared/ui'
import { selectBasketItems } from 'entities'
import { useState } from 'react'

export const OrderSummary = () => {
  const [isAgree, setIsAgree] = useState(false)
  const itemsAmount = useAppSelector(selectBasketItems)
  return (
    <section className={classes.wrapper}>
      <h3>General information</h3>
      <article className={classes.info}>
        <div className={classes.row}>
          <span>Characters</span> <span>{itemsAmount}</span>
        </div>
        <div className={classes.row}>
          <span>My discount</span> <span>37 usd</span>
        </div>
        <div className={classes.row}>
          <span>In total</span> <span>{itemsAmount * 12} usd</span>
        </div>
      </article>
      <Button className={classes.btn} disabled={!isAgree}>
        Order
      </Button>
      <Checkbox isAgree={isAgree} setIsAgree={setIsAgree} />
    </section>
  )
}
