import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history=useHistory();

  const signupFormSubmitHandler = async (event) => {
    event.preventDefault();
    if(!email.includes('@')) 
    {
        alert('please enter valid email');
        return;
    }
    else if (password.trim().length < 6) {
      alert("password should have more than 6 characters");
      return;
    } else if (password !== confirmPassword) {
      alert("passwords are not matching");
      return;
    }
    const newUser = {
      email: email,
      password: password,
    };
    try {
      const storeNewUserDataResponse =await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c",
        newUser
      );
      if (storeNewUserDataResponse.status === 200)
      {
          alert("signedup Successfully");
          history.replace('/login');
      }else alert('unable to signUp');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="bg-light mt-5 p-4">
    <Row className="justify-content-center">
      <Col xs={12} md={6} lg={3}>
        <Form onSubmit={signupFormSubmitHandler}>
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

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
        <Button onClick={(e)=>history.replace('/login')} className="mt-3 btn-light btn-outline-dark">existing User: Sign In</Button>
      </Col>
    </Row>
  </Container>

  );
};

export default UserSignup;
