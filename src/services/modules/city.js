import axiosRequest from "@/services/request";
function getCityAll() {
  return axiosRequest.get({
    url: "/city/all",
  });
}

export { getCityAll };
