<script setup>
import { ref } from "vue";
import tabBarData from "@/assets/data/tabbar";
import { getAssetsURL } from "@/utils/get_assets_path";

const currentIndex = ref(0);
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="item in tabBarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template v-slot:icon="props">
            <img
              :src="
                props.active
                  ? getAssetsURL(item.imgActiveSrc)
                  : getAssetsURL(item.imgSrc)
              "
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  .van-tabbar-item__icon img {
    height: 26px;
  }
}
</style>
