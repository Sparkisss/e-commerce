import type { Character } from 'shared'
import { useFetch } from 'shared'

export const useFetchCharacter = (id: string) => {
  return useFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`)
}
