//import React from 'react'

import Products from "./Products"

const Home = () => {
  return (
    <div className="px-4 flex-col justify-center items-center content-center w-full">

        
        <section id="hero" className="border rounded-full mr-2">

            <video src="Why I Love Being a Software Engineer.mp4" autoPlay muted loop className=" flex rounded-full video"></video>
            <h1 className="text-center pt-11 flex">Experience Joy In Your Cooking, with our products...</h1>

        </section>

        <div><Products/></div>
      
    </div>
  )
}

export default Home