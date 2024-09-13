//import React from 'react'

const Products = () => {
  return (

      <div className="w-full flex-col gap-3 justify-center align-content-center items-center px-5 py-5">
        <h1 className="text-center px-6 text-3xl text-30 mt-5 gaspro">Gas Products</h1>
        <p className="text-center mt-10 font-serif mb-10 gasproA">Explore our comprehensive range of cooking gas cylinders and gas amenities</p>

        <div className="w-100 h-11 px-5 py-5 flex-row gap-5 mb-5">
        < button className="bg-slate-300 w-50"><h1 className="px-4 py-0.5">All</h1></button> | < button className="bg-slate-300"><h1 className="px-4 py-0.5">Gas Cylinders</h1></button> | <button className="bg-slate-300"><h1 className="px-4 py-0.5 ">Gas Amenities</h1></button>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-4xl border-b-gray-800">

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./gas1.jpg" alt="my-gas" className=" flex"/>
                  <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                  <h3 className="my-4 font-semibold text-blue-700">E-Gas premium</h3> 
                  <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $55</h3>
                  </div>
              </div>

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./gas2.jpeg" alt="my-gas" className=" flex"/>
                 <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                 <h3 className="my-4 font-semibold text-blue-700">E-Gas premium</h3> 
                 <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $55</h3>
                  </div>
              </div>

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./gas3.jpeg" alt="my-gas" className=" flex"/>
                 <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                 <h3 className="my-4 font-semibold text-blue-700">Total-Gas pro</h3> 
                  <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $75</h3>
                  </div>
              </div>

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./image_1716891065624.jpg" alt="my-gas" className=" flex"/>
                  <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                  <h3 className="my-4 font-semibold text-blue-700">K-Gas classic</h3> 
                  <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $65</h3>
                  </div>
              </div>

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./image_1716891151878.jpg" alt="my-gas" className=" flex"/>
                  <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                  <h3 className="my-4 font-semibold text-blue-700">Total-Gas medium</h3> 
                  <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $45</h3>
                  </div>
              </div>

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./image_1716891327153.jpg" alt="my-gas" className=" flex"/>
                  <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                  <h3 className="my-4 font-semibold text-blue-700">Pro-Gas medium</h3> 
                  <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $45</h3>
                  </div>
              </div>

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./image_1716891428522.jpg" alt="my-gas" className=" flex"/>
                  <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                  <h3 className="my-4 font-semibold text-blue-700">Ola-Gas premium</h3> 
                  <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $65</h3>
                  </div>
              </div>

              <div className="aspect-square rounded-lg relative cursor-pointer flex duration-500 group border-2 border-b-gray-800">
                <img src="./gas1.jpg" alt="my-gas" className=" flex"/>
                  <div className="bg-slate-300 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/3 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-10 flex-col">
                  <h3 className="my-4 font-semibold text-blue-700">E-Gas premium</h3> 
                  <h3 src="./images/right-top-arrow-circle-solid-228.png" alt="" className="w-6 mr-3"> $55</h3>
                  </div>
              </div>
            
          </div>
      </div>

  )
}

export default Products