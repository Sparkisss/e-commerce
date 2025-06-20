import { CharacterSliceType } from 'shared'
import { createSelector } from 'reselect'

// Базовый селектор для корзины
const selectBasket = (state: { basket: CharacterSliceType }) => state.basket
// Селектор: получает все элементы корзины
const selectBasketItems = createSelector(
  [selectBasket],
  (basket) => basket.items
)
// Селектор: проверяет, есть ли товар в корзине
export const selectIsInBasket = (id: number) =>
  createSelector([selectBasketItems], (items) =>
    items.some((item) => item.id === id)
  )
// Селектор: получает массив ID товаров из корзины
export const selectBasketItemIds = createSelector(
  [selectBasketItems],
  (items) => items.map((item) => item.id)
)
// Селектор: получает количество товаров в корзине
export const selectBasketItemsCount = createSelector(
  [selectBasketItems],
  (items) => items.length
)
// Селектор: получает количество конкретного товара по ID
export const selectBasketItemAmount = (id: number) =>
  createSelector([selectBasketItems], (items) => {
    const item = items.find((item) => item.id === id)
    return item ? item.amount : 0
  })
// Селектор: общее количество товаров
export const selestTotalItemCount = createSelector(
  [selectBasketItems],
  (items) => {
    return items.reduce((total, item) => total + item.amount, 0)
  }
)
