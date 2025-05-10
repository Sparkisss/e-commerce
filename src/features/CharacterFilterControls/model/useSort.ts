import { CharacterFilters } from 'shared'
import { useState } from 'react'

export const useSort = () => {
  const [sortedBy, setSortedBy] = useState<CharacterFilters>({
    status: 'unknown',
    gender: 'unknown',
    species: '',
    name: '',
  })

  const handleSort = (type: CharacterFilters) => {
    setSortedBy((prevType) => ({
      ...prevType,
      ...type,
    }))
  }

  return { sortedBy, handleSort }
}
