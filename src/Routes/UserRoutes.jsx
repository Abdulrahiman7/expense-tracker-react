import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import UserSignup from "../components/User/UserSignup";
import UserLogin from "../components/User/UserLogin";
import HomePage from "../components/HomePage/HomePage";

const UserRoutes = () => {
  return (
    <Router>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/signup' component={UserSignup} />
        <Route  path='/login' component={UserLogin} />
        </Switch>
    </Router>
  )
}

export default UserRoutes