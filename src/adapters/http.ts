import axios, { AxiosResponse } from 'axios';

export interface ApiResponse<T> extends AxiosResponse<T> {}

export const httpAdapter = () => {
  const baseURL = '';

  let headers = {};

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers
  });

  return axiosInstance;
};

export default httpAdapter;
