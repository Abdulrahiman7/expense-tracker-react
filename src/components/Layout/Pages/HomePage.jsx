import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const isDarkTheme=useSelector((state)=>state.Theme.darkTheme);
  if(isDarkTheme) document.body.style='background: #202020;';
  else document.body.style='background: white;';
  return (
    <Container fluid
    className={`${isDarkTheme ? "bg-dark text-white" : "bg-light text-dark"} w-100 h-100`} // Conditionally apply bg-dark and text-white for dark theme
    style={{ height: "100vh", width:"100vw" }} // Full viewport height
  >
      Hello HomePage
      
    </Container>
  )
}

export default HomePage