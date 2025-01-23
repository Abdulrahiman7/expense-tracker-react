import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRoutes from './UserRoutes';
import PagesRoutes from './PagesRoutes';
import { useSelector } from 'react-redux';
const Routes = () => {
  const isDarkTheme=useSelector((state)=>state.Theme.darkTheme);
  if(isDarkTheme) document.body.style='background: #202020;';
  else document.body.style='background: white;';
  return (

        <Switch>
            <div>
            <PagesRoutes />
            <UserRoutes />
            </div>
        </Switch>
  )
}

export default Routes