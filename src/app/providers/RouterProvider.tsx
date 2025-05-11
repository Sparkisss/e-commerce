import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '../routes/routes'
import { App } from '../../App'

const router = createBrowserRouter([
  {
    element: <App />,
    children: routes,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
