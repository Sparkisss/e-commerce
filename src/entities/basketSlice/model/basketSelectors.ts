import { ItemSliceType } from 'shared'

export const selectIsInBasket =
  (id: string) => (state: { basket: ItemSliceType }) =>
    state.basket.items.includes(id)

export const selectedBasketItemIds = (state: { basket: ItemSliceType }) =>
  state.basket.items

export const selectBasketItems = (state: { basket: ItemSliceType }) =>
  state.basket.items.length
