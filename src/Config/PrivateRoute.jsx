import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    let isLoggedIn=localStorage.getItem("isLoginedIn")

    return isLoggedIn? (
        <>
         <Outlet/>
        </>
    ):
    (
        <Navigate to='/' />
    )
}

export default PrivateRoute
