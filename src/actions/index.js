import axios from 'axios';

const BASE_URL = process.env.VUE_APP_API_URL;

export const projectService = axios.create({
    baseURL: BASE_URL + "projects/",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const linkService = axios.create({
    baseURL: BASE_URL + "links/",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const mailService = axios.create({
    baseURL: BASE_URL + "mail/",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const taskService = axios.create({
    baseURL: BASE_URL + "tasks/",
    headers: {
        'Content-Type': 'application/json',
    },
})