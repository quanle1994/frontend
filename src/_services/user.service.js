import config from 'config';

import { authHeader } from '../_helpers';
import {
  generateToken,
} from '../_helpers/authorization';
import ErrorDialog from '../_commons/ErrorDialog';

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(email, password) {
  const token = generateToken(email, password);
  console.log(`*********token:\n${token}`);
  const requestOptions = {
    // "Access-Control-Allow-Origin": "*",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  return fetch(`${config.apiUrl}/Resource/customers/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // login successful if there's a jwt token in the response
      user.token = token;
      console.log(user);
      console.log(`#########\n${user.name}`);
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${config.apiUrl}/signup`, requestOptions).then(handleResponse);
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    console.log(`***********\n${text}`);
    // const text_formated ='{ "message": "'+ text + '"}';
    // const data = text && JSON.parse(text_formated);
    // console.log( '{ "message": "'+ text +
    //     '"}');
    if (!response.ok) {
      console.log('OK OK');
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    const data = JSON.parse(text);
    return data;
  }).catch(error => ErrorDialog('test', error));
}
