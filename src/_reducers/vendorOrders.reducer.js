import { GET_ORDERS_BY_VENDOR_ID } from '../VendorPages/VendorOrders/VendorOrdersPage';


const INITIAL_STATE = {
};

function vendorOrders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ORDERS_BY_VENDOR_ID: {
      return {
        ...state,
        ...action.data,
      };
    }
    default: return state;
  }
}

export default vendorOrders;
