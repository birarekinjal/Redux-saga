/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/order */
/* eslint-disable import/first */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component, Fragment, Suspense } from "react";
import ReactDOM from "react-dom";
import { withRouter, Redirect } from "react-router";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
// import Loader from "./component/Loader.jsx";
import PrivateRoute from "./router/Private.jsx";
import PublicRoute from "./router/Public.jsx";


const Signup = loadable(() => import("./container/Auth/Signup.jsx"), {
  fallback: <h2>Loading...</h2>,
});

class Main extends Component {
  render() {
    const route = (
      <Switch>
        <PublicRoute restricted component={Signup} path="/" exact />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <>
        {route}
      </>
    );
  }
}

export default withRouter(Main);
