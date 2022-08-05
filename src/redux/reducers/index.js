import { combineReducers } from 'redux';

import offers from './offers';
import resumes from './resumes';

export default combineReducers({
  offers,
  resumes,
});
