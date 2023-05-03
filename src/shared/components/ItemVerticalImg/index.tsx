import { useNavigate } from "react-router-dom"

interface Props {
    title: string
    imgUri: string
    route: string
    isLoading: boolean
}

export const ItemVerticalImg = ({ title, imgUri, route, isLoading}: Props) => {
    const navigate = useNavigate()

    function handleGoRoute() {
    navigate(route, {relative: 'route'})
    }

  return (
    <>
      <div className={`
        ${isLoading ? `loader 
        m-auto 
        border-8 
        rounded-md
        animate-spin 
        animate-pulse 
        bg-gray-700 
        border-t-8 
        border-gray-500` : ''}
      `}
      >
          <div 
            onClick={handleGoRoute}
            className={`
              flex 
              flex-col 
              gap-3 
              text-center 
              p-2 
              rounded-md 
              justify-center 
              bg-gray-700 
              hover:bg-gray-500 
              cursor-pointer
              ${isLoading && 'invisible'}
            `}
          >
            <img 
                src={imgUri} 
                alt={title}
                className='h-36 w-56 sm:w-60 object-contain' 
            />
            <div className='flex-1 text-center font-semibold text-white'>{title}</div>
          </div>
      </div>
    </>
  )
}
