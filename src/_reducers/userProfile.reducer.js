import { UPDATE_PROFILE_DETAILS } from '../ProfilePage/ProfilePage';

const INITIAL_STATE = {
  matric: 'A0123456A',
  cardDetail: '123-123123-123',
  userType: 0, // 0 = vendor, 1 = student
};

export default function userProfile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_PROFILE_DETAILS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
