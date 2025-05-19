import { Character } from 'shared'

export interface ItemProps {
  character: Character
}

export interface StatusProps {
  characterStatus: 'alive' | 'dead' | 'unknown'
}
