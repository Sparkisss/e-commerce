import { Button } from 'shared/ui/button'
import { CardProps } from '../model/type'
import classes from './Card.module.css'

export const Card = ({ character, addItem, removeItem }: CardProps) => {
  const { name, gender, image, location, origin, species, status } = character
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
          <h3 className={classes.card__title}>
            {name} - {gender}
          </h3>
          <div className={classes.card__muted}>
            from: {origin.name}, live: {location.name}
          </div>
          <div className={classes.card__muted}>
            species: {species} status: {status}
          </div>
        </figcaption>
        <div className={classes.card__controls}>
          <Button className={classes.btn} onClick={addItem}>
            Add
          </Button>
          <Button className={classes.btn} onClick={removeItem}>
            Del
          </Button>
        </div>
      </figure>
    </article>
  )
}
