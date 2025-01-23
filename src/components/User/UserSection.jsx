import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/auth-slice"

const UserSection = () => {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector((state)=>state.Auth.isAuthenticated);
  return (
      <div className="user-section">
        {isLoggedIn && (
          <>
          <NavLink to='/profile'>Profile</NavLink>
          <Button onClick={()=>dispatch(logout())}>Logout</Button>
          </>
        )
       }
        {!isLoggedIn && <NavLink to='/login'>Login / Signup</NavLink>}
        </div>
  )
}

export default UserSection