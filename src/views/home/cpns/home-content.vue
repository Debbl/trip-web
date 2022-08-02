<script setup>
import { watch } from "vue";
import { storeToRefs } from "pinia";
import useHomeStore from "@/stores/modules/home.js";
import HomeItemV9 from "@/components/home-item-v9/home-item-v9.vue";
import HomeItemV3 from "@/components/home-item-v3/home-item-v3.vue";
import useScroll from "@/hooks/useScroll.js";

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);
homeStore.fetchHouselistAction();
console.log("-----------------------");
// 加载更多
const { isReachBottom } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistAction().then(() => {
      isReachBottom.value = false;
    });
  }
});
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
