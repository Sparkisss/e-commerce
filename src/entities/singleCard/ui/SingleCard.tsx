import classes from './SingleCard.module.css'
import { useFetchCharacter } from '../model'
import { Loader, Error, Card } from 'shared'
import { useParams } from 'react-router'

export const SingleCard = () => {
  const { cardId } = useParams<{ cardId: string }>()
  const { data, loading, error } = useFetchCharacter(cardId || '1')

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
      <Card character={data} onDetailsClick={() => window.history.back()} />
    </section>
  )
}
