import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8090',
    timeout: 20000,
    headers: {"Content-type":"application/json" }
});