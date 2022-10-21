import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'https://crm-api.jahzielcabrera.xyz'
});

export default clienteAxios;