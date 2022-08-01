<script setup>
import { storeToRefs } from "pinia";
import useHomeStore from "@/stores/modules/home.js";
import HomeItemV9 from "@/components/home-item-v9/home-item-v9.vue";
import HomeItemV3 from "@/components/home-item-v3/home-item-v3.vue";

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);
homeStore.fetchHouselistAction();
const loadingMoreClick = () => {
  homeStore.fetchHouselistAction();
};
</script>

<template>
  <div class="home-content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houselist" :key="item.data.houseId">
        <home-item-v9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
        />
        <home-item-v3
          v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"
        />
      </template>
    </div>
    <button @click="loadingMoreClick">加载更多</button>
  </div>
</template>

<style lang="less" scoped>
.home-content {
  padding: 10px 20px;
  margin-bottom: 100px;
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
