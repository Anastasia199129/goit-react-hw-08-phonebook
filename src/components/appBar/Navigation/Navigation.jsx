import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">
        Главная
      </NavLink>
      <NavLink exact to="/contacts">
        Заметки
      </NavLink>
    </nav>
  );
}
