import { CharacterFilters } from 'shared'

export enum SortStatusType {
  UNKNOWN = 'unknown',
  ALIVE = 'alive',
  DEAD = 'dead',
}

export enum SortGenderType {
  MALE = 'male',
  FEMALE = 'female',
  GENDERLESS = 'genderless',
  UNKNOWN = 'unknown',
}

export type CharacterFilterControlsProps = {
  setFilters: (filters: CharacterFilters) => void
  setPage: (page: number) => void
}
