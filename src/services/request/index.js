import axios from "axios";
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/main";
import { BASE_URL, TIMEOUT } from "./config";

const mainStore = useMainStore();
const { isShowLoading } = storeToRefs(mainStore);

class AxiosRequest {
  constructor(baseURL, timeout = 2000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use((config) => {
      isShowLoading.value = true;
      return config;
    });
    this.instance.interceptors.response.use((value) => {
      isShowLoading.value = false;
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
