<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const cityClick = () => {
  router.push("/city");
};

const getPositionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res, "------");
    },
    (err) => {
      console.log(err, "======");
    }
  );
};
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="getPositionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  .location {
    height: 44px;
    padding: 0 20px;
    display: flex;
    align-items: center;

    .city {
      flex: 1;
      font-size: 15px;
      color: #333;
    }
    .position {
      width: 74px;
      display: flex;
      align-items: center;
      .text {
        font-size: 12px;
        color: #666;
      }
      img {
        position: relative;
        top: -1px;
        margin-left: 5px;
        width: 18px;
      }
    }
  }
}
</style>
