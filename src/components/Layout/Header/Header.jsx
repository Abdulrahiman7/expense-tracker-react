import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UserSection from '../../User/UserSection'


const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
        <UserSection />
    </Navbar>
  )
}

export default Header