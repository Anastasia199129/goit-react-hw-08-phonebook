import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './authNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink exact to="/register">
        Регистрация
      </NavLink>
      <NavLink exact to="/login">
        Логин
      </NavLink>
    </nav>
  );
}
