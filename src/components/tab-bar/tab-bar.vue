<script setup>
import tabBarData from "@/assets/data/tabbar";
import { getAssetsURL } from "@/utils/get_assets_path";
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData" :key="item.text">
      <div class="tab-bar-item">
        <img :src="getAssetsURL(item.imgSrc)" alt="" />
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
