// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth-slice";
import ExpenseReducer from "./expense-slice";
import ThemeReducer from "./theme-slice"

const store = configureStore({
  reducer: {
    Auth: AuthReducer, 
    Expense: ExpenseReducer,
    Theme:ThemeReducer
  },
});

export default store;
