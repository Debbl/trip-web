<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/main";
import TabBar from "./components/tab-bar/tab-bar.vue";
import Loading from "./components/loading/loading.vue";

const route = useRoute();

const mainStore = useMainStore();
const { isShowLoading } = storeToRefs(mainStore);
</script>

<template>
  <div class="app">
    <loading v-if="isShowLoading" />
    <router-view />
    <tab-bar v-if="!route.meta.hideTabBar" />
  </div>
</template>
