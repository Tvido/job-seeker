import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import { Resume } from '../Resume/Resume';

export const ResumeList = ({ items = [] }) => {
  // const resumes = useSelector(state => state.resumes);
  // console.log('resumes :>> ', resumes);

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
            cityPrefer={item.cityPrefer}
            positionApplying={item.positionWant}
            companyName={item.companyName}
            position={item.position}
            dateWorkFrom={item.dateWorkFrom}
            dateWorkTo={item.dateWorkTo}
            university={item.university}
            educationLevel={item.educationLevel}
            speciality={item.speciality}
            dateStadyFrom={item.dateStadyFrom}
            dateStadyTo={item.dateStadyTo}
          />
        </li>
      ))}
    </ul>
  );
};

ResumeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
};
