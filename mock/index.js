import cityAllData from "./city/all/index.json";
import hotSuggestsData from "./home/hotSuggests/index.json";
import homeCategoriesData from "./home/categories/index.json";
import HouselistPage1Data from "./home/houselist/page1/index.json";
import HouselistPage2Data from "./home/houselist/page2/index.json";
import HouselistPage3Data from "./home/houselist/page3/index.json";
import DetailData1 from "./detail/infos/18298295/index";
import DetailData2 from "./detail/infos/51953704/index";
import DetailData3 from "./detail/infos/44173741/index";

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
  {
    url: "/api/detail/infos",
    method: "get",
    response: ({ query }) => {
      switch (+query.houseId) {
        case 18298295:
          return DetailData1;
        case 51953704:
          return DetailData2;
        case 44173741:
          return DetailData3;
        default:
          return {};
      }
    },
  },
];

export default apiArr;
