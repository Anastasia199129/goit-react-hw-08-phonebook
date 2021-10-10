import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = '';

  return (
    <div>
      <img src={avatar} alt="" />
      <span>{`Добро пожвловать ${name}`}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        выйти
      </button>
    </div>
  );
}
