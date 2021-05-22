import React from 'react'
import BlueDesign from '../image/BlueDesign.png'
import YellowDesign from '../image/YellowDesign.png'
import B_QLogo from '../image/B_QLogo.png'
// import ImageMask from '../image/ImageMask.png'
import PoweredbyRAOATECH from '../image/PoweredbyRAOATECH.png'
import '../Intro.css'


function Intro(props) {
    

    const goToDashboard = () =>{
        setTimeout(() => {
            if (props.location.pathname === '/') {
                props.history.push('/dashboard')
            }
        }, 3000);
    }

    goToDashboard()

    return (
        <div className="intro h-screen w-full flex justify-center flex-col items-center">
                <img src={YellowDesign} className="YellowDesign" alt="" />
                <img src={BlueDesign} alt="" className="BlueDesign" />
            <div className="intro_Content flex-1 flex flex-col  py-16 justify-between">
                <img src={B_QLogo}  alt="" />
                <img src={PoweredbyRAOATECH} alt="" />
            </div>
        </div>
    )
}

export default Intro
