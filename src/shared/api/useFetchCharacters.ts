import { Character } from 'shared/ui/card/model/type'
import { useEffect, useState } from 'react'

export const useFetchCharacters = () => {
  const [data, setData] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character', {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error('Ошибка сети')
        const json = await res.json()
        if (!Array.isArray(json.results))
          throw new Error('Некорректный формат данных')
        setData(json.results)
      } catch (error) {
        let errorMessage = 'Неизвестная ошибка'
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            return
          }
          errorMessage = error.message
        }
        setError(errorMessage)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [])

  return { data, loading, error }
}
