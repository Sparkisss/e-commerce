import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Character, ApiResponse } from 'shared'

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getCharacterById: builder.query<Character, string>({
      query: (id) => `character/${id}`,
    }),
    getMultipleCharacters: builder.query<Character[], number[]>({
      query: (ids) => `character/${ids.join(' ,')}`,
    }),
    getCharacters: builder.query<
      { info: ApiResponse['info']; results: Character[] },
      {
        page?: number
        name?: string
        status?: string
        species?: string
        gender?: string
      }
    >({
      query: ({ page = 1, name, status, species, gender }) => {
        const params = new URLSearchParams()

        if (name) params.set('name', name)
        if (status && status !== 'unknown') params.set('status', status)
        if (species) params.set('species', species)
        if (gender && gender !== 'unknown') params.set('gender', gender)
        params.set('page', page.toString())

        return `character?${params.toString()}`
      },
    }),
  }),
})

export const {
  useGetCharacterByIdQuery,
  useGetMultipleCharactersQuery,
  useGetCharactersQuery,
} = characterApi
