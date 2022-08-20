<script setup>
import { toRefs } from "vue";

const props = defineProps({
  housePicture: {
    type: Object,
    default: () => ({}),
  },
});

const housesGroup = {};
const { housePics } = toRefs(props.housePicture);
console.log(housePics.value);
for (const house of housePics.value) {
  const enumPictureCategory = house.enumPictureCategory;
  if (housesGroup[enumPictureCategory]) {
    housesGroup[enumPictureCategory].push(house);
  } else {
    const houseArr = [];
    houseArr.push(house);
    housesGroup[enumPictureCategory] = houseArr;
  }
}

// 获取分类索引
const getCategoryIndex = (item) => {
  return (
    housesGroup[item.enumPictureCategory].findIndex((house) => house === item) +
    1
  );
};
// 格式化 title
const getFormatTitle = (title) => {
  return /【(.*?)】/.exec(title)[1];
};
</script>

<template>
  <div class="detail-swipe">
    <van-swipe>
      <template v-for="item in housePicture.housePics" :key="item.orderIndex">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <div class="custom-indicator">
          <template v-for="(value, key) in housesGroup" :key="key">
            <div
              class="item"
              :class="{
                active:
                  housePicture.housePics[active]?.enumPictureCategory == key,
              }"
            >
              <span>{{ getFormatTitle(value[0]?.title) }}</span>
              <span
                v-if="
                  housePicture.housePics[active]?.enumPictureCategory == key
                "
                >{{ getCategoryIndex(housePicture.housePics[active]) }}/{{
                  value.length
                }}</span
              >
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.detail-swipe {
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 3px 5px;
  border-radius: 6px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  .item {
    margin: 0 3px;
  }
  .item.active {
    border-radius: 6px;
    background-color: #fff;
    padding: 0 6px;
    color: #000;
  }
}
</style>
