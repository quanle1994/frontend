import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { canteens } from "./canteens.reducer";
import currentPage from "./currentPage.reducer";
import currentTitle from "./currentTitle.reducer";
import userProfile from "./userProfile.reducer";
import addItem from "./addItem.reducer";
import vendorOrders from "./vendorOrders.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  currentPage,
  currentTitle,
  userProfile,
  addItem,
  canteens,
  vendorOrders
});

export default rootReducer;
