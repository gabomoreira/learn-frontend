import { Item } from "./components/Item"

const courses = [
    {
        id: 'a',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        title: 'React'
    },
    {
        id: 'b',
        img: 'https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png',
        title: 'Angular'
    },
    {
        id: 'c',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        title: 'Vue'
    },
    {
        id: 'd',
        img: 'https://bgasparotto.com/wp-content/uploads/2017/12/spring-boot-logo.png',
        title: 'Spring Boot'
    },
    {
        id: 'e',
        img: 'https://static.javatpoint.com/tutorial/cobol/images/cobol-tutorial.png',
        title: 'COBOL'
    },
]

export const Courses = () => {
  return (
    <div className="flex flex-col gap-5">
        <div className="font-semibold text-3xl text-white">
            Cursos
        </div>

        <div className="flex flex-wrap gap-5 justify-center">
            {courses.map(i => (
               <Item 
                    id={i.id}
                    title={i.title}
                    imgUri={i.img}
               />
            ))}
        </div>
    </div>
  )
}
