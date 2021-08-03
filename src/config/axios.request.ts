import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseUrl } from './config';

const axiosInstance = axios.create();
const token = localStorage.getItem('token');

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
});

const joinUrl = (resources: string[]) => resources.join('/');

const getRequest = (url: string, params?: any) => axiosInstance.get(joinUrl([baseUrl, url]), { params }) as AxiosResponse['data'];

const postRequest = (url: string, data?: any, params?: any) => {
  return axiosInstance.post(joinUrl([baseUrl, url]), data, { params }) as AxiosResponse['data'];
};

const putRequest = (url: string, data?: any, params?: any) => {
  return axiosInstance.put(joinUrl([baseUrl, url]), data, { params }) as AxiosResponse['data'];
};

const deleteRequest = (url: string, params?: any) => axiosInstance.delete(joinUrl([baseUrl, url]), { params }) as AxiosResponse['data'];

export {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
