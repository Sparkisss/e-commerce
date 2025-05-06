import { useState } from 'react'

export const useBasket = () => {
  const [amount, setAmount] = useState(0)
  const addItem = () => setAmount((prev) => prev + 1)
  const removeItem = () => setAmount((prev) => Math.max(0, prev - 1))

  return { amount, addItem, removeItem }
}
