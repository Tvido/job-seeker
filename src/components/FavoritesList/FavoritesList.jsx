import PropTypes from 'prop-types';
import { Favorites } from '../Favorites/Favorites';

export const FavoritesList = ({ items = [] }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          <Favorites
            position={item.position}
            salaryMin={item.salaryMin}
            salaryMax={item.salaryMax}
            typeOfEmployment={item.typeOfEmployment}
            employeer={item.employeer}
            location={item.location}
            contactPhoneNumber={item.contactPhoneNumber}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

Favorites.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
};
