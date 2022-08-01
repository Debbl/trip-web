<script setup>
import useHomeStore from "@/stores/modules/home.js";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
homeStore.fetchCategoriesAction();
const { categories } = storeToRefs(homeStore);
</script>

<template>
  <div class="home-categories">
    <template v-for="item in categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.home-categories {
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    width: 70px;
    img {
      width: 32px;
    }
    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
