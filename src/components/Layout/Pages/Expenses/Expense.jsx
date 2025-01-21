import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, Modal, Form, Container } from 'react-bootstrap';

const Expense = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [money, setMoney] = useState(props.expense.expense);
  const [description, setDescription] = useState(props.expense.description);
  const [category, setCategory] = useState(props.expense.category);
  const [error, setError] = useState(null);

  // Update local state when props.expense changes


  const editExpenseHandler = async (event) => {
    try {
      event.preventDefault();
      setError(null);
      if (money <= 0) {
        setError("Please enter a price greater than 0");
        return;
      }
      if (description.trim() === "") {
        setError("Please enter a description");
        return;
      }

      const editedExpense = {
        expense: money,
        description: description,
        category: category,
      };

      const editExpenseResponse = await axios.put(`https://expense-tracker-react-2b129-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${props.expense.id}.json`, editedExpense); // Use expense.id instead of props.key

      if (editExpenseResponse.status === 200) {
        alert('Update successful');
        setIsEditMode(false);
      }
    } catch (err) {
      console.log(err);
      setError("Error updating expense");
    }
  };

  const deleteExpenseHandler = async () => {
    try {
        console.log(props.key);
      const deleteExpenseResponse = await axios.delete(`https://expense-tracker-react-2b129-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${props.expense.id}.json`); // Use expense.id instead of props.key
      if (deleteExpenseResponse.status === 200) {
        alert('Expense deleted successfully');
      }
    } catch (err) {
      console.log(err);
      setError("Error deleting expense");
    }
  };

  return (
    <Card>
      <Modal show={isEditMode} onHide={() => setIsEditMode(false)}>
        <Container className="mt-4">
          <Modal.Header closeButton>
            <Modal.Title>Edit Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <p className="text-danger">{error}</p>}
            <Form onSubmit={editExpenseHandler}>
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
                  <option value="Salary">Salary</option> {/* Corrected from Travel to Salary */}
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                Edit
              </Button>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>

      <Card.Title>{props.expense.expense}</Card.Title>
      <Card.Body>
        {props.expense.description}
        <p>{props.expense.category}</p>
      </Card.Body>
      <Card.Footer>
        <Button className='btn-primary' onClick={() => setIsEditMode(true)}>Edit</Button>
        <Button className='btn-danger' onClick={deleteExpenseHandler}>Delete</Button>
      </Card.Footer>
    </Card>
  );
};

export default Expense;
