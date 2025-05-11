import { Pagination, usePagination } from 'shared'
import { Arrivals } from 'widgets'
import { useState } from 'react'

export const Catalogue = () => {
  const [totalPage, setTotalPage] = useState(1)
  const { currentPage, goToNextPage, goToPrevPage, isFirstPage, isLastPage } =
    usePagination({ totalPages: totalPage })

  return (
    <main>
      <Arrivals currentPage={currentPage} setTotalPage={setTotalPage} />
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
    </main>
  )
}
