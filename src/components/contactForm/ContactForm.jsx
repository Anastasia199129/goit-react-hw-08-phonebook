import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './contactForm.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import selectors from '../../redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';

const ContactForm = ({ propOnSubmit, allContacts }) => {
  const [namePerson, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    let repideNummer = allContacts.find(contact => {
      return contact.name.toLowerCase() === namePerson.toLowerCase();
    });

    !repideNummer
      ? propOnSubmit({ name: namePerson, number: number })
      : toast(`contact with name: "${namePerson}" already exists`);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label className={style.label}>
        {' '}
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          onChange={handleChange}
          value={namePerson}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Name"
        />
      </label>
      <label className={style.label}>
        {' '}
        Number
        <input
          className={style.input}
          type="text"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          placeholder="Phone"
        />
      </label>

      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = state => ({
  allContacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  propOnSubmit: obj => dispatch(operations.addContacts(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
