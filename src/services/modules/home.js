import axiosRequest from "@/services/request";
function getHotSuggests() {
  return axiosRequest.get({
    url: "/home/hotSuggests",
  });
}

function getCategories() {
  return axiosRequest.get({
    url: "/home/categories",
  });
}

export { getHotSuggests, getCategories };
