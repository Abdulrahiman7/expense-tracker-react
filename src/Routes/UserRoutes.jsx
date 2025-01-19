import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import UserSignup from "../components/User/UserSignup";

const UserRoutes = () => {
  return (
    <Router>
        <Route to='/signup' component={UserSignup} />
    </Router>
  )
}

export default UserRoutes