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
      {isLoading ? (
        <div 
          className="
             
            h-64 
            w-56 
            m-auto 
            border-8 
            rounded-md 
            border-t-8 
            border-gray-500
            bg-gray-700
            animate-pulse
          "
        />
      ) : (
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
        `}
      >
        <img 
            src={imgUri} 
            alt={title}
            className='h-36 w-56 sm:w-60 object-contain' 
        />
        <div className='flex-1 text-center font-semibold text-white'>{title}</div>
      </div>
      )}
    </>
  )
}
