import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) {
          if (res.status === 404) {
            setData({ results: [] } as T)
            setError(null)
            return
          } else throw new Error('Network error')
        }
        const json = await res.json()
        setData(json)
        setError(null)
      } catch (error) {
        let errorMessage = 'Неизвестная ошибка'
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            return
          }
          errorMessage = error.message
        }
        setError(errorMessage)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [url])
  return { data, loading, error }
}
