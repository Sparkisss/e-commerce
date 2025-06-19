import { FilterDropdownProps } from '../model/types'
import classes from './FilterDropdown.module.css'
import { useState } from 'react'

export const FilterDropdown = <T,>({
  options,
  selectedValue,
  onSelect,
}: FilterDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handlePick = (type: T) => {
    onSelect(type)
    setIsOpen(false)
  }

  return (
    <article className={classes.popup}>
      <div className={classes.popup__menu}>
        <img
          onClick={handleClick}
          className={classes.popup__menu_img}
          src="myIcon/down.svg"
          alt="Open"
        />
        <h3>Sorted by: {String(selectedValue)}</h3>
      </div>
      {isOpen && (
        <ul className={classes.popup__list}>
          {options.map(({ type, label }) => (
            <li key={String(type)} onClick={() => handlePick(type)}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
