import config from 'config';
import handleResponse from './customer.service';
import { authHeader } from '../_helpers';

export const storeService = {
    getAll,
    getById,
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }

    return fetch(`${config.apiUrl}/stores`, requestOptions)
        .then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }

    return fetch(`${config.apiUrl}/stores/${id}`, requestOptions)
        .then(handleResponse);
}