import { PaginationProps } from '../model/type'
import classes from './Pagination.module.css'

export const Pagination = ({ pagination }: PaginationProps) => {
  return (
    <section className={classes.pagination__wrapper}>
      <div className={classes.pagination__info}>
        <h3>Number of pages: {pagination.totalPage}</h3>
        <div>Page: {pagination.currentPage}</div>
      </div>
      <div className={classes.pagination__control}>
        <img
          onClick={pagination.goToPrevPage}
          src="/myIcon/down.svg"
          alt="Previous"
        />
        <img
          onClick={pagination.goToNextPage}
          src="/myIcon/down.svg"
          alt="Next"
        />
      </div>
    </section>
  )
}
