import { useCallback, useState } from 'react'

type UsePaginationProps = {
  initialPage?: number
  totalPages?: number
}

export const usePagination = ({
  initialPage = 1,
  totalPages = 1,
}: UsePaginationProps = {}) => {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const setPage = useCallback(
    (page: number) => {
      const safePage = Math.max(1, Math.min(page, totalPages))
      setCurrentPage(safePage)
    },
    [totalPages]
  )

  return {
    currentPage,
    setPage,
    goToNextPage,
    goToPrevPage,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
  }
}
