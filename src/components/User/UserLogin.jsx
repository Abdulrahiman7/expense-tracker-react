import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UserLogin = () => {
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
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
      "returnSecureToken": true
    };
    try {
      const storeNewUserDataResponse =await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c",
        user
      );
      if (storeNewUserDataResponse.status === 200)
        history.replace('/');
    } catch (err) {
      console.log(err);
    }
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
      </Col>
    </Row>
  </Container>
  )
}

export default UserLogin