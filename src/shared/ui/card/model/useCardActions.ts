import { useNavigate } from 'react-router'
import { Character } from 'shared'

export const useCardActions = (
  character: Character,
  onDetailsClick?: () => void
) => {
  const navigate = useNavigate()
  const handleDetailsClick = () => {
    if (onDetailsClick) {
      onDetailsClick()
    } else {
      navigate(`/catalogue/${character.id}`)
    }
  }
  return { handleDetailsClick }
}
