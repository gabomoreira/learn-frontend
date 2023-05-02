
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
                <div key={i.id} 
                    className='
                    flex 
                    flex-col 
                    gap-4  
                    items-center   
                    bg-gray-700 
                    p-5 
                    rounded-md 
                    cursor-pointer 
                    hover:bg-gray-500
                    w-36
                    sm:w-72 
                '>
                    <img src={i.img} alt={i.title} className='h-20 w-20 object-contain' />

                    <div className="flex-1 text-center font-semibold text-white">
                        {i.title}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}