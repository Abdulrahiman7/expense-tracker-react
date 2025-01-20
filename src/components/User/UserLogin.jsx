import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../store/auth-context";

const UserLogin = () => {
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
    const {login}=useContext(AuthContext);
  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    if(!email.includes('@')) 
    {
        alert('please enter valid email');
        return;
    }
    else if (password.trim().length < 6) {
      alert("password should have more than 6 characters");
      return;
    } 
    const user = {
      email: email,
      password: password,
    };

    login(user);
    history.push('/');
   
  };
  return (
    <Container className="bg-light mt-5 p-4">
    <Row className="justify-content-center">
      <Col xs={12} md={6} lg={3}>
        <Form onSubmit={loginFormSubmitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Login
          </Button>
        </Form>
        <Button onClick={(e)=>history.replace('/signup')} className="mt-3 btn-light btn-outline-dark">new User: Sign Up</Button>
      </Col>
    </Row>
  </Container>
  )
}

export default UserLogin