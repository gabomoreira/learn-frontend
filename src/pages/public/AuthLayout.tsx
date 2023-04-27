import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export const AuthLayout = () => {
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  useEffect(() => {
    if(pathname !== '/register') {
      navigate('/login')
    }
  }, [pathname])

  return (
    <div className="flex justify-center p-3 bg-gray-900 h-screen w-screen">
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
