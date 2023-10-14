import axios, { AxiosResponse } from 'axios';
import { axiosParameter } from  "../types/axios"


const callAxios = async ({url}: axiosParameter) => {
    const API_BASE_URL = 'https://reqres.in/api/';
    const api = axios.create({
        baseURL: API_BASE_URL,
    });

    try {
        const response: AxiosResponse = await api.get('/users');
        return response.data;
    } catch (error: any) {
        throw new Error(`Erro ao buscar usuários: ${error.message}`);
    }
}
export default callAxios