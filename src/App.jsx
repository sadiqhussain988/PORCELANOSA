import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from "../src/components/common/Navbar"
import Footer from "../src/components/common/Footer"
import Home from './pages/Home'
import About from './pages/About'
import AITrailor from './pages/AITrailor'
import Pricing from './pages/Pricing'




const MainLayout = () => {
  return (
    <div className='overflow-x-hidden'>
    
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About/> },
      { path: "/aitralior", element: <AITrailor/> },
      { path: "/pricing", element: <Pricing/> },
      
      
    ],
  },
]);



function App () {
  return <RouterProvider router={router} />
}

export default App


