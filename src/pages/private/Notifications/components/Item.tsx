import { formatDate } from "../../../../utils/date"

import {MdOutlineMarkEmailUnread, MdOutlineMarkEmailRead} from 'react-icons/md'
import {GoMailRead} from 'react-icons/go'

interface Props {
    text: string
    moment: string
    read: boolean
    route: string
    handleRead: any
}

export const Item = ({text, moment, read, route, handleRead}: Props) => {

  

  return (
    <div className="flex p-3 flex-col sm:flex-row rounded-md sm:justify-between items-center w-full bg-gray-700">
        <div className="flex gap-3 flex-1">
          <div className="text-md sm:text-lg font-semibold text-white text-center mb-2 sm:text-left sm:mb-0">{text}</div>
          <div className="hidden sm:block text-lg font-medium text-gray-400">{formatDate(moment)}</div>
        </div>
        
       
       <div className="flex justify-between items-center w-full sm:w-max">
        <div className="block sm:hidden text-lg font-medium text-gray-400">{formatDate(moment)}</div>
          
        <div className="flex gap-3 items-center w-full justify-end">
          {read ? (
            <GoMailRead size={24} />
          ) : (
            <MdOutlineMarkEmailUnread className="cursor-pointer" onClick={handleRead} size={24} />
          )}

          <div className="text-md font-semibold text-gray-200">{read ? 'Lida' : 'Não lida'}</div>
        </div>
       </div>
    </div>
  )
}
