import axiosRequest from "@/services/request";
function getDetailInfos(houseId) {
  return axiosRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}

export { getDetailInfos };
