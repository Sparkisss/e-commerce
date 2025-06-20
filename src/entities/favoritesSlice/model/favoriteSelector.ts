import { CharacterSliceType } from 'shared/types'
import { createSelector } from 'reselect'

export const selectedFavorItemIds = createSelector(
  [(state: { favorite: CharacterSliceType }) => state.favorite.items],
  (items) => items.map((item) => item.id)
)

export const selectedFavorItem = (state: { favorite: CharacterSliceType }) =>
  state.favorite.items.length
