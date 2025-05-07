import { Character } from 'shared'

export type CardProps = {
  character: Character
  addItem: () => void
  removeItem: () => void
  onDetailsClick?: () => void
}
