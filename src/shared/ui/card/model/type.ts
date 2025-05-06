export type Character = {
  id?: number
  name: string
  gender: string
  image: string
  species: string
  status: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
}

export type CardProps = {
  character: Character
  addItem: () => void
  removeItem: () => void
}
