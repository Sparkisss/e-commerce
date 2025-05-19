import { createSlice } from '@reduxjs/toolkit'
import { itemSliceType } from 'shared'

const initialState: itemSliceType = {
  items: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, actions) => {
      const itemId = actions.payload
      if (!state.items.includes(itemId)) state.items.push(itemId)
    },
    remove: (state, actions) => {
      const itemId = actions.payload
      state.items = state.items.filter((id) => id !== itemId)
    },
  },
})

export const { add, remove } = basketSlice.actions
export const basketReducer = basketSlice.reducer
