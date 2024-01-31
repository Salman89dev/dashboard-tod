import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = () => {
let isLoggedIn=localStorage.getItem("isLoginedIn")
  return !isLoggedIn?(
    <Outlet/>
  ):
  (
    <Navigate to="dashboard" />
  )

}

export default PublicRouter
