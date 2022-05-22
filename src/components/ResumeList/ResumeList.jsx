import PropTypes from 'prop-types';

import { Resume } from '../Resume/Resume';

export const ResumeList = ({ items = [] }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          <Resume
            avatar={item.avatar}
            name={item.name}
            birthDate={item.birthDate}
            phoneNumber={item.phoneNumber}
            email={item.email}
            city={item.city}
            cityWorkWant={item.cityWorkWant}
            positionWant={item.positionWant}
            companyName={item.companyName}
            positionWork={item.positionWork}
            dateStadyFrom={item.dateStadyFrom}
            dateStadyTo={item.dateStadyTo}
            educationPlaceName={item.educationPlaceName}
            educationLevel={item.educationLevel}
            speciality={item.speciality}
            dateWorkFrom={item.dateWorkFrom}
            dateWorkTo={item.dateWorkTo}
          />
        </li>
      ))}
    </ul>
  );
};

ResumeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }))
}