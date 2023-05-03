
interface Props {
    imgUri: string
    title: string
}

export const Item = ({imgUri, title}: Props) => {
  return (
    <div className='text-center p-2 rounded-md justify-center bg-gray-700 hover:bg-gray-500 cursor-pointer'>
        <img 
            src={imgUri} 
            alt={title}
            className='h-36 w-56 sm:w-60 object-contain' 
        />
        <div className='flex-1'>{title}</div>
    </div>
  )
}
