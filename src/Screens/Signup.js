import React from 'react'
import Logo from "../image/B_QLogo.png"; 
import PoweredbyRAOATECH from "../image/PoweredbyRAOATECH.png"; 
import BlueDesign from "../image/BlueDesign.png"; 
import YellowDesign from "../image/YellowDesign.png"; 
import '../Signup.css'


function Signup() { 
    
    
    return (
        <div className="signupPage md:h-screen w-full">
                    <img className="union_2" src={YellowDesign} alt="" />
                    <img className="union_1" src={BlueDesign} alt="" />
            <div className="signPage_left">
                <img className="w-32 my-36" src={Logo} alt="" />
                <img  src={PoweredbyRAOATECH} alt="" />
            </div> 
            
            <div className="signPage_right">
                
                
                <div className="signup">
                    <div className ="singup_header">
                        <div className ="singup_header_left">
                            <h1 className="md:text-4xl sm:text-3xl font-bold text-gray-500">Welcome Back!</h1>
                            <p  className="text-xl text-gray-500">Sign Up to continue</p>
                        </div>
                        <div className ="singup_header_left">
                        <p className ="md:text-xl text-gray-500 sm:text-sm">Own an Account? <a href="#3" className="text-blue-400 font-bold">Login</a></p>
                        </div>
                    </div>
        
                    <div className="signup_content">
                    <form className="signup_form gird ">
                        <div className="input_field">
                        <i class="large material-icons icon">person</i>
                            <input className="control_form" type="text" placeholder = "First Name, Last Name"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">mail</i>
                            <input className="control_form" type="text" placeholder = "Enter your Email"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">phone</i>
                            <input className="control_form" type="text" placeholder = "Phone Number"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">business</i>
                            <input className="control_form" type="text" placeholder = "Company Name"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">location_on</i>
                            <input className="control_form" type="text" placeholder = "Address"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">public</i>
                            <input className="control_form" type="text" placeholder = "Country"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">mail</i>
                            <input className="control_form" type="text" placeholder = "First Name, Last Name"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">lock</i>
                            <input className="control_form" type="password" placeholder = "Enter Password"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">attach_money</i>
                            <input className="control_form" type="text" placeholder = "Select Subscription"/>
                        </div>
                        <div className="input_field">
                        <i class="large material-icons icon">lock</i>
                            <input className="control_form" type="password" placeholder = "Confrim Password"/>
                        </div>
                        
 
                        <div className="input_field_3 flex justify-between items-center">
                            <button className ="btnBule">LOGIN</button>
                            <a href='#1' className ="text-yellow-300 font-bold">Package Pricing?</a>
                        </div>
                        
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
