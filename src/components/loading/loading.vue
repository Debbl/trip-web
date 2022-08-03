<script setup>
import useMainStore from "@/stores/modules/main.js";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { isShowLoading } = storeToRefs(mainStore);
const loadingClick = () => {
  isShowLoading.value = false;
};
</script>

<template>
  <div class="loading" @click="loadingClick">
    <div class="content">
      <div class="bg">
        <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  .content {
    .bg {
      width: 104px;
      height: 104px;
      background: url(@/assets/img/home/loading-bg.png) 0 0 / cover;
      text-align: center;
      img {
        position: relative;
        top: 50%;
        transform: translateY(-57%);
        width: 70px;
      }
    }
  }
}
</style>
