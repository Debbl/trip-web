<script setup>
import useCityStore from "@/stores/modules/city.js";
import useMainStore from "@/stores/modules/main.js";
import { formatMonthDay } from "@/utils/format-month-day.js";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
const { startDate, endDate } = storeToRefs(mainStore);
</script>

<template>
  <div class="search">
    <h2>开始时间 {{ formatMonthDay(startDate) }}</h2>
    <h2>结束时间 {{ formatMonthDay(endDate) }}</h2>
    <h2>当前城市 {{ currentCity.cityName }}</h2>
  </div>
</template>
