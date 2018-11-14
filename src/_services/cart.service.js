import config from 'config';
import { authHeader } from '../_helpers';

export const cartService = {
    getCart,
    getOrders
}

function getCart() {
    const requestOptions = {
        method: 'GET',
        headers: {
            ...authHeader()
        },
    };

    console.log(`###printing request:\n${JSON.stringify(requestOptions,undefined,2)}`);
    return fetch(`${config.apiUrl}/Resource/customerOrders/cart`, requestOptions)
        .then(handleCartResponse)
        .then(buildCartItems);
}

function getOrders () {
  const requestOptions = {
    method: 'GET',
    headers: {
      ...authHeader()
    },
  };
  return fetch(`${config.apiUrl}/Resource/customers/orders`, requestOptions)
    .then(handleCartResponse)
    .then(buildOrderItems)
}

const handleCartResponse = (response) => {
    if (!response.ok) {
        console.log("NOT OK");
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            location.reload(true);
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return response.json();
}

const buildOrderItems = (data) => {
  localStorage.setItem('orderStatus', JSON.stringify(data));
  return data;
};

const buildCartItems = (data) => {
    return data.map((cItem) => {
        return {
                "id": cItem.id,
                "orderPrice": cItem.price,
                // "orders": this.buildOrder(cItem.orderDishes),
                "orders": cItem.orderDishes.map(order => {
                    return {
                        "id": order.id,
                        "item": order.dish,
                        "amount": order.amount,
                    }
                }),
                "canteenName": cItem.orderDishes[0].dish.store.canteen.name,
                "storeName": cItem.orderDishes[0].dish.store.name,
        }
    })
}
