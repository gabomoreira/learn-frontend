
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../pages/private/Layout'
import { AuthLayout } from '../pages/public/AuthLayout'
import { privateRoutes } from './privateRoutes.'
import { publicRoutes } from './publicRoutes'

export const Routes= () => {

  const token = 'null'

  const public_routes = [
    {
      path: '/',
      element: <AuthLayout />,
      children: publicRoutes,
      errorElement: <NotFound />
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

  return (
    <RouterProvider router={router} />
  )
}
