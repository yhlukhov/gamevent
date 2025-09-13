import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { Home, Events, EventDetails } from './pages'
import { Layout } from './components'
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: Layout,
        children: [
          {
            path: '/',
            Component: Home,
          },
          {
            path: '/events',
            Component: Events,
          },
          {
            path: '/event/:id',
            Component: EventDetails
          },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
