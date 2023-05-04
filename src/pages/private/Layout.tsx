import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../../shared/components/Header'
import { Sidebar } from '../../shared/components/Sidebar'

export const Layout = () => {
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  useEffect(() => {
    if(pathname === '/') {
      navigate('/courses')
    }
  }, [pathname])

  return (
    <div>
        <div className='flex h-screen'>
            <Sidebar />

          <div className='flex-1 flex flex-col text-white bg-slate-950'>
            <Header />
            
            <div className="px-7 py-5 overflow-auto 
              scrollbar 
              scrollbar-thumb-gray-700
              scrollbar-track-gray-900
              scrollbar-thin
              ">
              <Outlet />
            </div>
          </div>
        </div>
    </div>
  )
}
