import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './Components/About'
import Books from './Components/Books'
import Home from './Components/Home'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books',
        element:<Books></Books>
      },
      {
        path:'about',
        element:<About></About>
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> 
    <RouterProvider router={router}></RouterProvider>
  
)
