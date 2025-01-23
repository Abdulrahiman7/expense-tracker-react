import React, { useState } from 'react'
import { Navbar, Nav,Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UserSection from '../../User/UserSection'
import { useDispatch, useSelector } from 'react-redux'
import { switchTheme } from '../../../store/theme-slice'


const Header = () => {
  const isDarkTheme=useSelector((state)=>state.Theme.darkTheme);
  const dispatch=useDispatch();

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className='d-flex justify-content-between p-3 text-light'>
        <Navbar.Brand><NavLink to='/'>Expense App</NavLink></Navbar.Brand>
        <NavLink to='/expenses' className="btn btn-outline-light">Expenses</NavLink>
        <UserSection />
        <Form>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label={isDarkTheme ? "Dark Mode" : "Light Mode"}
          checked={isDarkTheme}
          onChange={(e)=>{dispatch(switchTheme())}}
        />
      </Form>
    </Navbar>
  )
}

export default Header