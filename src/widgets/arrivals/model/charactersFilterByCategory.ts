import { Character } from 'shared'

export const charactersFilterByCategory = (
  characters: Character[],
  category: string
): Character[] => {
  if (category === 'all') return characters
  return characters.filter((character) =>
    character.species.toLowerCase().includes(category.toLowerCase())
  )
}
