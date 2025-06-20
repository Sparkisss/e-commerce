import { createSlice } from '@reduxjs/toolkit'
import { CharacterSliceType } from 'shared'

const initialState: CharacterSliceType = {
  items: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, actions) => {
      const itemId = actions.payload
      const existingItem = state.items.find((item) => item.id === itemId)
      if (!existingItem) state.items.push({ id: itemId, amount: 1 })
    },
    removeFavorite: (state, actions) => {
      const itemId = actions.payload
      state.items = state.items.filter((item) => item.id !== itemId)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer
