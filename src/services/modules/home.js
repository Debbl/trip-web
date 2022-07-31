import axiosRequest from "@/services/request";
function getHotSuggests() {
  return axiosRequest.get({
    url: "/home/hotSuggests",
  });
}

export { getHotSuggests };