import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrivatRoute({ children, ...ollProps }) {
  const isloggdIn = useSelector(authSelectors.getIsLoggedIn);

  return <Route {...ollProps}>{isloggdIn ? children : <Redirect to="/login" />}</Route>;
}
