import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import currentPage from './currentPage.reducer';
import userProfile from './userProfile.reducer';
import addItem from './addItem.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  currentPage,
  userProfile,
  addItem,
});

export default rootReducer;
