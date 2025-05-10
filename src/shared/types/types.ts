export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export type CharacterFilters = {
  status?: 'alive' | 'dead' | 'unknown'
  gender?: 'female' | 'male' | 'genderless' | 'unknown'
  name?: string
  species?: string
}
