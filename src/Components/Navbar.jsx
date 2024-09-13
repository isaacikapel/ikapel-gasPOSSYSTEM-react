//import React from 'react'
import { Link } from "react-router-dom"

import SearchBox from "./SearchBox"

const Navbar = () => {
  return (
    <div className="px-6 py-6 text-center font-bold text-blue-700 flex justify-between">
      <div className="mr-3">
        <SearchBox/>
      </div>

      <div className="w-1-3 h-10 bg-white text-gray-600 hidden md:flex">
        <marquee direction="left">WE ARE HERE TO SERVE YOU | <span className="bg-blue-600 text-amber-500">WE DO DOOR TO DOOR DELIVERY</span> | <span>WE ARE THE BEST</span></marquee>
     </div>
      
      <div className="flex ">
        <button className="w-20 h-10 bg-black text-white hover:bg-blue-800 rounded-s-full cursor-pointer"><Link to="blog">Blog</Link></button>
        <img src="./new-2.jpg" alt="" className="w-20 rounded-full ml-3 hidden md:flex"/>
      </div>
    </div>
  )
}

export default Navbar