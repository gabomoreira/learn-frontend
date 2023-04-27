import { useState } from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Form, FormData } from './components/Form'

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(data: FormData) {
    setIsLoading(true)

    try {
      console.log('form data', data)
      // axios
    } catch (error) {
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      
      <div className="
        font-semibold
        text-white
        text-3xl
        mb-5
        flex
        items-center
        gap-3
      ">
        <FaBookOpen size={40} />
        LearnApp
      </div>

      <div className="w-full flex justify-center items-center">
        <Form 
          handleLogin={handleLogin}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
