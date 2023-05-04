import { useState } from "react"
import { useNavigate } from "react-router-dom"

const items = [
    {id: 'a', imgUri: 'https://images.vexels.com/media/users/3/146896/isolated/preview/778b39c1d92e0d5c9fcfc481e96a3710-cartoon-relampago.png', title: 'Seção 1: Introdução', description: 'Bem-vindo ao nosso curso introdutório de React! Neste curso, você aprenderá os conceitos básicos do React, uma das bibliotecas mais populares para construir interfaces de usuário em JavaScript. Não é necessário ter conhecimento prévio em React, mas é recomendável ter uma boa compreensão de HTML, CSS e JavaScript. Este curso é projetado para aqueles que desejam iniciar sua jornada de aprendizado em React e desenvolver habilidades essenciais para construir aplicativos modernos e dinâmicos. Então, vamos começar!'},
    {id: 'b', imgUri: 'https://images.vexels.com/media/users/3/146896/isolated/preview/778b39c1d92e0d5c9fcfc481e96a3710-cartoon-relampago.png', title: 'Seção 2: O que é JSX', description:  'JSX é algo fundamental para o React...'},
]

export const Sections = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)

    function handleGoLessons() {
        navigate('lessons', {relative: 'route'})
    }

  return (
    <div className='flex flex-col gap-5 pb-10'>
        <div className='font-semibold text-white text-2xl'>Seções</div>

        <div className='flex flex-col gap-3'>
            {items.map(i => (
                <div
                    key={i.id} 
                    onClick={handleGoLessons} 
                    className={`
                        flex 
                        p-3 
                        gap-10 
                        flex-col 
                        sm:flex-row 
                        w-full 
                        bg-gray-700 
                        rounded-md 
                        hover:bg-gray-600 
                        cursor-pointer
                        `}
                >
                <div className="flex flex-col items-center">
                    <div className="font-semibold text-white text-lg">{i.title}</div>

                    <img 
                        src={i.imgUri} 
                        alt={i.title} 
                        className='w-40 h-40 object-contain'
                    />
                </div>

                <div className="flex-1 w-full h-max">
                    <div className="p-2 bg-gray-500 rounded-md w-full">
                        <div className="text-whtie">{i.description}</div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
