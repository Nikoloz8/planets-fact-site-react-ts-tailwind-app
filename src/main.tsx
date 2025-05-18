import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Planet from './pages/Planet'


const router = createBrowserRouter([

  {
    element: <Layout />,
    path: "/",
    children: [

      {
        element: <Planet />,
        path: "planets/:planetName/"
      },
      {
        index:true,
        element: <Navigate to="/planets/Mercury" replace />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}
  />)
