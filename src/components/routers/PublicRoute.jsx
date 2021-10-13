import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  redirectTo = '/',
  restricted = false,
  ...routeProps
}) {
  const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
  const showRedirect = restricted && isloggedIn;
  return <Route {...routeProps}>{showRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
}
