import React from 'react';
import { Link } from 'react-router-dom';
// import LoginWiews from '../../views/loginViews/LoginWiews';
// import RegisterViews from '../../views/registerViews/RegisterViews';
import AuthNav from './authNav/AuthNav';
import Navigation from './Navigation/Navigation';
import UserMenu from './userMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import s from './appBar.module.css';

export default function AppBar() {
  const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isloggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
