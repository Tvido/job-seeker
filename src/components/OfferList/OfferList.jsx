import PropTypes from 'prop-types';
import { Offer } from '../Offer/Offer';

export const OfferList = ({ items = [] }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          <Offer
            position={item.position}
            typeOfEmployment={item.typeOfEmployment}
            companyName={item.companyName}
            contactPhoneNumber={item.contactPhoneNumber}
            location={item.location}
            salaryMin={item.salaryMin}
            salaryMax={item.salaryMax}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

OfferList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
};
