import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute2 = ({ component: Component, ...rest }) => {
  const isAuthRec = useSelector((state) => state.authRecReducer.isAuthRec);

  if (!isAuthRec) {
    return <Redirect to="/" />;
  }                                    
  return <Route component={Component} {...rest} />;
};

export default PrivateRoute2;