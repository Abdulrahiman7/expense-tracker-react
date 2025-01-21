import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios';

const EmailModal = (props) => {
    const [email, setEmail]=useState("");
    const sendVerificationMailHandler=async (event)=>{
        event.preventDefault();
        const url=`POST https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.FIREBASE_API_KEY}`;
        try{
            const sendMailResponse=await axios.post(url,
                {
                    requestType: "PASSWORD_RESET",
                    email: email,
                })
                if(sendMailResponse===200)
                {
                    alert('sent reset link successfully');
                }
        }catch(err)
        {
            console.log(err);
        }
    }
  return (
    <Modal show={props.show} onClose={props.onClose}>
        <Modal.Header closeButton></Modal.Header>
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
          <Button type="submit">Send Reset Password Link</Button>
        </Form>
    </Modal>
  )
}

export default EmailModal