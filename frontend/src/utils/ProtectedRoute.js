import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default (props) => {
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  if (!isAuth) {
    return <Redirect to='/login' />;
  }
  return <Route {...props} />;
};
