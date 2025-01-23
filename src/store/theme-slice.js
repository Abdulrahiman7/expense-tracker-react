import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice=createSlice({
    name:'theme',
    initialState:{darkTheme:false},
    reducers:{
        switchTheme:(state)=>{
            state.darkTheme=!state.darkTheme;
        }
    }
});
export const {switchTheme}=ThemeSlice.actions;

export default ThemeSlice.reducer;