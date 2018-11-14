import config from 'config';
import { authHeader } from '../_helpers';

export const canteenService = {
    getById,
    getAllCanteens
}

function getAllCanteens() {
    // const token = 'Basic YWxpY2VAZ21haWwuY29tOnBhc3N3b3Jk';
    const {token} = JSON.parse(localStorage.getItem('user'));
    if (!token) {
        return Promise.reject('User is not logged in!');
    }
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: token
        }
    };

    return fetch(`${config.apiUrl}/Resource/canteens`, requestOptions)
        .then(
          response => response.json(),

          error => error
        );
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }

    return fetch(`${config.apiUrl}/canteens/${id}`, requestOptions)
        .then(handleResponse);
}
