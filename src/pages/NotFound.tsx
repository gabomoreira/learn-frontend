import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  routesType?: string
}

export const NotFound = ({routesType = 'private'}: Props) => {
  return (
    <div className='flex-1 flex p-3 items-center justify-center h-screen bg-gray-900'>
      <div className='flex flex-col  items-center justify-center gap-3'>
        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <div className='text-4xl font-semibold text-white'>404</div>
          <div className='text-2xl text-center font-light text-gray-400'>This page could not be found.</div>
        </div>

        <Link
          to={`${routesType === 'public' ? '/login' : '/'}`}
          className='text-white p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition'
        >Voltar para a página {routesType === 'public' ? 'de login' : 'inicial'}</Link>
      </div>
    </div>
  )
}
