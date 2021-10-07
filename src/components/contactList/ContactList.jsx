import Button from '../button/Button';
import PropTypes from 'prop-types';
import style from './contactList.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactList = ({ filtred, onButtonDeleteClick }) => {
  return (
    <ul className={style.list}>
      {filtred.map(({ name, number, id }) => {
        return (
          <li className={style.item} key={id}>
            <p className={style.p}>{name}:</p>
            <p className={style.pRight}>{number}</p>
            <Button
              text="Delete"
              onClick={() => {
                onButtonDeleteClick(id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filtred: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.any,
      number: PropTypes.string,
    }),
  ),
  onButtonDeleteClick: PropTypes.func,
};

const mapStateToProps = state => ({
  filtred: contactsSelectors.getFiltredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onButtonDeleteClick: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
