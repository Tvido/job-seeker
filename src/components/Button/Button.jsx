import PropTypes from 'prop-types';

import s from './Button.module.css';

export const Button = ({ text, type, bg }) => {
  return (
    <div className="container">
      <button type={type} id="button" className={s[bg]}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'Signup',
    'Signin',
    'Logout',
    'Search',
    'Create',
    'Delete',
    'Save',
    'Edit',
    'More',
  ]),
  bg: PropTypes.oneOf(['regular', 'danger', 'disabled', 'edit']).isRequired,
};
