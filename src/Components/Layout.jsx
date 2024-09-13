//import React from 'react'

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <div>
      <div className="flex">
            <Sidebar/>
            <div className="w-full ml-16 md:ml-56">
              {/* md:: This prefix indicates that the style should only be applied on medium-sized screens and larger. In Tailwind CSS, md typically corresponds to a minimum width of 768px. */}
              <Navbar/>
              {/* The <Outlet /> component is placed in the parent route’s component to indicate where the child routes should be rendered. ml-56: This part of the class sets the margin-left of the element to a specific value. In Tailwind CSS, 56 corresponds to 14rem (or 224px). */}
              <Outlet /> 
            </div>
        </div>
    </div>
  )
}

export default Layout