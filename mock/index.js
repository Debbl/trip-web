import cityAllData from "./city/all/index.json";
import hotSuggestsData from "./home/hotSuggests/index.json";
import homeCategoriesData from "./home/categories/index.json";
import HouselistPage1Data from "./home/houselist/page1/index.json";
import HouselistPage2Data from "./home/houselist/page2/index.json";
import HouselistPage3Data from "./home/houselist/page3/index.json";

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
  {
    url: "/api/home/houselist",
    method: "get",
    response: ({ query }) => {
      switch (+query.page) {
        case 1:
          return HouselistPage1Data;
        case 2:
          return HouselistPage2Data;
        case 3:
          return HouselistPage3Data;
        default:
          return {};
      }
    },
  },
];

export default apiArr;
