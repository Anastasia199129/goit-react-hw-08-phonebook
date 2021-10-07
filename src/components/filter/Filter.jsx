import PropTypes from 'prop-types';
import s from './filter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contasts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = ({ onChange, value }) => {
  return (
    <label className={s.label} htmlFor="">
      {' '}
      Find contacts by name
      <input className={s.input} type="text" value={value} onChange={onChange} placeholder="Find" />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
