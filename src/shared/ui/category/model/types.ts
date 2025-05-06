import { CategoryType } from 'shared/const/categories'

export type CategoryProps = {
  activeCategory: CategoryType
  setActiveCategory: (category: CategoryType) => void
}
