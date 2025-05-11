import { createSlice } from '@reduxjs/toolkit'

interface BasketState {
  value: number
}

const initialState: BasketState = {
  value: 0,
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1
    },
    remove: (state) => {
      state.value -= 1
    },
  },
})

export const { add, remove } = basketSlice.actions
export const basketReducer = basketSlice.reducer
