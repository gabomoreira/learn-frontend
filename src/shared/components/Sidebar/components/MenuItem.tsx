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
          flex 
          items-center
          ${!isOpen && 'justify-center'} 
          text-white 
          gap-3 
          p-3
          ${isOpen && 'py-2'} 
          rounded-m 
          rounded-md 
          hover:bg-gray-700 
          ${pathname === path ? 'bg-gray-700' : 'bg-transparent'}
        `}>
        
          <Icon size={18} />

          {isOpen && (
            <div>
              {label}
            </div>
          )}
    </Link>
  )
}
