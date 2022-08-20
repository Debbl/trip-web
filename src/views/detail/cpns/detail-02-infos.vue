<script setup>
defineProps({
  houseInfos: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="infos">
    <div class="name">
      <h2>{{ houseInfos.houseName }}</h2>
    </div>
    <div class="tags">
      <template v-for="tag in houseInfos.houseTags">
        <span
          :key="tag.title"
          class="item"
          v-if="tag.tagText"
          :style="{
            color: tag.tagText.color,
            background: tag.tagText.background.color,
          }"
          >{{ tag.tagText?.text }}</span
        >
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="overall">{{ houseInfos.commentBrief.overall }}</span>
        <span class="score-title">{{
          houseInfos.commentBrief.scoreTitle
        }}</span>
        <span class="comment-brief">{{
          houseInfos.commentBrief.commentBrief
        }}</span>
      </div>
      <div class="right">
        <span class="count">{{
          houseInfos.commentBrief.totalCount + "条评论"
        }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="near extra">
      <div class="left">
        <span>{{ houseInfos.nearByPosition.address }}</span>
      </div>
      <div class="right">
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.infos {
  padding: 16px;

  .tags {
    margin: 6px 0;

    .item {
      margin-right: 3px;
    }
  }
  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
    background-color: #f5f7fa;
    padding: 10px;
  }
  .comment {
    .left {
      .overall {
        font-size: 18px;
        color: #333;
        font-weight: 800;
      }
      .score-title {
        padding: 0 6px;
        font-weight: 700;
      }
      .comment-brief {
        font-size: 10px;
        color: #666;
      }
    }
    .right {
      font-size: 12px;
      color: #ff9645;
    }
  }
  .near {
    .left {
      font-weight: 600;
    }
    .right {
      font-size: 12px;
      color: #ff9645;
    }
  }
}
</style>
