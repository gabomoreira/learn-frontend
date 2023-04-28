import { IconType } from "react-icons"
import { Link } from "react-router-dom"


interface Props {
    path: string
    pathname?: string
    icon: IconType
    label: string
    isOpen: boolean

}

export const MenuItem = ({path, pathname, icon: Icon, label, isOpen}: Props) => {
  return (
      <Link to={path} 
        className={`
            mb-2
            rounded-md 
            hover:bg-gray-700 
            ${pathname === path ? 'bg-gray-700' : 'bg-transparent'}
        `}>
        <li className={`
                flex 
                items-center 
                text-white 
                gap-3 
                p-3
                ${isOpen && 'py-2'} 
                rounded-m 
                 `}
            >
              <Icon size={16} />

              {isOpen && (
                <div className=''>
                  {label}
                </div>
              )}
        </li>
    </Link>
  )
}
