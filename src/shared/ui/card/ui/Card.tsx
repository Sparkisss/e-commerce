import { useAppDispatch, useAppSelector } from 'shared/types/redux'
import { CardProps, useCardActions } from '../model'
import { add, selectIsInBasket } from 'entities'
import { useNavigate } from 'react-router'
import classes from './Card.module.css'
import { Button } from 'shared'

export const Card = ({ character, onDetailsClick }: CardProps) => {
  const { name, gender, image, location, origin, species, status, id } =
    character
  const navigate = useNavigate()
  const isInBasket = useAppSelector(selectIsInBasket(id))
  const { handleDetailsClick } = useCardActions(character, onDetailsClick)
  const dispatch = useAppDispatch()

  const handleAddToBasket = () => {
    if (isInBasket) {
      navigate('/basket')
    } else {
      dispatch(add(id))
    }
  }

  return (
    <article className={classes.card}>
      <figure className={classes.card__body}>
        <img
          className={classes.card__img}
          src={image || '/icons/default-avatar.svg'}
          alt={name}
          onClick={handleDetailsClick}
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
          <Button className={classes.btn} onClick={handleAddToBasket}>
            {isInBasket ? 'Basket' : 'Add'}
          </Button>
        </div>
      </figure>
    </article>
  )
}
