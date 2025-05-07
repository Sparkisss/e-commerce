import {
  charactersFilterByCategory,
  ArrivalsProps,
  useFetchCharacters,
} from '../model'
import { CategoryType, Category, Loader, Error } from 'shared'
import classes from './Arrivals.module.css'
import { SortPopup } from 'features'
import { useState } from 'react'
import { Card } from 'shared'

export const Arrivals = ({ addItem, removeItem }: ArrivalsProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')
  const { data, loading, error } = useFetchCharacters()
  const characters = data?.results || []
  const filteredCharacters = charactersFilterByCategory(
    characters,
    activeCategory
  )

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <section className={classes.arrivals}>
      <div className="container">
        <div className={classes.arrivals__header}>
          <h2 className="title_2">NEW ARRIVALS</h2>
          <Category
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <SortPopup />
        </div>
        <div className={classes.arrivals__cards}>
          {filteredCharacters.map((character) => (
            <Card
              key={character.id}
              character={character}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
