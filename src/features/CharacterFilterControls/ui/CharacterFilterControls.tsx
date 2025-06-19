import {
  sortStatusOptions,
  sortGenderOptions,
  useSort,
  CharacterFilterControlsProps,
} from '../model'
import classes from './CharacterFilterControls.module.css'
import { FilterDropdown, FilterInput } from 'shared'
import { useEffect } from 'react'

export const CharacterFilterControls = ({
  setFilters,
  setPage,
}: CharacterFilterControlsProps) => {
  const { sortedBy, handleSort } = useSort()

  useEffect(() => {
    setFilters(sortedBy)
    setPage(1)
  }, [sortedBy, setFilters, setPage])

  const handleSpeciesChange = (species: string) => {
    handleSort({ species })
  }
  const handleNameChange = (name: string) => {
    handleSort({ name })
  }

  return (
    <section className="container">
      <h2 className="title_2">NEW ARRIVALS</h2>
      <article className={classes.dropdown__wrap}>
        <FilterDropdown
          options={sortStatusOptions}
          selectedValue={sortedBy.status}
          onSelect={(type) => handleSort({ status: type })}
        />
        <FilterDropdown
          options={sortGenderOptions}
          selectedValue={sortedBy.gender}
          onSelect={(type) => handleSort({ gender: type })}
        />
      </article>
      <article className={classes.input__wrap}>
        <FilterInput
          label="Name"
          value={sortedBy.name || ''}
          placeholder="Enter name"
          onChange={handleNameChange}
        />
        <FilterInput
          label="Species"
          value={sortedBy.species || ''}
          placeholder="Enter species"
          onChange={handleSpeciesChange}
        />
      </article>
    </section>
  )
}
