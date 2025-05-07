import classes from './NotFound.module.css'

export const NotFound = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <p className={classes.highlight}>Страница не найдена</p>
    </div>
  )
}
