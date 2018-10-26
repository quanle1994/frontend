import { UPDATE_PROFILE_DETAILS } from '../ProfilePage/ProfilePage';

const INITIAL_STATE = {
  matric: 'A0123456A',
  cardDetail: '123-123123-123',
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
