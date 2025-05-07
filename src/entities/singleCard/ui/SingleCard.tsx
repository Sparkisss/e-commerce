import { useFetchCharacter } from '../model'
import { Loader, Error } from 'shared/ui'
import { useParams } from 'react-router'
import { Card, useBasket } from 'shared'

export const SingleCard = () => {
  const { addItem, removeItem } = useBasket()
  const { cardId } = useParams<{ cardId: string }>()
  const { data, loading, error } = useFetchCharacter(cardId || '1')

  if (loading) return <Loader />
  if (error) return <Error error={error} />

  if (!data) {
    return <Error error="Персонаж не найден" />
  }

  return <Card addItem={addItem} removeItem={removeItem} character={data} />
}
