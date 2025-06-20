import { CardItemStatus } from './CardItemStatus'
import classes from './CardItem.module.css'
import { ItemProps } from '../model/types'
import { CardInfo } from './CardInfo'
import { Control } from './Control'
import clsx from 'clsx'

export const CardItem = ({ character }: ItemProps) => {
  return (
    <article className={clsx(classes.wrapper, 'container')}>
      <CardInfo character={character} />
      <Control id={character.id} />
      <CardItemStatus characterStatus={character.status} />
    </article>
  )
}
