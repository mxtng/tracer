import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  if (!isAuth) {
    return <Redirect to='/login' />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
