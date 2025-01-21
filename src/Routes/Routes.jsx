import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRoutes from './UserRoutes';
import PagesRoutes from './PagesRoutes';
const Routes = () => {
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