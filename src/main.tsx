import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Planet from './pages/Planet'


const router = createBrowserRouter([

  {
    element: <Layout />,
    path: "/",
    children: [

      {
        element: <Planet />,
        path: "/:planetName/"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}
  />)
