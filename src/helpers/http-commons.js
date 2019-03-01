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
    baseURL: `https://localhost:5001/api/`,
    headers: authHeader()
});
