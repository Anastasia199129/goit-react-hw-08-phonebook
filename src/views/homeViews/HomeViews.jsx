import React from 'react';
import s from './homeViews.module.css';
import { BsFillHeartFill } from 'react-icons/bs';

export default function HomeViews() {
  return (
    <div className={s.wrapper}>
      {' '}
      Welcome <BsFillHeartFill className={s.icon} />
    </div>
  );
}
