import React from 'react'
import { Card } from 'react-bootstrap'

const Expense = (props) => {
  return (
    <Card>
        <Card.Title>{props.expense.expense}</Card.Title>
        <Card.Body>{props.expense.description}</Card.Body>
        <Card.Footer>{props.expense.category}</Card.Footer>
    </Card>
  )
}

export default Expense