import { useGetMultipleCharactersQuery } from 'entities/character/api/characterApiSlice'
import { Error, ItemSliceType, Loader } from 'shared'
import { CardItem } from 'shared'

export const ShowItems = ({ items }: ItemSliceType) => {
  const { data, isLoading, isError, error } =
    useGetMultipleCharactersQuery(items)

  if (isLoading) return <Loader />
  if (isError) return <Error error={error} />

  const dataArray = Array.isArray(data) ? data : data ? [data] : []

  return (
    <article>
      {items.length > 0 ? (
        dataArray?.map((item) => <CardItem key={item.id} character={item} />)
      ) : (
        <div>Empty basket</div>
      )}
    </article>
  )
}
