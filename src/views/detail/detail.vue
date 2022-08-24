<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/services";
import DetailSwipe from "./cpns/detail-01-swipe.vue";
import DetailInfos from "./cpns/detail-02-infos.vue";
import DetailFacility from "./cpns/detail-03-facility.vue";

const router = useRouter();
const route = useRoute();
const onClickLeft = () => {
  router.back();
};

const infos = ref({});
getDetailInfos(route.params.id).then((res) => {
  infos.value = res.data;
});

const mainPart = computed(() => infos.value.mainPart);

// const navNames = ["描述", "设施", "房东", "评论", "须知", "周边"];
</script>

<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <template v-if="mainPart">
      <detail-swipe :house-picture="mainPart.topModule.housePicture" />
      <detail-infos :house-infos="mainPart.topModule" />
      <detail-facility
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
    </template>
    <!-- <van-tabs v-model:active="active" scrollspy sticky>
      <van-tab title="描述"> </van-tab>
    </van-tabs> -->
  </div>
</template>

<style lang="less" scoped>
.detail {
  padding-bottom: 60px;
}
</style>
