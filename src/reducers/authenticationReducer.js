import { authConsts } from "../types/authenticationType";

const initialState = {
  loggedIn: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case authConsts.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
      case authConsts.LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.error
      };
    default: {
      return state;
    }
  }
}