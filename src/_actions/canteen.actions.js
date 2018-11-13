import { canteenConstants } from '../_constants';
import {
  canteenService
} from '../_services';
import { history } from '../_helpers';

function getAllCanteens() {
  return dispatch => {
    canteenService.getAllCanteens()
      .then(
        canteens => {
          console.log(`********Successfully retrieved canteens********\n${JSON.stringify(canteens, undefined, 2)}`);
          dispatch({type: canteenConstants.GETALL_SUCCESS, canteens});
        },

        error => {
          console.log(`********${error}`);
          return Promise.reject(error);
        }
      );
  }
}

export const canteenActions = {
  getAllCanteens,
};
