import classes from './Header.module.css'
import { Link } from 'react-router'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__row}>
          <div className={classes.header__logo}>
            <img src="/icons/logo.svg" alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className={classes.header__nav}>
            <ul>
              <li>
                <Link to="/catalogue">CATALOGUE</Link>
              </li>
              <li>
                <Link to="/">FASHION</Link>
              </li>
              <li>
                <Link to="/">FAVOURITE</Link>
              </li>
              <li>
                <Link to="/">LIFESTYLE</Link>
              </li>
              <li>
                <Link to="/login" className={classes.header__nav_btn}>
                  SIGN UP
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
