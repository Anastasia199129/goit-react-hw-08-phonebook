import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../../redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PrivatRoute({ children, redirectTo = '/', ...routeProps }) {
  const isloggdIn = useSelector(authSelectors.getIsLoggedIn);

  return <Route {...routeProps}>{isloggdIn ? children : <Redirect to={redirectTo} />}</Route>;
}

PrivatRoute.propTypes = {
  isloggdIn: PropTypes.bool,
};
