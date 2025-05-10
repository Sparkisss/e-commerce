import { CharacterListProps } from '../model/type'
import classes from './CharacterList.module.css'
import { Card } from 'shared'

export const CharacterList = ({
  characters,
  addItem,
  removeItem,
}: CharacterListProps) => {
  return (
    <article className={classes.arrivals__cards}>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </article>
  )
}
