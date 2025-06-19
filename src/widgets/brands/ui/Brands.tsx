import classes from './Brands.module.css'

export const Brands = () => {
  return (
    <section className={classes.brands}>
      <ul className={classes.brands__list}>
        <li>
          <img src="/brands/HM.png" alt="hm" />
        </li>
        <li>
          <img src="/brands/Obey.png" alt="obey" />
        </li>
        <li>
          <img src="/brands/Levis.png" alt="levis" />
        </li>
        <li>
          <img src="/brands/Amazon.png" alt="amazon" />
        </li>
        <li>
          <img src="/brands/Lacoste.png" alt="lacoste" />
        </li>
        <li>
          <img src="/brands/Shopify.png" alt="shopify" />
        </li>
      </ul>
    </section>
  )
}
