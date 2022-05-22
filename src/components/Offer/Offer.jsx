import PropTypes from 'prop-types';

import './Offer.module.css';

export const Offer = ({
  position = 'не вказано',
  salaryMin,
  salaryMax,
  typeOfEmployment,
  companyName,
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
      <p>employeer: {companyName}</p>
      <p>location: {location}</p>
      <p>contactPhoneNumber: {contactPhoneNumber}</p>

      <h4>description</h4>
      <p>description: {description}</p>
    </div>
  );
};

Offer.propTypes = {
  position: PropTypes.string.isRequired,
  salaryMin: PropTypes.number.isRequired,
  salaryMax: PropTypes.number.isRequired,
  typeOfEmployment: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  contactPhoneNumber: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
