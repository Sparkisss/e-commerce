import classes from './Header.module.css'
import { Link } from 'react-router'
import { useState } from 'react'

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img src="/icons/logo.svg" alt="Logo" />
        <span>Fashion</span>
      </div>

      <nav
        className={`${classes.header__nav} ${isActive ? classes.header__navActive : ''}`}
      >
        <ul>
          <li>
            <Link to="/catalogue">CATALOGUE</Link>
          </li>
          <li>
            <Link to="/">FASHION</Link>
          </li>
          <li>
            <Link to="/basket">BASKET</Link>
          </li>
          <li>
            <Link to="/selected">SELECTED</Link>
          </li>
          <li>
            <Link to="/login" className={classes.header__nav_btn}>
              SIGN UP
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`${classes.burger} ${isActive ? classes.burgerActive : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
      </div>
    </header>
  )
}
