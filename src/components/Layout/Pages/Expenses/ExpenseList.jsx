import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Expense from './Expense';
import { useDispatch, useSelector } from 'react-redux';
import { setExpenses } from '../../../../store/expense-slice';


const ExpenseList = () => {
    const dispatch=useDispatch();
    const expenses=useSelector((state)=>state.Expense.expenses);
    console.log(expenses);
    useEffect(()=>{
        const fetchExpenses=async()=>{
            try{
                const fetchExpensesResponse=await axios.get('https://expense-tracker-react-2b129-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json');
                const expenses = Object.keys(fetchExpensesResponse.data).map((key) => {
                    const e = fetchExpensesResponse.data[key];  
                    return { id: key, ...e }; 
                });
                dispatch(setExpenses(expenses));
            }catch(err)
            {
                console.log(err);
            }
        }
        fetchExpenses();
    },[])
  return (
    <Container>
        {
            expenses.map((expense)=> <Expense key={expense.id} expense={expense} />)
        }
    </Container>
  )
}

export default ExpenseList