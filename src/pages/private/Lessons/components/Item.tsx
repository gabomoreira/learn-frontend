import { useState } from "react"

interface Props {
    isOpen: boolean
    checked: boolean
    title: string
    description: string
    idVideo: string
    handleToggleExpansed: () => void
}

export const Item = ({isOpen, checked, title, description, idVideo, handleToggleExpansed}: Props) => {
    const [completed, setCompleted] = useState<'uncompleted' | 'completed'>('uncompleted')

    function handleCompletedLesson() {
        setCompleted(oldValue => oldValue === 'uncompleted' ? 'completed' : 'uncompleted')
    }

  return (
    <div className="flex flex-col p-2 sm:px-5 py-2 rounded-md cursor-pointer bg-gray-700">
        <div 
            className="flex flex-row items-center justify-between p-3
        ">
            <div onClick={handleToggleExpansed}  className="flex-1">
                <div className="flex-1 font-semibold text-white text-lg">{title}</div>
            </div>

            <div className="flex flex-row gap-3">
                <input type="checkbox" value={completed} onChange={handleCompletedLesson} />
                <div className="font-semibold text-white text-sm sm:text-lg">
                    {completed === 'completed' ? 'Concluída' : 'Não Concluída'}
                </div>
            </div>
        </div>

        {isOpen && (
            <div className="flex flex-col gap-3">
                <div className="text-white p-2 rounded-md bg-gray-600">
                    {description}
                </div>
                <iframe  width="560" height="315" className="w-full h-96" src={`https://www.youtube.com/embed/${idVideo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        )}
    </div>
  )
}
