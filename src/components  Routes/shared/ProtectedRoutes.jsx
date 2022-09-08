import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const isLogged = localStorage.getItem('token')

// si exsite este elemneto en el localStore
// Outlet redneriza los elemnetos de las rutas hijas
 if(isLogged){
    return <Outlet></Outlet>
 }else{
    return  <Navigate to='/login'/>
 }
}

export default ProtectedRoutes