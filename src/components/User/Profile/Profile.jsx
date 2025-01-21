import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'

const Profile = () => {
    const [username, setUsername]=useState("");
    const [url, setURL]=useState("");
    const [editMode, setEditMode]=useState(false);
    const [verifiedUser, setVerifiedUser]=useState(false);
    

    const token=localStorage.getItem('token');
    useEffect(()=>{
        const fetchUserProfile=async()=>{
            try{
                
                const getProfileResponse=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c`,{idToken:token})
                setURL(getProfileResponse.data.users[0].photoUrl );
                setUsername(getProfileResponse.data.users[0].displayName);
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
                
            const getProfileResponse=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c`,{idToken:token, displayName:username, photoUrl:url})
            if(getProfileResponse.status ===200)
            {
                setUsername(username);
                setURL(url);
                setEditMode(false);
            }
        }catch(err) 
        {
            console.log(err);
        }
    }

    const verifyEmailHandler=async (event)=>{
        try{
            const verifyEmailResponse=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c',{requestType:"VERIFY_EMAIL", idToken:token})
            console.log(verifyEmailResponse);
            
        }catch(err)
        {
            console.log(err);
        }
    }
  return (
    <Container>
        {
            editMode && <Form onSubmit={profileUpdateHandler}>
            <Form.Group controlId='user-name'>
                <Form.Label>Full Name: {username}</Form.Label>
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
        }
        {
            !editMode && <>
            
            <Image src={url} alt="image" width="50px" height="50px"/>
            {username}
            <Button onClick={()=>setEditMode(true)}>Edit</Button>
            </>
        }
        {
            !verifiedUser && <Button onClick={verifyEmailHandler}>Verify Account Now</Button>
        }
        
    </Container>
  )
}

export default Profile