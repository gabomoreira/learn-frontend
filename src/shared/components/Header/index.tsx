import {IoMdNotificationsOutline} from 'react-icons/io'

export const Header = () => {
  return (
    <div className="flex w-full px-3 py-3 gap-3 items-center justify-end bg-transparent">
        <div className='font-semibold'>
            Senhor Batata
        </div>

        <div className='cursor-pointer relative'>
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
    </div>
  )
}
