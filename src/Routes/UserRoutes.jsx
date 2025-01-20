import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import UserSignup from "../components/User/UserSignup";
import UserLogin from "../components/User/UserLogin";
import HomePage from "../components/HomePage/HomePage";
import Header from "../components/Layout/Header/Header";
import Profile from "../components/User/Profile/Profile";

const UserRoutes = () => {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/signup' component={UserSignup} />
        <Route  path='/login' component={UserLogin} />
        <Route path='/profile' component={Profile} />
        </Switch>
    </Router>
  )
}

export default UserRoutes