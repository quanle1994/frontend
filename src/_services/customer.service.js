import config from 'config';
import { authHeader } from `../_helpers`;

export const customerService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    pay,
};

function register(customer) {
    const requestOptions = {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(customer),
    };

    return fetch(`${config.apiUrl}/signup`, requestOptions).then(handleResponse);
}

function login(email, password) {
    const requestOptions = {
        // "Access-Control-Allow-Origin": "*",
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ email, password }),
    };

    return fetch(`${config.apiUrl}/customers/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// Admin access only
function getAll() {
    const requestOptions = {
        // "Access-Control-Allow-Origin": "*",
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/customers`, requestOptions)
        .then(handleResponse);
};

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/customers/${id}`, requestOptions)
        .then(handleResponse);
}

function update(id, customer) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
    };
    
    return fetch(`${config.apiUrl}/customers/${id}`, requestOptions)
        .then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/customers/${id}`, requestOptions)
        .then(handleResponse);
}

function pay(orderId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/${orderId}/pay`, requestOptions)
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const text_formated ='{ "message": "'+ text + '"}';
        const data = text && JSON.parse(text_formated);
        console.log( '{ "message": "'+ text +
            '"}');
        if (!response.ok) {
            console.log("OK OK");
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}