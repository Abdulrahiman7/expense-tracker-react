import { createSlice } from "@reduxjs/toolkit";


const ExpenseSlice=createSlice({
    name:'expense',
    initialState:{ expenses: JSON.parse(localStorage.getItem("expenses")) || []},
    reducers:{
        setExpenses:(state, action)=>{
            state.expenses=action.payload;
            localStorage.setItem('expenses',JSON.stringify(state.expenses));
        },
        addExpense:(state, action)=>{
            state.expenses=[...state.expenses, action.payload.expense];
            localStorage.setItem('expenses',JSON.stringify(state.expenses));
        },
        editExpense:(state, action)=>{
            state.expenses = state.expenses.map((expense) =>
                expense.id === action.payload.expense.id ? action.payload.expense : expense
                );
              localStorage.setItem("expenses", JSON.stringify(state.expenses));
        },
        deleteExpense:(state, action)=>{
            state.expenses=state.expenses.filter((expense)=>expense.id != action.payload.id);
            localStorage.setItem('expenses',JSON.stringify(state.expenses));
        }
    }
});

export const {setExpenses, addExpense, editExpense, deleteExpense}=ExpenseSlice.actions;

export default ExpenseSlice.reducer;