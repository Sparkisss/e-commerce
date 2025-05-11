import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { StoreProvider } from './app/providers/StoreProvider'
import { AppRouter } from './app/providers/RouterProvider'
import 'shared/styles/common.css'
import 'shared/styles/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  </StrictMode>
)
