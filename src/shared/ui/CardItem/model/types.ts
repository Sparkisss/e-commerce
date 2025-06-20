import { Character } from 'shared'

export interface ItemProps {
  character: Character
}

export interface StatusProps {
  characterStatus: 'alive' | 'dead' | 'unknown'
}

export interface Id {
  id: number
}
