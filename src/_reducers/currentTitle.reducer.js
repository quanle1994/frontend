import { SET_CURRENT_TITLE } from "../App";

const INITIAL_STATE = {
  title: "Qoodie"
};

export default function currentTitle(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_TITLE:
      return {
        title: action.title
      };
    default:
      return state;
  }
}
