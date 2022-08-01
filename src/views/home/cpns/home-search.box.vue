<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import {
  formatMonthDay,
  formatMonthDayAddOneDay,
  getStayDays,
} from "@/utils/format-month-day";
import useHomeStore from "@/stores/modules/home";

const router = useRouter();

const cityClick = () => {
  router.push("/city");
};

// 获取位置
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

// 选中当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

// 日期处理
const nowTime = new Date();
const nowTimeAddOne = new Date().setDate(nowTime.getDate() + 1);
const startDate = ref(nowTime);
const endDate = ref(nowTimeAddOne);
const showCalendar = ref(false);
const dateRangeClick = () => {
  showCalendar.value = true;
};
const onConfirm = (value) => {
  startDate.value = value[0];
  endDate.value = value[1];
  showCalendar.value = false;
};
const stayDays = computed(() => getStayDays(startDate.value, endDate.value));

// 热门地区建议
const homeStore = useHomeStore();
homeStore.fetchHotSuggestAction();
const { hotSuggests } = storeToRefs(homeStore);
const hotCityClick = (cityName) => {
  searchClick(cityName);
};

// 搜索按钮
const searchClick = (cityName) => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: cityName || currentCity.value.cityName,
    },
  });
};
</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location border-bottom-line">
      <div class="city" @click="cityClick">
        {{ currentCity.cityName || "默认城市" }}
      </div>
      <div class="position" @click="getPositionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range border-bottom-line" @click="dateRangeClick">
      <div class="item start">
        <span class="tip">入住</span>
        <span class="time">{{ formatMonthDay(startDate) }}</span>
      </div>
      <div class="item stay">
        <span class="tip">共{{ ` ${stayDays} ` }}晚</span>
      </div>
      <div class="item end">
        <span class="tip">商店</span>
        <span class="time">{{ formatMonthDay(endDate) }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      :round="false"
      @confirm="onConfirm"
    />

    <!-- 关键信息 -->
    <div class="keyword-info">
      <div class="keyword-info-top border-bottom-line">
        <span class="price">价格不限</span>
        <span class="people">人数不限</span>
      </div>
      <div class="keyword-info-bottom border-bottom-line">
        关键字/位置/民宿名
      </div>
    </div>

    <!-- 热门地区建议 -->
    <div class="hot-suggests">
      <template v-for="item in hotSuggests" :key="item.tagText.text">
        <div
          :style="{
            color: item.color,
            backgroundColor: item.tagText.background.color,
          }"
          class="item"
          @click="hotCityClick(item.tagText.text)"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn">
      <div class="btn" @click="searchClick(null)">开始搜索</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
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
  .date-range {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        padding: 3px;
      }
      .tip {
        color: #666;
      }
    }
  }
  .keyword-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    .keyword-info-top {
      box-sizing: border-box;
      color: #666;
      display: flex;
      width: 100%;
      text-align: left;
      span {
        flex: 1;
        padding: 13px 20px;
      }
      .people {
        border-left: 1px solid #eee;
      }
    }
    .keyword-info-bottom {
      box-sizing: border-box;
      width: 100%;
      color: #666;
      padding: 13px 20px;
    }
  }
  .hot-suggests {
    padding: 13px 20px;
    display: flex;
    flex-wrap: wrap;
    .item {
      margin: 4px;
      color: #444;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 14px;
    }
  }
  .search-btn {
    padding: 10px 20px;
    .btn {
      padding: 8px;
      text-align: center;
      width: 100%;
      font-size: 18px;
      font-weight: 500;
      background-image: var(--theme-linear-gradient);
      border-radius: 15px;
      color: #fff;
    }
  }
}
</style>
