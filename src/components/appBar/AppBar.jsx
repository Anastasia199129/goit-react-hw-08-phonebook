import React from 'react';
import { Link } from 'react-router-dom';
import RegisterViews from '../../views/registerViews/RegisterViews';

export default function AppBar() {
  return (
    <div>
      <RegisterViews />
      <Link to="/contacts">
        {' '}
        <button type="button"> contacts</button>
      </Link>
    </div>
  );
}
