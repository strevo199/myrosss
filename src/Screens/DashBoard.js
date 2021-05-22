import React from 'react'
import BarChart from './Charts/BarChart'
import LineGhaphy from './Charts/LineGhaphy'
import PieChart from './Charts/PieChart'


function DashBoard() {
    return (
        <div className="dashboard bg-gray-200 md:pt-24  shadow-inner">
            <div className=" m-auto container min-h-screen pb-5">
            <div className="gragh_chat  md:flex justify-evenly">
                <div className="  md:flex-1"> 
                    <div className="flex precard sm:px-4 md:p-4 justify-between ">
                    <div className="card bg-white rounded-3xl h-28 md:h-24 w-64 md:w-60 p-6 md:p-2 px- justify-evenly flex relative">
                    <i class="material-icons text-blue-400 ">people</i>
                    <div>
                        <h1 className="text-blue-400">79250 Customer</h1>
                        <p className="text-xs">Total Number of Customer</p>
                    </div>
                    <div className="absolute md:ml-40 my-12 ml-52 flex">
                    <a href="#"><i class="material-icons mr-2 text-xs ">arrow_circle_down</i></a>  
                    <h2 className="text-xs">view All</h2>
                    </div> 
                    </div>
                    
                    <div className="card bg-white rounded-3xl h-28 md:h-24 w-64 md:w-60 p-6 md:p-2 px- justify-evenly flex relative">
                    <i class="material-icons text-yellow-500 ">location_city</i>
                    <div>
                        <h1 className="text-yellow-500">79250 Customer</h1>
                        <p className="text-xs">Total Number of Customer</p>
                    </div>
                    <div className="absolute md:ml-40 my-12 ml-52 flex">
                        <a href="#"><i class="material-icons mr-2 text-xs ">arrow_circle_down</i></a>
                        <h2 className="text-xs">view All</h2>
                    </div>
                    </div>
                    </div>
                    <div height="200" className=" bg-white m-4 bg-white sm:my-4 sm:-my-28 md:my-8  rounded-xl p-10">
                        <h1 className="text-blue-900 font-bold text-sm">Age and Demography/region</h1>
                    <BarChart/>
                    </div> 
                </div>
                <div className="bg-white flex-1 bg-white my-8 mx-4 p-10 rounded-xl">
                        <h1 className="text-blue-900 font-bold text-sm my-10">Number of Customer/Industry</h1>
                  <PieChart/>
                  <div className="m-auto w-80 p-4 text-center">
                      <div className ="flex justify-evenly">
                          <div className="flex ">
                            <div className="p-3 mx-1 my-1 bg-blue-900 rounded"></div>
                            <h1 className ="text-blue-900 my-1 font-semibold">Technology </h1>
                          </div>
                          <h1 className="text-gray-600 font-semibold">40%</h1>
                      </div>
                      <div className ="flex justify-evenly">
                          <div className="flex ">
                            <div className="p-3 mx-1 my-1 bg-blue-300 rounded"></div>
                            <h1 className ="text-blue-400 my-1 font-semibold">HealthCare </h1>
                          </div>
                          <h1 className="text-gray-600 font-semibold">20%</h1>
                      </div>
                      <div className ="flex justify-evenly">
                          <div className="flex ">
                            <div className="p-3 mx-1 my-1 bg-yellow-400 rounded"></div>
                            <h1 className ="text-yellow-400 my-1 font-semibold">Communication </h1>
                          </div>
                          <h1 className="text-gray-600 font-semibold">20%</h1>
                      </div>
                      <div className ="flex justify-evenly">
                          <div className="flex ">
                            <div className="p-3 mx-1 my-1 bg-red-500 rounded"></div>
                            <h1 className ="text-red-500 my-1 font-semibold">Education </h1>
                          </div>
                          <h1 className="text-gray-600 font-semibold">10%</h1>
                      </div>
                      <div className ="flex justify-evenly">
                          <div className="flex ">
                            <div className="p-3 mx-1 my-1 bg-gray-600 rounded"></div>
                            <h1 className ="text-gray-600 my-1 font-semibold">Food & Bev. </h1>
                          </div>
                          <h1 className="text-gray-600 font-semibold">10%</h1>
                      </div>
                  </div>
                </div>
            </div>
            <div className="graph bg-white my-8 mx-4 rounded-xl">
                <LineGhaphy/>
            </div>
            
        </div>
        </div>
    )
}

export default DashBoard
