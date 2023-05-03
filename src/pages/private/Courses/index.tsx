import { useEffect, useState } from "react"
import { Course, getAllCourses } from "../../../services/Courses"
import { ItemVerticalImg } from "../../../shared/components/ItemVerticalImg"
import { Loading } from "../../../shared/components/Loading"

export const Courses = () => {
    const [courses, setCourses] = useState<Course[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchCourses() {
        setIsLoading(true)

        const data = await getAllCourses()
        setCourses(data)
        
        setIsLoading(false)
    }

    useEffect(() => {
        fetchCourses()
    }, [])

  return (
    <div className="flex flex-col gap-5">
        <div className="font-semibold text-3xl text-white">
            Cursos
        </div>

        <div className="flex flex-wrap gap-5 justify-center">
            {!isLoading && courses.map(i => (
               <ItemVerticalImg 
                    key={i.id}
                    title={i.title}
                    imgUri={i.img}
                    route={`${i.id}/offers`}
                    isLoading={isLoading}
               />
            ))}

            {isLoading && (
               <Loading />
              
            )}
        </div>
    </div>
  )
}
