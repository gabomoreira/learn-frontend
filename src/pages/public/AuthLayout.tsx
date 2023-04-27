import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div>
      public
      <Outlet />
    </div>
  )
}
