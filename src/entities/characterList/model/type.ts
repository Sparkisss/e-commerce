import { Character } from 'shared'

export type CharacterListProps = {
  characters: Character[]
  addItem: () => void
  removeItem: () => void
}
