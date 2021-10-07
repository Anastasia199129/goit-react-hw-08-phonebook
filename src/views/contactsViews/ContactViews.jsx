import React from 'react';

import PropTypes from 'prop-types';
import s from './contactViews.module.css';
import { connect } from 'react-redux';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactList from '../../components/contactList/ContactList';
import Title from '../../components/title/Title';
import operations from '../../redux/contacts/contacts-operations';
import { Component } from 'react';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// export default function ContactViews() {
//   return <div></div>;
// }

class ContactViews extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
        <Title text="Phoneboock" />
        {this.props.isLoading && (
          <div className={s.loader}>
            <Loader type="Hearts" color="rgb(192, 37, 192" height={200} width={200} />
          </div>
        )}
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

ContactViews.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => {
    dispatch(operations.fetchContacts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactViews);
