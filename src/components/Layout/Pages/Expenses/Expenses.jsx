import React, { Fragment, useState } from "react";
import { Row, Col, Button, Container, NavLink } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";
import { useSelector } from "react-redux";

const Expenses = () => {
  const [isExpense, setIsExpense] = useState(true);
  const isLoggedIn = useSelector((state) => state.Auth.isAuthenticated);

  const handleToggle = () => {
    setIsExpense((prev) => !prev);
  };

  return (
    isLoggedIn ? (
      <Fragment>
        <Container className="col-8">
          <Row className="mt-4 d-flex justify-content-between">
            <Col className="col-3 me-3">
              <Button
                onClick={handleToggle}
                variant={isExpense ? "primary" : "secondary"}
              >
                Add New Expense
              </Button>
            </Col>
            <Col className="col-3">
              <Button
                onClick={handleToggle}
                variant={!isExpense ? "success" : "secondary"}
              >
                Add New Income
              </Button>
            </Col>
          </Row>
          {isExpense ? <ExpenseForm /> : <IncomeForm />}
        </Container>
        <Row>
          <Col className="col-6">
            <ExpenseList />
          </Col>
          <Col className="col-6">
            <IncomeList />
          </Col>
        </Row>
      </Fragment>
    ) : (
      <NavLink to="/login">Please Login to Continue</NavLink>
    )
  );
};

export default Expenses;
