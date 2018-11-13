import {
  canteenConstants
} from '../_constants/canteen.constants';

const INITIAL_STATE = {};

export function canteens(state = INITIAL_STATE, action) {
  switch (action.type) {
    case canteenConstants.GETALL_SUCCESS:
      return {
        login: true,
        canteens: action.canteens
      };
    case canteenConstants.SET_CURRENT_CANTEEN:
      return {
        currentCanteen: action.currentCanteen,
        ...state
      };
    default:
      return state;
  }
}
