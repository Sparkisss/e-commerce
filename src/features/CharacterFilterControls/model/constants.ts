import { SortStatusType, SortGenderType } from './types'

export const sortStatusOptions: { type: SortStatusType; label: string }[] = [
  { type: SortStatusType.UNKNOWN, label: 'unknown' },
  { type: SortStatusType.ALIVE, label: 'alive' },
  { type: SortStatusType.DEAD, label: 'dead' },
]

export const sortGenderOptions: { type: SortGenderType; label: string }[] = [
  { type: SortGenderType.MALE, label: 'male' },
  { type: SortGenderType.FEMALE, label: 'female' },
  { type: SortGenderType.GENDERLESS, label: 'genderless' },
  { type: SortGenderType.UNKNOWN, label: 'unknown' },
]
