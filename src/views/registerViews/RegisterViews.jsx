import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import s from './registerViews.module.css';
import authOperations from '../../redux/auth/auth-operations';

export default function RegisterViews() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form className={s.formWrapper} onSubmit={handleSubmit}>
      <FloatingLabel className={s.name} controlId="name" label="Name">
        <Form.Control
          value={name}
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
        />
      </FloatingLabel>
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
    </form>
  );
}
