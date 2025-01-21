import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Expense from './Expense';

const ExpenseList = () => {
    const [expenses, setExpenses]=useState({});
    useEffect(()=>{
        const fetchExpenses=async()=>{
            try{
                const fetchExpensesResponse=await axios.get('https://expense-tracker-react-2b129-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json');
                setExpenses(fetchExpensesResponse.data);
            }catch(err)
            {
                console.log(err);
            }
        }
        fetchExpenses();
    },[expenses])
  return (
    <Container>
        {
            Object.keys(expenses).map((key)=> <Expense key={key} expense={{...expenses[key],id:key}} />)
        }
    </Container>
  )
}

export default ExpenseList