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
function getHouselist(page) {
  return axiosRequest.get({
    url: "/home/houselist",
    params: {
      page,
    },
  });
}

export { getHotSuggests, getCategories, getHouselist };
