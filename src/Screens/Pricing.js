import React from 'react'
import BlueDesign from "../image/BlueDesign.png"; 
import YellowDesign from "../image/YellowDesign.png"; 
import '../pricing.css'

const Pricing = () => {
    return (
        <div className ="pricing bg-white flex flex-col  justify-center">
            <img className="pricing_1 " src={BlueDesign} alt="" />
            <img className="pricing_2"  src={YellowDesign} alt="" />
            <img className="pricing_3" src={YellowDesign} alt="" />
            <img className="pricing_4" src={BlueDesign} alt="" />
            <div className="pricing_header py-10 text-center items-center">
                <h1 className="text-3xl text-blue-400 text- font-bold">CHOOSE YOUR PLAN </h1>
            </div>
            <div  className="pricing_content flex-1">
                <div className="card shadow-lg text-center">
                    <div className="card_main_1  py-2">
                        <h1 className="text-3xl text-gray-500 font-bold"> BASIC</h1>
                        <span className="dollar">$</span>
                        <h1 className ="text-blue-400 text-8xl font-bold">5</h1>
                        <p>Monthly</p>
                        <p className="text-yellow-400">($60 Annually)</p>
                    </div>
                    <div className="card_main_2 pt-2">
                        <h1 className="text-gray-500 text-xl">FEATURES</h1>
                        <h1 className="text-gray-500">Branch Module</h1>
                        <p className="text-gray-500">Booking Module</p>
                        <a href="#reg" className="regiser_link text-sm bg-blue-400 py-1 px-7 rounded-2xl text-white">REGISTER</a>
                    </div>
                </div>
                <div className="card shadow-lg text-center">
                    <div className="card_main_1  py-2">
                        <h1 className="text-3xl text-gray-500 font-bold"> STANDARD</h1>
                        <span className="dollar dollar_1">$</span>
                        <h1 className ="text-blue-400 text-8xl font-bold">10</h1>
                        <p>Monthly</p>
                        <p className="text-yellow-400">($120 Annually)</p>
                    </div>
                    <div className="card_main_2 pt-2">
                        <h1 className="text-gray-500 text-xl">FEATURES</h1>
                        <h1 className="text-gray-500">Branch Module</h1>
                        <p className="text-gray-500">Booking Module</p>
                        <p className="text-gray-500">Role Mgt. Module</p>
                        <a href="#reg" className="regiser_link text-sm bg-blue-400 py-1 px-7 rounded-2xl text-white">REGISTER</a>
                    </div>
                </div>

                <div className="card shadow-lg text-center">
                    <div className="card_main_1  py-2">
                        <h1 className="text-3xl text-gray-500 font-bold"> PREMIUM</h1>
                        <span className="dollar dollar_1">$</span>
                        <h1 className ="text-blue-400 text-8xl font-bold">20</h1>
                        <p>Monthly</p>
                        <p className="text-yellow-400">($240 Annually)</p>
                    </div>
                    <div className="card_main_2 pt-2">
                        <h1 className="text-gray-500 text-xl">FEATURES</h1>
                        <h1 className="text-gray-500 text-sm">Branch Module</h1>
                        <p className="text-gray-500 text-sm">Booking Module</p>
                        <p className="text-gray-500 text-sm">Role Mgt. Module</p>
                        <p className="text-gray-500 text-sm">User Mgt. Module</p>
                        <a href="#reg" className="regiser_link text-sm bg-blue-400 py-1 px-7 rounded-2xl text-white">REGISTER</a>
                    </div>
                </div>
                
            </div>
            <div  className="pricing_footer text-center my-2 h-24 justify-center items-center flex flex-col">
                <a href="#reg" className="text-center  text-sm bg-yellow-400 py-1 md:px-36  rounded-2xl text-white">Login</a>
                <div>
                    <a href="#rrr" className="text-sm">Already have an account?</a>
                </div>
            </div>
        </div>
    )
}

export default Pricing
