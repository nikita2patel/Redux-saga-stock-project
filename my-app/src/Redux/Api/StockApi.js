import axios from 'axios';

const Service = axios.create({
    baseURL: 'http://localhost:3006/',
});

export default Service;
