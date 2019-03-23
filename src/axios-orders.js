import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-78b7b.firebaseio.com/'
});

export default instance;