import { useEffect, useState } from "react"
import { Item } from "./components/Item"

const items = [
    {id: 'a', text: 'Correção concluída', moment: '2023-07-07T03:00:00Z', read: false, route: 'link'},
    {id: 'b', text: 'Nova aula', moment: '2023-07-07T03:00:00Z', read: false, route: 'link'},
    {id: 'c', text: 'Parabéns por completar os desafios', moment: '2023-07-07T03:00:00Z', read: true, route: 'link'},
]

export const Notifications = () => {
    const [onlyNonReads, setOnlyNonReads] = useState(0)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

 

    function handleToogleOnlyNonReads() {
        setOnlyNonReads(onlyNonReads === 0 ? 1 : 0)
    }

    async function handleRead() {
        // api read notification
    }

    useEffect(() => {
        const updateScreenWidth = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', updateScreenWidth);
    
        return () => {
          window.removeEventListener('resize', updateScreenWidth);
        };
      }, []);

  return (
    <div className="flex flex-col gap-5 pb-5">
        <div className="text-white font-semibold text-3xl">Notificações</div>

        <div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value={onlyNonReads} onChange={handleToogleOnlyNonReads} className="sr-only peer" />
                <div className={`
                    w-11 
                    h-6 
                    bg-gray-400 
                    rounded-full peer 
                    peer-focus:outline-none 
                    peer-focus:ring-4 
                    peer-checked:after:translate-x-full 
                    peer-checked:bg-gray-700 
                    after:border-gray-300 after:border 
                    ${screenWidth < 422 ? 'after:absolute after:top-[18px]' : 'after:absolute after:top-[4px]'}
                    after:left-[2px] after:bg-white 
                    after:rounded-full after:h-5 after:w-5 
                    after:transition-all
                    focus:outline-none !important
                    `}
                />
                <span className="ml-3 text-lg font-medium text-white">Mostrar apenas as não lidas</span>
            </label>
        </div>

        {items.map(i => (
            <Item 
                key={i.id}
                text={i.text}
                moment={i.moment}
                read={i.read}
                route={i.route}
                handleRead={handleRead}
            />
        ))}
    </div>
  )
}
