import PropTypes from 'prop-types';
import React from 'react';

export const Favorites = ({
  position = 'не вказано',
  salaryMin,
  salaryMax,
  typeOfEmployment,
  employeer,
  location,
  contactPhoneNumber,
  description = 'немає опису',
}) => {
  return (
    <div className="container">
      <h3>position: {position}</h3>
      <p>
        payment: <strong>{salaryMin}</strong> to <strong>{salaryMax}</strong>
      </p>
      <p>typeOfEmployment: {typeOfEmployment}</p>

      <h4>Contacts</h4>
      <p>employeer: {employeer}</p>
      <p>location: {location}</p>
      <p>contactPhoneNumber: {contactPhoneNumber}</p>

      <h4>description</h4>
      <p>description: {description}</p>
    </div>
  );
};

Favorites.propTypes = {
  position: PropTypes.string.isRequired,
  salaryMin: PropTypes.number.isRequired,
  salaryMax: PropTypes.number.isRequired,
  typeOfEmployment: PropTypes.string.isRequired,
  employeer: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  contactPhoneNumber: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
