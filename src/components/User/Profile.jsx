import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Profile = () => {
    const [username, setUsername]=useState("");
    const [url, setURL]=useState("");
    const profileUpdateHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <Container>
        <Form onSubmit={profileUpdateHandler}>
            <Form.Group controlId='user-name'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                type='text'
                placeholder='enter full name...'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='photo-url'>
                <Form.Label>Profile Photo URL</Form.Label>
                <Form.Control
                type='url'
                placeholder='enter URL...'
                value={url}
                onChange={(e)=>setURL(e.target.value)}
                />
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Profile