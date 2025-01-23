import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:null,
    isAuthenticated:false
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.token=action.payload.token;
            state.isAuthenticated=true;
            localStorage.setItem("token", action.payload.token); 
        },
        logout:(state)=>{
            state.token=null;
            state.isAuthenticated=false;
            localStorage.removeItem("token");
        }
    }
})

export const {login, logout}=authSlice.actions;

export default authSlice.reducer;