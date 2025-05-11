import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { SerializedError } from '@reduxjs/toolkit'

type ErrorType = FetchBaseQueryError | SerializedError | string | null

interface ErrorProps {
  error: ErrorType
}

const getErrorMessage = (error: ErrorType): string => {
  if (!error) return 'Неизвестная ошибка'

  if (typeof error === 'string') return error

  if ('status' in error) {
    const status = error.status
    const data = error.data
    if (typeof data === 'string') return `Ошибка: ${data}`
    return `Ошибка запроса (${status})`
  }

  if ('message' in error) {
    return `Ошибка: ${error.message}`
  }

  return 'Неизвестная ошибка'
}

export const Error = ({ error }: ErrorProps) => {
  return <div>Error: {getErrorMessage(error)}</div>
}
