export type SortOption<T> = {
  type: T
  label: string
}

export type FilterDropdownProps<T> = {
  options: SortOption<T>[]
  selectedValue: T
  onSelect: (type: T) => void
}
