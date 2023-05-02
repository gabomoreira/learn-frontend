import { useNavigate } from "react-router-dom"

interface Props {
    src: string
    size: 'lg' | 'xs'
    name: string
}

export const Avatar = ({src, size, name}: Props) => {
  const navigate = useNavigate()
  const sizeImg = size === 'lg' ? 'w-52 h-53' : 'w-10 h-10'

  function handleGoProfilePage() {
    if (size === 'xs') {
      navigate('/profile')
    }
  }

  return (
    <img 
      onClick={handleGoProfilePage}
      src={src} 
      alt={name} 
      className={`${sizeImg} rounded-full ${size === 'xs' && 'cursor-pointer'}`} 
    />
  )
}
