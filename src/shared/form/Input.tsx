
interface Props {
    register: any
    placeholder: string
    error?: string
    disabled?: boolean
    type?: string
}

export const Input = ({register, type = 'text', placeholder, error, disabled}: Props) => {
  return (
    <>
        <div className="bg-gray-900 rounded-md">
            <input {...register} 
              disabled={disabled}
              className={`
                w-full 
                bg-transparent 
                p-3 
                rounded-md 
                ${disabled ? 'text-gray-500' : 'text-white'}  
                outline-none 
                focus:outline-gray-400 
                `}
              type={type} 
              placeholder={placeholder} 
              />
        </div>
        <div className="text-sm text-red-600 text-left">{error}</div>
    </>
  )
}
