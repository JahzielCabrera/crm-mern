import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'http://localhost:5050'
});

export default clienteAxios;