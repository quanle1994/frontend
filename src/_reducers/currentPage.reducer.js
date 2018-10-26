import { SET_CURRENT_PAGE } from '../App';

const INITIAL_STATE = {
  page: 'login',
};

export default function currentPage(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        page: action.page,
      };
    default:
      return state;
  }
}
