import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './loginViews.module.css';

export default function LoginWiews() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form className={s.form} onSubmit={onSubmit}>
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control
          value={email}
          name="email"
          type="email"
          placeholder="name@example.com"
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          value={password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </FloatingLabel>
      <Button className={s.Button} type="submit" variant="info">
        save
      </Button>
    </Form>
  );
}
