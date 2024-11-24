import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

interface LayoutProps {
    children: React.ReactNode
  }

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="w-full relative">
        <Navbar/>
      {children} 
      <Footer/>
    </div>
  )
}

export default Layout