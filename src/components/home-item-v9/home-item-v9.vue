<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
const { image, summaryText, houseName, finalPrice, commentScore } =
  props.itemData;
</script>

<template>
  <div class="home-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">{{ summaryText }}</div>
        <div class="house-name">{{ houseName }}</div>
        <div class="price">
          <van-rate
            :model-value="+commentScore"
            :size="15"
            color="#fff"
            readonly
            allow-half
          />
          <div class="new">{{ "¥ " + finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-item {
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      position: absolute;
      color: #fff;
      padding: 8px 10px;
      bottom: 0;
      .summary {
        font-size: 12px;
      }
      .house-name {
        margin: 5px 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .price {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
