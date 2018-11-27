import { canteenConstants } from '../_constants';
import {
  canteenService,
} from '../_services';

function getAllCanteens() {
  return (dispatch) => {
    canteenService.getAllCanteens()
      .then(
        (canteens) => {
          // console.log(`********Successfully retrieved canteens********\n${JSON.stringify(canteens, undefined, 2)}`);
          const newC = canteens.map(c => ({
            ...c,
            stores: c.stores.map(s => ({
              ...s,
              canteenName: c.name,
            })),
          }));
          dispatch({ type: canteenConstants.GETALL_SUCCESS, canteens: newC });
        },

        (error) => {
          console.log(`********${error}`);
          return Promise.reject(error);
        },
      );
  };
}

export const canteenActions = {
  getAllCanteens,
};
