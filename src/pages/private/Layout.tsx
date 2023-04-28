import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../shared/components/Sidebar'

export const Layout = () => {
  return (
    <div>
        <div className='flex h-screen'>
          {/* <div className='flex-[.4]'>
          </div> */}
            <Sidebar />

          <div className='flex-1 bg-slate-950'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}
