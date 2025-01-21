import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ExpenseForm = () => {
    const [money, setMoney]=useState(0);
    const [error, setError]=useState(null);

    const [description, setDescription]=useState("");
    const [category, setCategory]=useState("");
    const handleExpense=async (event)=>{
        event.preventDefault();
        setError(null);
        if(money<=0)
        {
            setError("please enter price > 0");
            return;
        }
        if(description.trim() === 0)
        {
            setError("please enter description");
            return;
        }
        const newExpense={
            expense:money,
            description:description,
            category:category
        }
        try{
            const uploadNewExpenseResponse=await axios.post('https://expense-tracker-react-2b129-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json',newExpense);
            if(uploadNewExpenseResponse.status === 200)
            {
                console.log('success');
            }
        }catch(err)
        {
            console.log(err);
        }
    }
  return (
    <Container className="mt-4">
      <h2>Expense Tracker</h2>
      <Form onSubmit={handleExpense}>
        <Form.Group controlId="moneySpent" className="mb-3">
          <Form.Label>Money Spent</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the amount spent"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="expenseDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter expense description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="expenseCategory" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">--Select Category--</option>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Travel">Salary</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default ExpenseForm