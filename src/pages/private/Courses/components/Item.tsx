import { useNavigate } from "react-router-dom"

interface Props {
    id: string
    title: string
    imgUri: string
}

export const Item = ({id, title, imgUri}: Props) => {
  const navigate = useNavigate()

  function handleGoOffer() {
    navigate(`/courses/${id}/offers`)
  }

  return (
    <div
      onClick={handleGoOffer} 
      key={id} 
      className='
      flex 
      flex-col 
      gap-4  
      items-center   
      bg-gray-700 
      p-5 
      rounded-md 
      cursor-pointer 
      hover:bg-gray-500
      w-36
      sm:w-72 
    '>
    <img src={imgUri} alt={title} className='h-20 w-20 object-contain' />

    <div className="flex-1 text-center font-semibold text-white">
        {title}
    </div>
</div>
  )
}
