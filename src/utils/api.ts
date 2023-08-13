import Axios from "axios";

declare module "axios" {
  interface AxiosResponse<T = any> extends Promise<T> {
    duration?: number;
  }
  interface AxiosRequestConfig {
    metadata?: any;
  }
}

const api = Axios.create({
  baseURL: "http://0.0.0.0:3333",
  timeout: 60000,
});

export default api;

api.interceptors.request.use(
  function (config) {
    config.metadata = { startTime: new Date() };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    response.config.metadata.endTime = new Date();
    response.duration =
      response.config.metadata.endTime - response.config.metadata.startTime;
    return response;
  },
  function (error) {
    error.config.metadata.endTime = new Date();
    error.duration =
      error.config.metadata.endTime - error.config.metadata.startTime;
    return Promise.reject(error);
  }
);
