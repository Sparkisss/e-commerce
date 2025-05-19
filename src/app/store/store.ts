import { characterApi } from 'entities/character/api/characterApiSlice'
import { basketReducer, favoriteReducer } from 'entities'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    favorite: favoriteReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
