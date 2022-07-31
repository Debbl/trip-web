import cityAllData from "./city/all/index.json";
import hotSuggestsData from './home/hotSuggests/index.json'

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
  }
];

export default apiArr;
