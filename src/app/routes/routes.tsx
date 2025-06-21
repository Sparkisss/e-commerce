import { MainPage, NotFound, Auth, Catalogue, Basket, Selected } from 'pages'
import { SingleCard } from 'entities/singleCard'
import { AuthLayout, MainLayout } from 'widgets'

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/catalogue',
        element: <Catalogue />,
      },
      {
        path: 'catalogue/:cardId',
        element: <SingleCard />,
      },
      {
        path: '/basket',
        element: <Basket />,
      },
      {
        path: '/selected',
        element: <Selected />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]
