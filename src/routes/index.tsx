
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../pages/private/Layout'
import { AuthLayout } from '../pages/public/AuthLayout'
import { useAuth } from '../shared/hooks/Auth'
import { privateRoutes } from './privateRoutes.'
import { publicRoutes } from './publicRoutes'

export const Routes= () => {
  const token = useAuth(state => state.token)

  const public_routes = [
    {
      path: '/',
      element: <AuthLayout />,
      children: publicRoutes,
      errorElement: <NotFound routesType='public' />
    },
  ]

  const private_routes = [
    {
      path: '/',
      element: <Layout />,
      children: privateRoutes,
      errorElement: <NotFound />
    },
  ]

  const applyRoutes = token ? private_routes : public_routes

  const router = createBrowserRouter(applyRoutes);

  console.log(token)

  return (
    <RouterProvider router={router} />
  )
}
