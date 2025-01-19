import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        "https://expense-tracker-react-2b129-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        newUser
      );
      if (storeNewUserDataResponse.status === 400)
        alert("signedup Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="signup-container bg-light mt-5 p-4 w-lg-25">
  <Form onSubmit={signupFormSubmitHandler} className="signup-form text-start">
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicConfirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</Container>

  );
};

export default UserSignup;
