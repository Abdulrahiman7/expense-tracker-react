import React, { useContext } from 'react'
import Profile from './Profile/Profile'
import AuthContext from '../../store/auth-context'
import { Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const UserSection = () => {
  const {isLoggedIn, logout}=useContext(AuthContext);
  return (
      <div className="user-section">
        {isLoggedIn && (
          <>
          <NavLink to='/profile'>Profile</NavLink>
          <Button onClick={logout}>Logout</Button>
          </>
        )
       }
        {!isLoggedIn && <NavLink to='/login'>Login / Signup</NavLink>}
        </div>
  )
}

export default UserSection