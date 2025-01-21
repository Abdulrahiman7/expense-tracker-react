import React,{useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
const IncomeForm = () => {

    const [income, setIncome]=useState(0);
    const [description, setDescription]=useState("");
    const [category, setCategory]=useState("");
    const handleIncome=()=>{
            
        }
  return (
    <Container className="mt-4">
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
    </Container>
  )
}

export default IncomeForm