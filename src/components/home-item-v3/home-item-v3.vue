<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});

const {
  image,
  location,
  houseName,
  summaryText,
  finalPrice,
  productPrice,
  priceTipBadge,
} = props.itemData;

const priceTipBadgeStyle = {
  color: priceTipBadge.color,
  backgroundImage: `linear-gradient(270deg, #f66, #ff9f9f)`,
};
</script>

<template>
  <div class="home-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="image.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span class="text">{{ location }}</span>
        </div>
        <div class="house-name">{{ houseName }}</div>
        <div class="summary">{{ summaryText }}</div>
        <div class="price">
          <div class="final-price">{{ "¥" + finalPrice }}</div>
          <div class="product-price">{{ "¥" + productPrice }}</div>
          <div class="tip" :style="priceTipBadgeStyle">
            {{ priceTipBadge.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-item {
  width: 50%;
  .item-inner {
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      padding: 8px 10px;
      font-size: 12px;
      .location {
        display: flex;
        align-items: center;
        img {
          width: 12px;
        }
        .text {
          margin-left: 2px;
          font-size: 12px;
          color: #666;
        }
      }
      .house-name {
        margin: 5px 0;
        font-size: 14px;
        color: #333;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .summary {
        color: #666;
        margin: 5px 0;
      }
      .price {
        display: flex;
        align-items: center;
        .final-price {
          font-size: 14px;
          color: var(--primary-color);
        }
        .product-price {
          margin: 0 6px;
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }
        .tip {
          color: #fff;
          background-image: linear-gradient(#ff6666, #ff9f9f);
          padding: 0 6px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
