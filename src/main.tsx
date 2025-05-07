import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { AppRouter } from './app/providers/RouterProvider'
import 'shared/styles/common.css'
import 'shared/styles/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
