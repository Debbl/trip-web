import cityAllData from "./city/all/index.json";

const apiArr = [
  {
    url: "/api/city/all",
    method: "get",
    response: () => {
      return cityAllData;
    },
  },
];

export default apiArr;
