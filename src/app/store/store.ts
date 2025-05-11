import { characterApi } from 'entities/character/api/characterApiSlice'
import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from 'entities'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
