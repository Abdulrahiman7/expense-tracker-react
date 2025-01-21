import React, { useState } from "react";
import {Row, Col, Button, Container, Form} from "react-bootstrap";

const Expenses = () => {
    const [isExpense, setIsExpense]=useState(true);
    const [money, setMoney]=useState(0);
    const [income, setIncome]=useState(0);
    const [description, setDescription]=useState("");
    const [category, setCategory]=useState("");
    const handleToggle=()=>{
        setIsExpense((prev)=> !prev);
    }
    const handleExpense=()=>{
        
    }
    const handleIncome=()=>{
        
    }
  return (
    <Container>
        hello
      <Row>
        <Col className="col-2">
          <Button
            onClick={handleToggle}
            variant={isExpense ? "primary" : "secondary"}
          >
            Add New Expense
          </Button>
        </Col>
        <Col className="col-2">
          <Button
            onClick={handleToggle}
            variant={!isExpense ? "success" : "secondary"}
          >
            Add New Income
          </Button>
        </Col>
      </Row>
      {isExpense ? (<Container className="mt-4">
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
            <option value="Salary">Salary</option>
            <option value="Entertainment">Entertainment</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>):( <Container className="mt-4">
      <h2>Income Tracker</h2>
      <Form onSubmit={handleIncome}>
        <Form.Group controlId="incomeAmount" className="mb-3">
          <Form.Label>Income Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the amount earned"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="incomeDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter income source or details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="incomeCategory" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">--Select Category--</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Investments">Investments</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>)}
    </Container>
  );
};

export default Expenses;
