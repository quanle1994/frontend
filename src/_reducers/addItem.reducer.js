import { OPEN_ADD_ITEM_DIALOG } from '../VendorPages/VendorMenu/components/MenuCard';
import {
  CLOSE_ADD_ITEM_DIALOG,
} from '../VendorPages/VendorMenu/components/AddItemDialog';

const INITIAL_STATE = {
  openAddItemDialog: false,
  menuItem: {},
};

export default function addItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_ADD_ITEM_DIALOG: {
      return {
        ...state,
        openAddItemDialog: true,
        menuItem: { ...action.menuItem },
      };
    }
    case CLOSE_ADD_ITEM_DIALOG: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
