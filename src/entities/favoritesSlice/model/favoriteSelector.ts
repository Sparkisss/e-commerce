import { ItemSliceType } from 'shared/types'

export const selectedFavorItemIds = (state: { favorite: ItemSliceType }) =>
  state.favorite.items

export const selectedFavorItem = (state: { favorite: ItemSliceType }) =>
  state.favorite.items.length
