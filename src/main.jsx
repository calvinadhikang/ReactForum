import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout.jsx'
import LoginPage from './pages/Auth/LoginPage.jsx'
import RegisterPage from './pages/Auth/RegisterPage.jsx'

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        path: 'login',
        element: <LoginPage/>
      },
      {
        path: 'register',
        element: <RegisterPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
