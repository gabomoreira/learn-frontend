import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z, ZodType } from 'zod'

import { Input } from '../../../../shared/form/Input'

export type FormData = {
  email: string
  password: string
}

interface Props {
    handleLogin: (data: FormData) => Promise<void>
    isLoading: boolean
}

export const Form = ({handleLogin, isLoading} : Props) => {
    const schema: ZodType<FormData> = z.object({
        email: z.string().email(),
        password: z.string().min(6),
      })
    
      const {
        register, 
        handleSubmit,
        formState: {errors} 
      } = useForm<FormData>({resolver: zodResolver(schema)})
    


  return (
    <form onSubmit={handleSubmit(handleLogin)} 
          className="
            flex 
            flex-col 
            gap-3 
            my-5 
            p-5 
            bg-gray-800 
            rounded-md 
            w-full 
            max-w-[90%] 
            sm:max-w-[50%]
          ">
          <div className="text-center mb-2 text-white text-3xl">
            Login
          </div>
          <Input 
            register={{...register('email')}} 
            placeholder='Email'
            error={errors.email?.message}
          />
          <Input 
            register={{...register('password')}} 
            placeholder='Senha'
            error={errors.password?.message}
          />

          <button type="submit" 
            className="
              mt-5
              w-full 
              self-center 
              bg-gray-900 
              max-w-[40%] 
              p-2 
              text-white 
              font-semibold 
              rounded-md
              hover:bg-slate-700
            ">
              Entrar
          </button>
        </form>
  )
}
