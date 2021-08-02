import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseUrl } from './config';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
});

const joinUrl = (resources: string[]) => resources.join('/');

const getRequest = (url: string, params?: any) => axiosInstance.get(joinUrl([baseUrl, url]), { params });

const postRequest = (url: string, data?: any, params?: any) => {
  return axiosInstance.post(joinUrl([baseUrl, url]), data, { params });
};

const putRequest = (url: string, data?: any, params?: any) => {
  return axiosInstance.put(joinUrl([baseUrl, url]), data, { params });
};

const deleteRequest = (url: string, params?: any) => axiosInstance.delete(joinUrl([baseUrl, url]), { params });

export {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
