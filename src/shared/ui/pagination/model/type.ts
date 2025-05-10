export type PaginationProps = {
  pagination: {
    totalPage: number
    currentPage: number
    goToNextPage: () => void
    goToPrevPage: () => void
    isFirstPage: boolean
    isLastPage: boolean
  }
}
