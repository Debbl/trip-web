import { defineStore } from "pinia";
import { getCategories, getHotSuggests } from "@/services";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: {},
    categories: [],
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
  },
});

export default useHomeStore;
