import { CardProps, useCardActions } from '../model'
import { useAppDispatch } from 'shared/types/redux'
import classes from './Card.module.css'
import { add, remove } from 'entities'
import { Button } from 'shared'

export const Card = ({ character, onDetailsClick }: CardProps) => {
  const { name, gender, image, location, origin, species, status } = character

  const { handleDetailsClick } = useCardActions(character, onDetailsClick)
  const dispatch = useAppDispatch()
  return (
    <article className={classes.card}>
      <figure className={classes.card__body}>
        <img
          className={classes.card__img}
          src={image || '/icons/default-avatar.svg'}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = '/icons/default-avatar.svg'
          }}
        />
        <figcaption className={classes.card__content}>
          <h3>
            {name} - {gender}
          </h3>
          <div>
            from: {origin.name}, live: {location.name}
          </div>
          <div>
            species: {species} status: {status}
          </div>
        </figcaption>
        <div className={classes.card__controls}>
          <Button className={classes.btn} onClick={() => dispatch(add())}>
            Add
          </Button>
          <Button className={classes.btn} onClick={() => dispatch(remove())}>
            Del
          </Button>
          <img
            className={classes.card__controls_show}
            src="/myIcon/down.svg"
            alt="Show more info"
            onClick={handleDetailsClick}
          />
        </div>
      </figure>
    </article>
  )
}
