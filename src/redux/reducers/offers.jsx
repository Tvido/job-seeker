const offers = (offers = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return offers;

    case 'CREATE':
      return [...offers, action.payload];

    default:
      return offers;
  }
};

export default offers;
