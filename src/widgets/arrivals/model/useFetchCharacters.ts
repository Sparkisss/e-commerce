import type { Character } from 'shared'
import { useFetch } from 'shared'

export const useFetchCharacters = () => {
  return useFetch<{ results: Character[] }>(
    'https://rickandmortyapi.com/api/character'
  )
}
