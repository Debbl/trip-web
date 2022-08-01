<script setup>
import { formatMonthDay } from "@/utils/format-month-day.js";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const startDate = computed(() => formatMonthDay(route.query.startDate));
const endDate = computed(() => formatMonthDay(route.query.endDate));
const currentCity = computed(() => route.query.currentCity);
</script>

<template>
  <div class="search">
    <h2>开始时间 {{ startDate }}</h2>
    <h2>结束时间 {{ endDate }}</h2>
    <h2>当前城市 {{ currentCity }}</h2>
  </div>
</template>
