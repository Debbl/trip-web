<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import tabBarData from "@/assets/data/tabbar";
import { getAssetsURL } from "@/utils/get_assets_path";

const router = useRouter();

const currentIndex = ref(0);
const tabBarClick = (item, index) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData" :key="item.text">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="tabBarClick(item, index)"
      >
        <!-- <img
          :src="
            getAssetsURL(
              currentIndex === index ? item.imgActiveSrc : item.imgSrc
            )
          "
          alt=""
        /> -->
        <img
          v-if="currentIndex !== index"
          :src="getAssetsURL(item.imgSrc)"
          alt=""
        />
        <img v-else :src="getAssetsURL(item.imgActiveSrc)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #eee;
  .tab-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &.active {
      color: var(--primary-color);
    }
    img {
      width: 36px;
    }
    .text {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>
