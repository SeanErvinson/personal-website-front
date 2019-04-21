import axios from 'axios';

function authHeader() {
    let user_authentication = JSON.parse(localStorage.getItem("user"));
    if (user_authentication && user_authentication.auth_token) {
        return { 'Authorization': 'Bearer ' + user_authentication.auth_token };
    } else {
        return {};
    }
}
export const HTTP = axios.create({
    baseURL: `https://seanervinson.com/api/`,
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
});

export const HTTPSecurity = axios.create({
    baseURL: `http://localhost:9050/api/`,
    headers: authHeader()
});