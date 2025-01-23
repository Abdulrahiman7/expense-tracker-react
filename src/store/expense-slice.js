import { createSlice } from "@reduxjs/toolkit";

const localExpenseData = JSON.parse(localStorage.getItem("expenses"));
const initialState = localExpenseData
  ? {
      expenses: localExpenseData,
      totalAmount: localExpenseData.reduce(
        (acc, expense) => (acc += +expense.expense)
      ),
    }
  : { expenses: [], totalAmount: 0 };

const ExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload;
      state.totalAmount+= +action.payload.expense;
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
    addExpense: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
      state.totalAmount+= +action.payload.expense;
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
    editExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) =>
        expense.id === action.payload.expense.id
          ? action.payload.expense
          : expense
      );
      state.totalAmount+= +action.payload.expense;
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id != action.payload.id
      );
      state.totalAmount-= +action.payload.expense;
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
  },
});

export const { setExpenses, addExpense, editExpense, deleteExpense } =
  ExpenseSlice.actions;

export default ExpenseSlice.reducer;
