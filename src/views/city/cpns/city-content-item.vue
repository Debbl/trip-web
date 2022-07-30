<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  groupCitesProps: {
    type: Object,
    default: () => ({}),
  },
});

const indexGroup = computed(() =>
  props.groupCitesProps.cities.map((item) => item.group)
);
</script>

<template>
  <div class="city-content-item">
    <van-index-bar :index-list="indexGroup">
      <template
        v-for="groupCites in groupCitesProps.cities"
        :key="groupCites.group"
      >
        <van-index-anchor :index="groupCites.group" />
        <template v-for="city in groupCites.cities">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped></style>
