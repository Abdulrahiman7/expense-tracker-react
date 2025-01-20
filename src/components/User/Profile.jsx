import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Profile = () => {
    const [username, setUsername]=useState("");
    const [url, setURL]=useState("");
    const token=localStorage.getItem('token');
    useEffect(()=>{
        const fetchUserProfile=async()=>{
            try{
                
                const getProfileResponse=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c`,{idToken:token})
                setURL(getProfileResponse.data.photoUrl || "");
                setUsername(getProfileResponse.data.username || "");
            }catch(err) 
            {
                console.log(err);
            }
        }
        fetchUserProfile();
    },[])
    const profileUpdateHandler=async (event)=>{
        event.preventDefault();
        try{
                
            const getProfileResponse=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c`,{idToken:token, username:username, photoUrl:url})
            if(getProfileResponse.status ===200) alert('updated successfully');
        }catch(err) 
        {
            console.log(err);
        }
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
            <Button type='submit'>Update</Button>
        </Form>
    </Container>
  )
}

export default Profile