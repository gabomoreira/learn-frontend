import { useNavigate } from "react-router-dom"

interface Props {
    src: string
    size: 'lg' | 'xs'
    name: string
    isLoading: boolean
}

export const Avatar = ({src, size, name, isLoading}: Props) => {
  const navigate = useNavigate()
  const sizeImg = size === 'lg' ? 'w-52 h-52' : 'w-10 h-10'
  const defaultImg = 'https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-512x488-rddkk3u9.png'

  function handleGoProfilePage() {
    if (size === 'xs') {
      navigate('/profile')
    }
  }

  return (
    <>
      {!isLoading ? (
        <img 
        onClick={handleGoProfilePage}
        src={src ? src : defaultImg} 
        alt={name} 
        className={`${sizeImg} rounded-full ${size === 'xs' && 'cursor-pointer'}`} 
      />
      ) : (
          <div 
            className={`
              ${sizeImg} 
              loader 
              m-auto 
              border-8 
              rounded-full 
              animate-spin 
              animate-pulse 
              bg-gray-700 
              border-t-8 
              border-gray-500
              `} 
          />
      )}
  </>
  )
}
