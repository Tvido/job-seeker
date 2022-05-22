import PropTypes from 'prop-types';

import defaultAvatar from '../../assets/default.jpeg'

export const Resume = ({
  avatar = defaultAvatar,
  name,
  birthDate,
  phoneNumber,
  email,
  city,
  cityWorkWant,
  positionWant,
  companyName,
  positionWork,
  dateStadyFrom,
  dateStadyTo,
  educationPlaceName,
  educationLevel,
  speciality,
  dateWorkFrom,
  dateWorkTo
}) => {
  return (
    <div className='container'>
      <h4>Info</h4>
      <img src={avatar ?? defaultAvatar} alt={name} width="160" />
      <h3>Name: {name}</h3>
      <p>birthDate: {birthDate}</p>

      <h4>Contacts</h4>
      <p>phoneNumber: {phoneNumber}</p>
      <p>email: {email}</p>
      <p>city: {city}</p>

      <h4>Look for</h4>
      <p>cityWorkWant: {cityWorkWant}</p>
      <p>positionWant: {positionWant}</p>

      <h4>Experience</h4>
      <p>companyName: {companyName}</p>
      <p>positionWork: {positionWork}</p>
      <p>
        WorkPeriod: {dateStadyFrom} to {dateStadyTo}
      </p>

      <h4>Education</h4>
      <p>educationPlaceName: {educationPlaceName}</p>
      <p>educationLevel: {educationLevel}</p>
      <p>speciality: {speciality}</p>
      <p>
        StadyPeriod: {dateWorkFrom} to {dateWorkTo}
      </p>
    </div>
  );
};

Resume.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cityWorkWant: PropTypes.string.isRequired,
  positionWant: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  positionWork: PropTypes.string.isRequired,
  dateStadyFrom: PropTypes.string.isRequired,
  dateStadyTo: PropTypes.string.isRequired,
  educationPlaceName: PropTypes.string.isRequired,
  educationLevel: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  dateWorkFrom: PropTypes.string.isRequired,
  dateWorkTo: PropTypes.string.isRequired,
}