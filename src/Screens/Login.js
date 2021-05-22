import React from 'react'
import Logo from "../image/B_QLogo.png"; 
import PoweredbyRAOATECH from "../image/PoweredbyRAOATECH.png"; 
import BlueDesign from "../image/BlueDesign.png"; 
import YellowDesign from "../image/YellowDesign.png"; 
import '../Login.css'

function Login() { 
    return (
        <div className="loginPage ">
            <div className="loginPage_left">
                <img src={Logo} alt="" />
                <div className ="footerLogin">
                    <img src={PoweredbyRAOATECH} alt="" />
                </div>
            </div> 
            
            <div className="loginPage_right">
                <div className ="loginDesign">
                    <img className="union_2" src={YellowDesign} alt="" />
                    <img className="union_1" src={BlueDesign} alt="" />
                </div>
                
                <div className="signin">
                    <div className ="singin_header">
                        <h1>Welcome Back!</h1>
                        <p>Login to continue</p>
                    </div>
        
                    <form>
                        <div className="input_field">
                        <i class="large material-icons icon">mail</i>
                            <input className="control_form" type="url" placeholder = "Enter your Email"/>
                        </div>
                        <div className="input_field">
                            <i class="large material-icons icon">lock</i>
                            <i class="large material-icons icon icon_visiblity">visibility </i>
                            <input className="control_form" type="password" placeholder = "Enter password"/>
                        </div>
                        <div className="input_field">
                            <h3><input type="checkbox" className="Remember-Me-Tick-Box"/> <span className="Remember"> Remmber me?</span></h3>
                        </div>
                        <div className="input_field_3">
                            <button className ="btnBule">LOGIN</button>
                            <a href='#1' className ="Forgot-Password">Forgot Password</a>
                        </div>
                        <div className="input_field">
                            <h2 className="login_with">Login with <a href="#2" className="email">Email</a></h2>
                            <p className ="Package_Pricing"><a href="#3">Package Pricing</a></p>
                        </div>
                    </form>
                </div>
                <div className="signup">
                    <h1 className="new_user">New User? <a href="#4">Sign Up</a></h1>
                </div>
            </div>
        </div>
    )
}

export default Login
