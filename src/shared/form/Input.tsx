
interface Props {
    register: any
    placeholder: string
    error?: string
}

export const Input = ({register, placeholder, error}: Props) => {
  return (
    <>
        <div className="bg-gray-900 rounded-md">
            <input {...register} className="w-full bg-transparent p-3 rounded-md text-white outline-none focus:outline-gray-400 "
                type="text" 
                placeholder={placeholder} />
        </div>
        <div className="text-sm text-red-600 text-left">{error}</div>
    </>
  )
}
