import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './authNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink className={s.navLink} activeClassName={s.activeNavLink} exact to="/register">
        Регистрация
      </NavLink>
      <NavLink className={s.navLink} activeClassName={s.activeNavLink} exact to="/login">
        Логин
      </NavLink>
    </nav>
  );
}
