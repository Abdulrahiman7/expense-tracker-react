import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UserSection from '../../User/UserSection'


const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className='d-flex justify-content-between p-3 text-light'>
        <Navbar.Brand><NavLink to='/'>Expense App</NavLink></Navbar.Brand>
        <NavLink to='/expenses' className="btn btn-outline-light">Expenses</NavLink>
        <UserSection />
    </Navbar>
  )
}

export default Header