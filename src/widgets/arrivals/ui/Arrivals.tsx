import { useGetCharactersQuery } from 'entities/character/api/characterApiSlice'
import { Loader, Error, CharacterFilters } from 'shared'
import { useState, useCallback, useEffect } from 'react'
import { CharacterFilterControls } from 'features'
import { CharacterList } from 'entities'
import { ArrivalsProps } from '../model'

export const Arrivals = ({ currentPage, setTotalPage }: ArrivalsProps) => {
  const [filters, setFilters] = useState<CharacterFilters>({})
  const { data, error, isLoading, isError } = useGetCharactersQuery({
    page: currentPage,
    ...filters,
  })
  const characters = data?.results || []

  const handleSetFilters = useCallback((newFilters: CharacterFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  useEffect(() => {
    if (data?.info?.pages) {
      setTotalPage(data.info.pages)
    }
  }, [data, setTotalPage])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error error={error} />
  }

  return (
    <section className="container">
      <CharacterFilterControls setFilters={handleSetFilters} />
      <CharacterList characters={characters} />
    </section>
  )
}
