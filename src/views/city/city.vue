<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import CityContentItem from "./cpns/city-content-item.vue";
// 搜索框
const router = useRouter();
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// tab 切换
const tabActive = ref();
const cityStore = useCityStore();
cityStore.fetchAllCitiesAction();
const { allCities } = storeToRefs(cityStore);
</script>

<template>
  <div class="city">
    <van-search
      v-model="searchValue"
      shape="round"
      show-action
      @cancel="cancelClick"
      placeholder="城市/区域/位置"
    />
    <van-tabs v-model:active="tabActive">
      <template v-for="(value, key, index) in allCities">
        <van-tab :title="value.title">
          <city-content-item :group-cites-props="value" />
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
.city {
  --van-search-left-icon-color: var(--primary-color);
  --van-tabs-bottom-bar-color: var(--primary-color);
  :deep(.van-tabs__content) {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
