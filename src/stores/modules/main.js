import { defineStore } from "pinia";

const nowDate = new Date();
const nowDateAddOne = new Date().setDate(nowDate.getDate() + 1);

const useMainStore = defineStore("main", {
  state: () => ({
    startDate: nowDate,
    endDate: nowDateAddOne,
  }),
});

export default useMainStore;
