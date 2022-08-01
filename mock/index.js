import cityAllData from "./city/all/index.json";
import hotSuggestsData from "./home/hotSuggests/index.json";
import homeCategoriesData from "./home/categories/index.json";

const apiArr = [
  {
    url: "/api/city/all",
    method: "get",
    response: () => {
      return cityAllData;
    },
  },
  {
    url: "/api/home/hotSuggests",
    method: "get",
    response: () => {
      return hotSuggestsData;
    },
  },
  {
    url: "/api/home/categories",
    method: "get",
    response: () => {
      return homeCategoriesData;
    },
  },
];

export default apiArr;
