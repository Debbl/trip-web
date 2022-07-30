import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class AxiosRequest {
  constructor(baseURL, timeout = 2000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use((config) => {
      return config;
    });
    this.instance.interceptors.response.use((value) => {
      return value.data;
    });
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default new AxiosRequest(BASE_URL, TIMEOUT);
