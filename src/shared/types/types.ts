export type Character = {
  id: number
  name: string
  status: 'alive' | 'dead' | 'unknown'
  species: string
  type: string
  gender: 'female' | 'male' | 'genderless' | 'unknown'
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

export type ApiResponse = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export type CharacterFilters = {
  status?: 'alive' | 'dead' | 'unknown'
  gender?: 'female' | 'male' | 'genderless' | 'unknown'
  name?: string
  species?: string
}

export type CharacterSliceItem = {
  id: number
  amount: number
}

export type CharacterSliceType = {
  items: CharacterSliceItem[]
}
