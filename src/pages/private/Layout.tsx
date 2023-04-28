import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../shared/components/Sidebar'

export const Layout = () => {
  return (
    <div>
        <div className='flex h-screen'>
            <Sidebar />

          <div className='flex-1 px-7 py-5 text-white bg-slate-950'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}
