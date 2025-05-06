// imports
import { CATEGORIES } from 'shared/const/categories'
import { CategoryProps } from '../model/types'
import classes from './Category.module.css'
import classNames from 'classnames'

export const Category = ({
  activeCategory,
  setActiveCategory,
}: CategoryProps) => {
  return (
    <aside>
      <ul className={classes.category}>
        {CATEGORIES.map((category) => (
          <li
            onClick={() => setActiveCategory(category)}
            key={category}
            className={classNames(classes.category__item, {
              [classes.category__active]: activeCategory === category,
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  )
}
