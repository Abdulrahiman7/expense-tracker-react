import { Route } from "react-router-dom";
import React, { Fragment } from 'react'
import UserSignup from "../components/User/UserSignup";
import UserLogin from "../components/User/UserLogin";
import Profile from "../components/User/Profile/Profile";
import ResetStatus from "../components/User/ForgotPassword/ResetStatus";

const UserRoutes = () => {
  return (
    <Fragment>
        <Route  path='/signup' component={UserSignup} />
        <Route  path='/login' component={UserLogin} />
        <Route path='/profile' component={Profile} />
        <Route path='/password-reset-status' component={ResetStatus} />
    </Fragment>
  )
}

export default UserRoutes