import { createSlice } from '@reduxjs/toolkit'
import { CharacterSliceType } from 'shared'

const initialState: CharacterSliceType = {
  items: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, actions) => {
      const itemId = actions.payload
      const existingItem = state.items.find((item) => item.id === itemId)
      if (!existingItem) state.items.push({ id: itemId, amount: 1 })
    },
    remove: (state, actions) => {
      const itemId = actions.payload
      state.items = state.items.filter((item) => item.id !== itemId)
    },
    incrementAmount: (state, action) => {
      const itemId = action.payload
      const existingItem = state.items.find((item) => item.id === itemId)
      if (existingItem) existingItem.amount += 1
    },
    decrementAmount: (state, action) => {
      const itemId = action.payload
      const existingItem = state.items.find((item) => item.id === itemId)
      if (existingItem) existingItem.amount -= 1
    },
  },
})

export const { add, remove, incrementAmount, decrementAmount } =
  basketSlice.actions
export const basketReducer = basketSlice.reducer
