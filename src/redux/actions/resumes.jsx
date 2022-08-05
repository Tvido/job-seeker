import * as api from '../../api';

export const getResumes = () => async dispatch => {
  try {
    const { data } = await api.fetchResumes();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log('error : ', error.message);
  }
};

export const createResume = resume => async dispatch => {
  try {
    const { data } = await api.createResume(resume);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log('error : ', error.message);
  }
};
