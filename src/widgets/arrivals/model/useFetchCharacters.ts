import type { Character, ApiResponse } from 'shared'
import { useFetch, CharacterFilters } from 'shared'

export const useFetchCharacters = (
  filters: CharacterFilters = {},
  page = 1
) => {
  const params = new URLSearchParams()
  if (filters.status) {
    const statusValue = filters.status === 'unknown' ? '' : filters.status
    params.set('status', statusValue)
  }
  if (filters.gender) {
    const genderValue = filters.gender === 'unknown' ? '' : filters.gender
    params.set('gender', genderValue)
  }
  if (filters.species) {
    params.set('species', filters.species)
  }
  if (filters.name) {
    params.set('name', filters.name)
  }
  params.set('page', page.toString())
  const queryString = params.toString()
  const url = `https://rickandmortyapi.com/api/character/${queryString ? `?${queryString}` : ''}`
  return useFetch<{ info: ApiResponse['info']; results: Character[] }>(url)
}
