import { sortOptions, useSort } from '../model'
import classes from './SortPopup.module.css'

export const SortPopup = () => {
  const { open, sortedBy, toggleOpen, handleSort } = useSort()
  return (
    <article className={classes.popup}>
      <div className={classes.popup__menu}>
        <img
          onClick={toggleOpen}
          className={classes.popup__menu_img}
          src="myIcon/down.svg"
          alt=""
        />
        <h3 className={classes.popup__menu_title}>Sorted by : {sortedBy}</h3>
      </div>
      {open && (
        <ul className={classes.popup__list}>
          {sortOptions.map(({ type, label }) => (
            <li key={type} onClick={() => handleSort(type)}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
