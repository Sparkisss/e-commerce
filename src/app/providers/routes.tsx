import { MainPage, NotFound, Login, Catalogue } from 'pages'
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
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
