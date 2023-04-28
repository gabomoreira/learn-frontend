import { FaBookOpen } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

import {AiOutlineHome, AiFillHome} from 'react-icons/ai'
import {MdOutlineForum, MdForum, MdOutlineSchool, MdSchool, MdLogout} from 'react-icons/md'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { MenuItem } from "./components/MenuItem"
import { useSidebar } from "../../hooks/Sidebar"


const menuItems = [
    {label: 'Página Inicial', path: '/', icon: AiOutlineHome, iconChecked: AiFillHome},
    {label: 'Cursos', path: '/courses', icon: MdOutlineSchool, iconChecked: MdSchool},
    {label: 'Fórum', path: '/forum', icon: MdOutlineForum, iconChecked: MdForum},
]

export const Sidebar = () => {
    const pathname = useLocation().pathname
    const {isOpen, handleToggle} = useSidebar((state) => state)

    async function handleLogout() {
        try {
            // await axios logout
        } catch (error) {
            
        } finally {

        }
    }

  return (
    <div className="flex flex-col px-4 pt-5 bg-gray-900">
        <div className="
            font-semibold
            text-white
            text-lg
            p-3
            mb-5
            relative
        ">
            <Link to='/' className="flex items-center gap-3">
                <FaBookOpen size={isOpen ? 18 : 24} />
                {isOpen && (
                    'LearnApp'
                )}
            </Link>

            <BsFillArrowLeftCircleFill
                onClick={handleToggle}
                className={`
                    absolute
                    top-[35%]
                    -right-7
                    transition duration-300
                    cursor-pointer
                    ${!isOpen ? 'rotate-180' : ''}
                `}
                size={24}
            />
        </div>

        <div className="flex-1">
            <ul className="flex flex-col gap-3">
                {menuItems.map(i => (
                    <MenuItem 
                        icon={pathname === i.path ? i.iconChecked : i.icon}
                        path={i.path}
                        pathname={pathname}
                        label={i.label}
                        key={i.path}
                        isOpen={isOpen}
                    />
                ))}
            </ul>
        </div>

        <button onClick={handleLogout} className='hover:bg-gray-700 rounded-md mb-3'>
            <MenuItem 
                icon={MdLogout}
                label='Logout'
                path={pathname}
                isOpen={isOpen}
            />
        </button>
    </div>
  )
}
