import { MainPage, NotFound, Login, Catalogue, Basket, Selected } from 'pages'
import { SingleCard } from 'entities/singleCard'

export const routes = [
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
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
