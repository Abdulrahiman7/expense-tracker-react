import React, { Fragment } from "react";
import {Route} from "react-router-dom";
import Expenses from "../components/Layout/Pages/Expenses/Expenses";
import HomePage from "../components/Layout/Pages/HomePage";

const PagesRoutes = () => {
  return (
    <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/expenses" component={Expenses} />
    </Fragment>
  );
};

export default PagesRoutes;
