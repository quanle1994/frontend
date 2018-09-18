import { history } from "../common/history";
import { authConsts } from "../types/authenticationType";
import { domainName, apiCalls } from "../config";

export const userActions = {
  login
};


function handleResponse(response) {
    return response.json().then(json => {
        if (!response.ok) {
            const errorMessage = json || response.statusText;
            return Promise.reject(errorMessage);
        }
        history.push("/");
        return json;
    });
}

function login(email, password) {
  return dispatch => {
    const postData = {
        email: email,
        password: password
    };
    fetch(`${domainName}/${apiCalls.login}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(postData)
    })
        .then(handleResponse)
        .then(user => {
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authConsts.LOGIN_SUCCESS, user);
        }, error => dispatch(authConsts.LOGIN_FAILURE, error));
  }
}