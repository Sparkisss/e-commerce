import { useBasket, Pagination, usePagination } from 'shared'
import { Arrivals, Basket } from 'widgets'
import { useState } from 'react'

export const Catalogue = () => {
  const [totalPage, setTotalPage] = useState(1)
  const { currentPage, goToNextPage, goToPrevPage, isFirstPage, isLastPage } =
    usePagination({ totalPages: totalPage })

  const { amount, addItem, removeItem } = useBasket()
  return (
    <main>
      <Arrivals
        addItem={addItem}
        removeItem={removeItem}
        currentPage={currentPage}
        setTotalPage={setTotalPage}
      />
      <Pagination
        pagination={{
          totalPage,
          currentPage,
          goToNextPage,
          goToPrevPage,
          isFirstPage,
          isLastPage,
        }}
      />
      {amount > 0 && <Basket amount={amount} />}
    </main>
  )
}
