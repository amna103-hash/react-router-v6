import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About_us from './pages/about_us/about_us.jsx'
import Home from './pages/home/home.jsx'
import Layout from './components/layout.jsx'
import Contact from './pages/Contact/Contact.jsx'
import './App.css'
import User from './pages/user/user.jsx'
import Github, { githubinfoLoder } from './pages/Github/Github.jsx'
const router=createBrowserRouter([
 {
  path:"/",
  element:<Layout/>,
  children:[
    {
     path:"",
     element:<Home/>
    },
    {
      path:"about",
      element:<About_us/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"user/:id",
      element:<User/>
    },
    {
      loader:githubinfoLoder,
      path:"github",
      element:<Github/>
    },
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
