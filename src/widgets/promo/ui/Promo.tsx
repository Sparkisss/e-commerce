import classes from './Promo.module.css'
import classNames from 'classnames'

export const Promo = () => {
  return (
    <section className={classes.promo}>
      <div className="container">
        <div className={classes.promo__content}>
          <div>
            <div className={classes.promo__title}>
              <span className={classes.highlight}>
                <span>LET’S</span>
              </span>
              EXPLORE
              <span
                className={classNames(
                  classes.highlight,
                  classes['highlight__yellow']
                )}
              >
                <span> UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className={classes.promo__desc}>
              Live for Influential and Innovative fashion!
            </div>
            <div className={classes.promo__btn_wrapper}>
              <a href="#!" className={classes.promo__btn}>
                Shop Now
              </a>
            </div>
          </div>
          <div>
            <img src="/images/header-img.jpg" alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  )
}
