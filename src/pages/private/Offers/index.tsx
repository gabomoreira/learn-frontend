import { useState } from 'react'
import { ItemVerticalImg } from '../../../shared/components/ItemVerticalImg'

const items = [
    {id: 'a', title: 'Oferta 1.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'b', title: 'Oferta 2.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'c', title: 'Oferta 3.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'a', title: 'Oferta 1.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'b', title: 'Oferta 2.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'c', title: 'Oferta 3.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'a', title: 'Oferta 1.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'b', title: 'Oferta 2.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'c', title: 'Oferta 3.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'a', title: 'Oferta 1.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'b', title: 'Oferta 2.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
    {id: 'c', title: 'Oferta 3.0', imgUri: 'https://cdn-icons-png.flaticon.com/512/2416/2416471.png'},
]

export const Offers = () => {
    const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='flex flex-col gap-5'>
        <div className='text-white font-semibold text-2xl'>Ofertas</div>

        <div className='flex gap-5 flex-wrap justify-center'>
            {items.map(i => (
                <ItemVerticalImg 
                    imgUri={i.imgUri}
                    title={i.title}
                    route={i.id}
                    isLoading={isLoading}
                />
            ))}
        </div>
    </div>
  )
}
