import {
  remove,
  addFavorite,
  removeFavorite,
  selectedFavorItemIds,
} from 'entities'
import { useAppDispatch, useAppSelector } from 'shared/types/redux'
import classes from './CardItem.module.css'
import { ItemProps } from '../model/types'

export const CardInfo = ({ character }: ItemProps) => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(selectedFavorItemIds)
  const isFavorite = favorites.includes(character.id)

  const handleClickIcon = () => {
    if (isFavorite) dispatch(removeFavorite(character.id))
    else dispatch(addFavorite(character.id))
  }

  return (
    <>
      <img src={character.image} alt="image" />
      <div className={classes.info}>
        <div className={classes.name}>{character.name} - human</div>
        <div className={classes.text}>gender: {character.gender}</div>
        <div className={classes.text}>location: {character.location.name}</div>
        <div>
          <img
            onClick={handleClickIcon}
            className={`${isFavorite ? classes.imgPick : classes.img}`}
            src="/myIcon/heart.svg"
            alt="add to selected"
          />
          <img
            onClick={() => dispatch(remove(character.id))}
            className={classes.img}
            src="/myIcon/trash.svg"
            alt="delete"
          />
        </div>
      </div>
    </>
  )
}
