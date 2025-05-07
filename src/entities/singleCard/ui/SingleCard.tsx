import classes from './SingleCard.module.css'
import { useFetchCharacter } from '../model'
import { Loader, Error } from 'shared/ui'
import { useParams } from 'react-router'
import { Card, useBasket } from 'shared'

export const SingleCard = () => {
  const { addItem, removeItem } = useBasket()
  const { cardId } = useParams<{ cardId: string }>()
  const { data, loading, error } = useFetchCharacter(cardId || '1')

  console.log(data)
  if (loading) return <Loader />
  if (error) return <Error error={error} />

  if (!data) {
    return <Error error="Персонаж не найден" />
  }

  return (
    <section className={classes.card__wrapper}>
      <ul className={classes.episode__list}>
        {data.episode.map((ep, i) => (
          <li key={i}>{ep}</li>
        ))}
      </ul>
      <Card
        addItem={addItem}
        removeItem={removeItem}
        character={data}
        onDetailsClick={() => window.history.back()}
      />
    </section>
  )
}
