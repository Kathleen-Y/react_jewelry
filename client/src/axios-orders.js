import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cdn.shopify.com/s/files/1/0755/2497/products/'
});

export default instance;