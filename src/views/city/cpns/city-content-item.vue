<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";

// props
const props = defineProps({
  groupCitesProps: {
    type: Object,
    default: () => ({}),
  },
});
// 索引
const indexGroup = computed(() => {
  const groupArr = props.groupCitesProps.cities.map((item) => item.group);
  groupArr.unshift("#");
  return groupArr;
});

// 选中城市
const cityStore = useCityStore();
const router = useRouter();
const cityClick = (city) => {
  // console.log(city);
  cityStore.currentCity = city;
  router.back();
};
</script>

<template>
  <div class="city-content-item">
    <van-index-bar :index-list="indexGroup" :sticky="false">
      <van-index-anchor index="#">热门</van-index-anchor>
      <div class="list">
        <template
          v-for="hotCity in groupCitesProps.hotCities"
          :key="hotCity.cityId"
        >
          <div class="hot-city" @click="cityClick(hotCity)">
            {{ hotCity.cityName }}
          </div>
        </template>
      </div>
      <template
        v-for="groupCites in groupCitesProps.cities"
        :key="groupCites.group"
      >
        <van-index-anchor :index="groupCites.group" />
        <template v-for="city in groupCites.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
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
