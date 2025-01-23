// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth-slice";
import ExpenseReducer from "./expense-slice";

const store = configureStore({
  reducer: {
    Auth: AuthReducer, 
    Expense: ExpenseReducer
  },
});

export default store;
