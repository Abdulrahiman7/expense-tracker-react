import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const history=useHistory();

    const localStorageToken=localStorage.getItem('token');
    const [token, setToken]=useState(localStorageToken || "");
 

    useEffect(()=>{
        if(token) localStorage.setItem('token',token);
        else localStorage.removeItem('token');
    },[token])

  const loginHandler = async (user) => {
    user = { ...user, returnSecureToken: true };
    try {
      const storeNewUserDataResponse = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c",
        user
      );
      if(storeNewUserDataResponse.status === 200)
      {
        setToken(storeNewUserDataResponse.data.idToken);
      }else alert('Invalid User Credentials');
    } catch (err) {
      console.log(err);
    }
  };
  const signUpHandler=async (user)=>{
    try {
        const storeNewUserDataResponse =await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c",
          user
        );
        console.log(storeNewUserDataResponse);
        if (storeNewUserDataResponse.status === 200)
        {
            alert("signedup Successfully");
            history.replace('/login');
        }else alert('unable to signUp');
          
      } catch (err) {
        console.log(err);
      }
  }

  const logoutHandler=()=>{
    localStorage.removeItem('token');
    alert('logged out successfully');
  }

  const user={
    token:token,
    isLoggedIn:!!token,
    login:loginHandler,
    signup:signUpHandler,
    logout:logoutHandler,
  }

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
};

export default AuthContext;