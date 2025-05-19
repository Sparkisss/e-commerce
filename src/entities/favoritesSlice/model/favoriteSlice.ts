import { createSlice } from '@reduxjs/toolkit'
import { ItemSliceType } from 'shared'

const initialState: ItemSliceType = {
  items: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, actions) => {
      const itemId = actions.payload
      if (!state.items.includes(itemId)) state.items.push(itemId)
    },
    removeFavorite: (state, actions) => {
      const itemId = actions.payload
      state.items = state.items.filter((id) => id !== itemId)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer
