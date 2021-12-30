import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';


const BACKEND_URL = 'https://8.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;



export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
    });

    api.interceptors.response.use(
        (response: AxiosResponse) => response,

        (error: AxiosError) => {

            return Promise.reject(error);
        },
    );

    api.interceptors.request.use(
        (config: AxiosRequestConfig) => {


            return config;
        },
    );

    return api;
};


export default createAPI;