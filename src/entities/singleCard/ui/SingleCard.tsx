import { useGetCharacterByIdQuery } from 'entities/character/api/characterApiSlice'
import classes from './SingleCard.module.css'
import { Loader, Error, Card } from 'shared'
import { useParams } from 'react-router'

export const SingleCard = () => {
  const { cardId } = useParams<{ cardId: string }>()
  const { data, isLoading, isError, error } = useGetCharacterByIdQuery(
    cardId || '1'
  )

  if (isLoading) return <Loader />
  if (isError) return <Error error={error} />
  if (!data) {
    return <Error error="Character was not found" />
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
