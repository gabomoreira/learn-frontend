import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'
import { Avatar } from '../../../shared/components/Avatar'
import { Input } from '../../../shared/form/Input'

type FormData = {
    password: string
    passwordConfirmation: string
}

export const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    
    const schema: ZodType<FormData> = z.object({
        password: z.string().min(6),
        passwordConfirmation: z.string().min(6),
      }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ['passwordConfirmation']
      })
    
      const {
        register, 
        handleSubmit,
        formState: {errors} 
      } = useForm<FieldValues>({defaultValues:{ email: 'gabo@gmail.com'} , resolver: zodResolver(schema)})

  return (
    <div>
       <div className='flex flex-col sm:flex-row items-center justify-center gap-20'>
            <div className='flex flex-col gap-5'>
                <Avatar 
                    src='https://github.com/gabomoreira.png'
                    size='lg'
                    name='Senhor Batata'
                    isLoading={isLoading}
                />

                <button className='self-center bg-gray-800 py-2 px-3 rounded-md hover:bg-gray-700 transition-all'>Mudar foto</button>
            </div>

            <div className='hidden sm:block w-[2px] h-[250px] bg-gray-700' />

            <div className='flex flex-col gap-3'>
                <div className='text-white text-lg font-semibold'>
                    Dados Pessoais
                </div>

                <div className='flex flex-col gap-3'>
                    <Input 
                        register={register('email')}
                        placeholder='Email'
                        disabled
                        />
                    <Input 
                        register={register('password')}
                        placeholder='Senha'
                        type='password'
                        />
                    <Input 
                        register={register('passwordConfirmation')}
                        placeholder='Confirmar Senha'
                        type='password'
                        />

                    <button className='
                        bg-gray-800 
                        py-2 
                        px-3 
                        rounded-md 
                        hover:bg-gray-700 
                        transition-all'
                        >
                        Salvar alterações        
                    </button>
                </div>
            </div>
       </div>
    </div>
  )
}
