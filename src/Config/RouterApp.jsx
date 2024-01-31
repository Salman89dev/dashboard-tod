import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import Dashboards from '../Pages/Dashboard';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';
import PublicRouter from './PublicRouter';


const RouterApp = () => {
    const router=createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route path='' element={<PublicRouter/>}>
            <Route path=''  element={<Login />}/>
          </Route>

          <Route path='' element={<PrivateRoute/>}>
            <Route path='dashboard' element={<Dashboards />}/>
          </Route>

        </Route>
      )
    )


  return (
    <div>
            <RouterProvider router={router} />
    </div>
  )
}



export default RouterApp
