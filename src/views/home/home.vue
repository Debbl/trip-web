<script setup>
import { computed, ref } from "vue";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search.box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";
import useScroll from "@/hooks/useScroll";

const searchBoxRef = ref();
let searchBoxClickOffsetTop = 0;
const { scrollTop } = useScroll();
const isShowSearchBar = computed(() => {
  searchBoxClickOffsetTop =
    searchBoxRef.value?.$el.querySelector(".search-btn").offsetTop;
  // console.log(searchBoxClickOffsetTop);
  if (scrollTop.value > searchBoxClickOffsetTop) {
    return true;
  }
  return false;
});
</script>

<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box ref="searchBoxRef" />
    <search-bar v-if="isShowSearchBar" />
    <home-categories />
    <home-content />
  </div>
</template>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
