import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink className={s.navLink} activeClassName={s.activeNavLink} exact to="/">
        Главная
      </NavLink>
      <NavLink className={s.navLink} activeClassName={s.activeNavLink} exact to="/contacts">
        Заметки
      </NavLink>
    </nav>
  );
}
