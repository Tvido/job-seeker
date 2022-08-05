import PropTypes from 'prop-types';

import defaultAvatar from '../../assets/default.jpeg';

export const Resume = ({
  avatar = defaultAvatar,
  name,
  birthDate,
  phoneNumber,
  email,
  city,
  cityPrefer,
  position,
  companyName,
  dateStadyFrom,
  dateStadyTo,
  university,
  educationLevel,
  speciality,
  dateWorkFrom,
  dateWorkTo,
}) => {
  return (
    <div className="container">
      <h4>Info</h4>
      <img src={avatar ?? defaultAvatar} alt={name} width="160" />
      <h3>Name: {name}</h3>
      <p>birthDate: {birthDate}</p>

      <h4>Contacts</h4>
      <p>phoneNumber: {phoneNumber}</p>
      <p>email: {email}</p>
      <p>city: {city}</p>

      <h4>Look for</h4>
      <p>cityPrefer: {cityPrefer}</p>
      <p>position: {position}</p>

      <h4>Experience</h4>
      <p>companyName: {companyName}</p>
      <p>position: {position}</p>
      <p>
        WorkPeriod: {dateStadyFrom} to {dateStadyTo}
      </p>

      <h4>Education</h4>
      <p>university: {university}</p>
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
  cityPrefer: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  dateStadyFrom: PropTypes.string.isRequired,
  dateStadyTo: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  educationLevel: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  dateWorkFrom: PropTypes.string.isRequired,
  dateWorkTo: PropTypes.string.isRequired,
};
