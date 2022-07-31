import { defineStore } from "pinia";
import { getCityAll } from "@/services";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {},
  }),
  actions: {
    fetchAllCitiesAction() {
      getCityAll().then((res) => {
        this.allCities = res.data;
      });
    },
  },
});

export default useCityStore;
