import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../shared/components/Header'
import { Sidebar } from '../../shared/components/Sidebar'

export const Layout = () => {
  return (
    <div>
        <div className='flex h-screen'>
            <Sidebar />

          <div className='flex-1 flex flex-col text-white bg-slate-950'>
            <Header />
            
            <div className="px-7 py-5">
              <Outlet />
            </div>
          </div>
        </div>
    </div>
  )
}
