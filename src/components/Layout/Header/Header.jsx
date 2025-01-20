import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UserActions from '../../User/UserActions'

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
        <NavLink to='/profile'>Profile</NavLink>
        <UserActions />
    </Navbar>
  )
}

export default Header