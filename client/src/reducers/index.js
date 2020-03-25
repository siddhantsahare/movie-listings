import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import favorites from './favorites';

export default combineReducers({
  alert,
  auth,
  favorites
});
