import { useState } from "react"
import { Item } from "./components/Item"

const items = [
    {id: 'a', title: '01.01', checked: false, description: 'Aqui tem uma descriçao da ula vc bota aqui...', idVideo: 'idl9cwpw3AM'},
    {id: 'b', title: '01.02', checked: false, description: 'Aqui tem uma descriçao da ula vc bota aqui...', idVideo: 'idl9cwpw3AM'},
]

export const Lessons = () => {
    const [expansed, setExpansed] = useState('')


    function handleToggleExpansed(id: string) {
        if (id === expansed) {
            setExpansed('')
            return
        }

        setExpansed(id)
    }

  return (
    <div className="flex flex-col gap-5 pb-10">
        <div className="font-semibold text-white text-2xl">Aulas</div>

        <div className="flex flex-col gap-3">
            {items.map(i => (
               <Item 
                    isOpen={i.id === expansed}
                    title={i.title}
                    description={i.description}
                    idVideo={i.idVideo}
                    checked={i.checked}
                    handleToggleExpansed={() => handleToggleExpansed(i.id)}
               />
            ))}
        </div>
    </div>
  )
}
