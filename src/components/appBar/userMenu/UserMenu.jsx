import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
import s from './userMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = '';

  return (
    <div>
      <img className={s.avatar} src="img/cat.jpg" alt="cat" />
      <span className={s.text}>{`Добро пожвловать, ${name}`}</span>
      <button className={s.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
        выйти
      </button>
    </div>
  );
}
