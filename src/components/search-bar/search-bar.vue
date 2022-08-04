<script setup>
import { storeToRefs } from "pinia";
import { formatMonthDay } from "@/utils/format-month-day";
import useMainStore from "@/stores/modules/main.js";
import { useRouter } from "vue-router";

const router = useRouter();
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const searchClick = () => {
  router.push("/search");
};
</script>

<template>
  <div class="search-bar" @click="searchClick">
    <div class="search-inner">
      <div class="left">
        <div class="top item">
          <span class="text">住</span>
          <span class="date">{{ formatMonthDay(startDate) }}</span>
        </div>
        <div class="bottom item">
          <span class="text">离</span>
          <span class="date">{{ formatMonthDay(endDate) }}</span>
        </div>
      </div>
      <div class="content">
        <span>关键字/位置/民宿</span>
      </div>
      <div class="right">
        <i class="icon-search"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 16px;
  background-color: #fff;
  .search-inner {
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 10px;
    background-color: #f2f4f6;
    .left {
      height: 50px;
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      border-right: 1px solid #fff;
      .item {
        padding: 3px;
        .text {
          color: #999;
          padding-right: 6px;
        }
      }
      .bottom {
        position: relative;
        .date::after {
          content: " ";
          width: 0;
          height: 0;
          border: 4px solid #666;
          border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
          -webkit-border-radius: 3px;
          border-radius: 3px;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
    .content {
      padding-left: 10px;
      flex: 1;
    }
    .right {
      .icon-search {
        width: 24px;
        height: 24px;
        display: inline-block;
        background-image: url(../../assets/img/home/home-sprite.png);
        background-position: -29px -151px;
        background-size: 207px 192px;
      }
    }
  }
}
</style>
