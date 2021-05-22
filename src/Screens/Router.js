import React from 'react'
import DashBoard from '../Screens/DashBoard'
import Login from '../Screens/Login'
import NavBar from '../Screens/NavBar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from '../Screens/Signup'
import Intro from './Intro'
import Pricing from './Pricing'
import Product_Services_Management from '../Product_Services_Management'




const Router = () => {
    return (
        

        <BrowserRouter>
            <NavBar/>
            <Switch>
            <Route path ='/' exact component = {Intro} />
                <Route path= '/dashboard'  component ={DashBoard} />
                <Route path= '/login'  component ={Login} />
                <Route path= '/signup'  component ={Signup} />
                <Route path= '/pricing'  component ={Pricing} />
                <Route path= '/product_services_management'  component ={Product_Services_Management} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
