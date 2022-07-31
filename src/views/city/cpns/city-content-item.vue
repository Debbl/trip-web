<script setup>
import { computed } from "vue";

const props = defineProps({
  groupCitesProps: {
    type: Object,
    default: () => ({}),
  },
});

const indexGroup = computed(() => {
  const groupArr = props.groupCitesProps.cities.map((item) => item.group);
  groupArr.unshift("#");
  return groupArr;
});
</script>

<template>
  <div class="city-content-item">
    <van-index-bar :index-list="indexGroup" :sticky="false">
      <van-index-anchor index="#">热门</van-index-anchor>
      <div class="list">
        <template v-for="hotCity in groupCitesProps.hotCities">
          <div class="hot-city">{{ hotCity.cityName }}</div>
        </template>
      </div>
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

<style lang="less" scoped>
.city-content-item {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    .hot-city {
      width: 70px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      padding: 6px;
    }
  }
}
</style>
