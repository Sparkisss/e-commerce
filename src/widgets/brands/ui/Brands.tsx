import classes from './Brands.module.css'

export const Brands = () => {
  return (
    <section className={classes.brands}>
      <div className="container">
        <ul className={classes.brands__list}>
          <li>
            <a href="#!">
              <img src="/brands/HM.png" alt="hm" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/brands/Obey.png" alt="obey" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/brands/Levis.png" alt="levis" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/brands/Amazon.png" alt="amazon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/brands/Lacoste.png" alt="lacoste" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/brands/Shopify.png" alt="shopify" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
