import React,{useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Logo from '../image/Logo.png'
import PoweredbyRAOATECH from '../image/PoweredbyRAOATECH.png'

const NavBar = (props) => {
    const [isOpen, setisOpen] = useState(true)
    const [navlinks, setNavLink] = useState([
        {link:'/dashboard',linkName:'Dashboard'},
        {link:'/product_services_management',linkName:'Product/Services Management'},
        {link:'/branch_management',linkName:'Branch Management'},
        {link:'/customer_management',linkName:'Customer Management'},
        {link:'/user_management',linkName:'User Management'},
        {link:'/role_management',linkName:'Role Management'},
    ])


    
    const handlePathName = () =>{
    let path = props.location.pathname

    switch (path) {
        case '/signup':
            return 'hidden'
        case '/':
            return 'hidden'
        case '/pricing':
            return 'hidden'
            
        case '/login':
                return 'hidden'
        default:
            return 'bg-gray-300 z-10 md:h-20 sm:h-32 fixed w-screen ';
    }
    }

    const handleMenu = () =>{
        // if (!isOpen) {
        //     setisOpen(false)
            document.querySelector('.navvs').style.display = 'flex'
        // }
    }

    let path = props.location.pathname
    // const myLink = navlinks.map(navLink =>{
    //     return navlinks.link
    // })

    const handleActiveLink = () =>{
document.querySelector('.navvs').style.display = 'none'
setisOpen(true)
    }
    
    
    return (
        <div className = {handlePathName()}>
        <div className ='absolute  flex flex-col justify-evenly navvs items-center bg-indigo-900 h-screen w-80 z-10' >
                    <img src={Logo} className="w-16" alt="" />
                    <ul className="text-white">
                    {
                        navlinks.map(navLink =>{
                            return(
                                <li className = {path === navLink.link ? 'active navLink' : 'navLink'}><Link to={navLink.link} onClick ={()=>handleActiveLink()}  >{navLink.linkName}</Link></li>
                            )
                        })
                    }

                    </ul>
                    <img src={PoweredbyRAOATECH} alt="" />
                    
        </div>
            <nav class="md:flex sm:block m-auto ml-2 container md:items-center relative">
            
                <div className="narBar_left flex-1 flex sm:items-start  items-center justify-evenly">
                    <i onClick ={() =>handleMenu()} class="cursor-pointer  material-icons md:m-4 text-5xl">menu</i>  
                    <h1 className="text-3xl m-4">Dashboard</h1>
                </div>
                
                <div className ="text-indigo-900 narBar_right flex flex-1  sm:items-start md:items-center justify-between">
                    <div className ="flex relative mr-10">
                        <input type="search" placeholder="...search" className="bg-indigo-900 text-right placeholder-white right sm:w-16 md:w-80 h-8 rounded"/>
                        <i class="material-icons absolute mt-2 sm:text-sm text-white">search</i>
                    </div>
                    <div className="details flex md:w-10 sm:w-8   relative">
                        <p className="absolute bg-red-500 -my-2 text-xs text-white px-1 rounded">2</p>
                        <p className="absolute bg-red-500 mx-10 -my-2 text-xs text-white px-1 rounded">2</p>
                        <i class="material-icons">notifications</i>
                        <i class="material-icons">mail</i>
                    </div>
                    <div className ="admin_detail flex mt-3">
                    <i class="material-icons text-sm my-4 px-2">arrow_circle_down</i>

                        <div className="-my-3">
                        <h1 className="text-sm sm:text-xm">Mgbeojikwe Stephen</h1>
                        <p className="text-xs">It is Well</p>
                        </div>
                    <i class="avatar material-icons text-5xl pr-8">account_circle</i>
                    </div>
                <div>
                     
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)
