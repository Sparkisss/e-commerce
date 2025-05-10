import { ArrivalsProps, useFetchCharacters } from '../model'
import { Loader, Error, CharacterFilters } from 'shared'
import { useState, useCallback, useEffect } from 'react'
import { CharacterList } from 'entities/characterList'
import { CharacterFilterControls } from 'features'

export const Arrivals = ({
  addItem,
  removeItem,
  currentPage,
  setTotalPage,
}: ArrivalsProps) => {
  const [filters, setFilters] = useState<CharacterFilters>({})
  const { data, loading, error } = useFetchCharacters(filters, currentPage)
  const characters = data?.results || []

  const handleSetFilters = useCallback((newFilters: CharacterFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  useEffect(() => {
    if (data?.info?.pages) {
      setTotalPage(data.info.pages)
    }
  }, [data])

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
