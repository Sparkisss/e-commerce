import { SortType } from '../model'
import { useState } from 'react'

export const useSort = () => {
  const [open, setOpen] = useState(false)
  const [sortedBy, setSortedBy] = useState<SortType>(SortType.ALPHABET)

  const toggleOpen = () => setOpen((prev) => !prev)

  const handleSort = (type: SortType) => {
    setSortedBy(type)
    setOpen(false)
  }

  return { open, sortedBy, toggleOpen, handleSort }
}
