import { defineStore } from "pinia";
import { getCategories, getHotSuggests, getHouselist } from "@/services";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: {},
    categories: [],
    currentPage: 1,
    houselist: [],
  }),
  actions: {
    fetchHotSuggestAction() {
      getHotSuggests().then((res) => {
        this.hotSuggests = res.data;
      });
    },
    fetchCategoriesAction() {
      getCategories().then((res) => {
        this.categories = res.data;
      });
    },
    fetchHouselistAction() {
      return new Promise((resolve) => {
        getHouselist(this.currentPage).then((res) => {
          this.houselist.push(...res.data);
          this.currentPage++;
          resolve();
        })
      });
    },
  },
});

export default useHomeStore;
