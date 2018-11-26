import { UPDATE_PROFILE_DETAILS } from '../ProfilePage/ProfilePage';
import { GET_VENDOR_DETAILS_SUCCESS } from '../VendorPages/VendorMenu/VendorMenuPage';

const INITIAL_STATE = {
  matric: 'A0123456A',
  cardDetail: '123-123123-123',
  userType: 0, // 0 = vendor, 1 = student
  vendorDetails: [],
};

export default function userProfile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_PROFILE_DETAILS: {
      return {
        ...state,
        ...action.data,
      };
    }
    case GET_VENDOR_DETAILS_SUCCESS: {
      return {
        ...state,
        vendorDetails: action.data,
      };
    }
    default:
      return state;
  }
}
