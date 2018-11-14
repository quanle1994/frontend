import { OPEN_ADD_ITEM_DIALOG } from '../VendorPages/VendorMenu/MenuCard';
import {
  CLOSE_ADD_ITEM_DIALOG,
} from '../VendorPages/VendorMenu/AddItemDialog';

const INITIAL_STATE = {
  openAddItemDialog: false,
};

export default function addItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_ADD_ITEM_DIALOG: {
      return {
        ...state,
        openAddItemDialog: true,
      };
    }
    case CLOSE_ADD_ITEM_DIALOG: {
      return {
        ...state,
        openAddItemDialog: false,
      };
    }
    default:
      return state;
  }
}
