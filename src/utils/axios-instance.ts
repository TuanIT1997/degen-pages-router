import { API_URL } from "@/configs/endpoints.config";
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const axiosInstanceApp = () => {
  const instance = axios.create({
    baseURL: API_URL,
  });
  instance.interceptors.request.use(onRequestFulfilled);
  instance.interceptors.response.use(onResponseFulfilled, onResponseRejected);
  return instance;
};

function onRequestFulfilled(config: InternalAxiosRequestConfig) {
  return config;
}

function onResponseFulfilled(response: AxiosResponse) {
  response.statusText = "";
  return Promise.resolve(response);
}

function onResponseRejected(error: AxiosError) {
  return Promise.reject(error);
}
