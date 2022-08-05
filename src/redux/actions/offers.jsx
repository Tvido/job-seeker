import * as api from '../../api';

export const getOffers = () => async dispatch => {
  try {
    const { data } = await api.fetchOffers();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log('error : ', error.message);
  }
};

export const createOffer = offer => async dispatch => {
  try {
    const { data } = await api.createOffer(offer);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log('error : ', error.message);
  }
};
