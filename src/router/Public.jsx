/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  // const userData = JSON.parse(localStorage.getItem('userData'));
  // let token;
  // if (userData == null || userData == '') {
  //   token = null;
  // } else {
  //   token = userData.userToken;
  // }

  const isLogin = () => {
    // if(token != null){
    //   return true
    // }
    return true
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        isLogin() && restricted
          ? <Redirect to="/" />
          : <Component {...props} />
      )}
    />
  );
};

export default PublicRoute;
