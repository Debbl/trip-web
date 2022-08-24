<script setup>
defineProps({
  title: {
    type: String,
    default: "标题",
  },
  moreInfo: {
    type: String,
    default: "查看全部",
  },
});
</script>

<template>
  <div class="section">
    <div class="top">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <h2>默认内容</h2>
      </slot>
    </div>
    <div class="bottom">
      <span>{{ moreInfo }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.section {
  border-top: 4px solid #f2f3f4;
  border-bottom: 4px solid #f2f3f4;
  padding: 16px;
  .top {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .content {
    padding: 6px 0;
  }
  .bottom {
    color: var(--primary-color);
    margin-top: 20px;
    text-align: right;
  }
}
</style>
