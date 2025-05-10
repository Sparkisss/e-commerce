import { ArrivalsProps, useFetchCharacters } from '../model'
import { Loader, Error, CharacterFilters } from 'shared'
import { CharacterList } from 'entities/characterList'
import { CharacterFilterControls } from 'features'
import { useState, useCallback } from 'react'

export const Arrivals = ({ addItem, removeItem }: ArrivalsProps) => {
  const [filters, setFilters] = useState<CharacterFilters>({})
  const { data, loading, error } = useFetchCharacters(filters)
  const characters = data?.results || []

  const handleSetFilters = useCallback((newFilters: CharacterFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <section className="container">
      <CharacterFilterControls setFilters={handleSetFilters} />
      <CharacterList
        characters={characters}
        addItem={addItem}
        removeItem={removeItem}
      />
    </section>
  )
}
