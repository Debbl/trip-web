<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// 搜索框
const router = useRouter();
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// tab 切换
const tabActive = ref();
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
      <van-tab title="国内·港澳台">内容 1</van-tab>
      <van-tab title="海外">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
.city {
  --van-search-left-icon-color: var(--primary-color);
  --van-tabs-bottom-bar-color: var(--primary-color);
}
</style>
