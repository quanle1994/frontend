import config from 'config';
import { authHeader } from '../_helpers';

export const canteenService = {
    getAll,
    getById,
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }

    return fetch(`${config.apiUrl}/canteens`, requestOptions)
        .then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }

    return fetch(`${config.apiUrl}/canteens/${id}`, requestOptions)
        .then(handleResponse);
}