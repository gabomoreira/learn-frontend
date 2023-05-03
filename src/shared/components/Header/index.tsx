import {IoMdNotificationsOutline} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '../Avatar'

export const Header = () => {
    const navigate = useNavigate()

    function handleGoNotificationsPage() {
        navigate('/notifications')
    }

  return (
    <div className="flex w-full px-3 py-3 gap-3 items-center justify-end bg-transparent">
        <div className='hidden sm:block font-semibold'>
            Senhor Batata
        </div>

        <div onClick={handleGoNotificationsPage} className='cursor-pointer relative'>
            <IoMdNotificationsOutline size={30} />

            <div className='
                absolute
                top-0
                right-0
                w-4
                h-4
                rounded-3xl
                bg-white
                text-gray-950
                text-xs
                flex
                items-center
                justify-center
                font-semibold
            '>
                1
            </div>
        </div>

        <Avatar 
            src='https://github.com/gabomoreira.png'
            size='xs'
            name='Gabriel Moreira'
        />
    </div>
  )
}
