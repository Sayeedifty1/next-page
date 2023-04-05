import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './Components/About'
import BookDetails from './Components/BookDetails'
import Books from './Components/Books'
import Home from './Components/Home'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
        fetch(`https://api.itbook.store/1.0/books/${params.id}`),

      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> 
  <RouterProvider router={router}></RouterProvider>

)
