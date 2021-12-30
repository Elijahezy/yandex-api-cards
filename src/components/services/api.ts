import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const createAPI = (): AxiosInstance => {
    const api = axios.create();

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