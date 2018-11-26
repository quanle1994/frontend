import { GET_ORDERS_BY_VENDOR_ID } from '../VendorPages/VendorOrders/VendorOrdersPage';


const INITIAL_STATE = {
  incomingOrders: [],
  completedOrders: [],
};

function vendorOrders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ORDERS_BY_VENDOR_ID: {
      const orders = [...action.data];
      const incomingOrders = orders.filter(o => o.status === 'IN BASKET');
      const completedOrders = orders.filter(o => o.status === 'READY' || o.status === 'DELIVERED');
      return {
        ...state,
        incomingOrders,
        completedOrders,
      };
    }
    default: return state;
  }
}

export default vendorOrders;
