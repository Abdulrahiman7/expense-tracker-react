import React, { useState } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";

const EmailModal = (props) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess]=useState(false);
  const sendVerificationMailHandler = async (event) => {
    event.preventDefault();
    setSuccess(true);
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c`;
    const continueUrl='http://localhost:3000/password-reset-status/';
    try {
      const sendMailResponse = await axios.post(url, {
        requestType: "PASSWORD_RESET",
        email: email,
        continueUrl:continueUrl
      });
      setSuccess(false);
        alert("sent reset link successfully, Check Your Email");
        setEmail("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal show={props.show} onClose={props.onClose}>
      <Modal.Header>
        <Modal.Title>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={sendVerificationMailHandler}>
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
          <Button variant="primary" type="submit">
            Send Reset Link
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {success &&  <Spinner
                            animation="border"
                            role="status"
                            className="mt-3"
                            style={{ width: '2rem', height: '2rem' }}
                        >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailModal;
