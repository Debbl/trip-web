import { defineStore } from "pinia";
import { getHotSuggests } from "@/services";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: {},
  }),
  actions: {
    fetchHotSuggestAction() {
      getHotSuggests().then((res) => {
        this.hotSuggests = res.data;
      });
    },
  },
});

export default useHomeStore;
