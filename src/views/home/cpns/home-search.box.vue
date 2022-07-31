<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import {
  formatMonthDay,
  formatMonthDayAddOneDay,
  getStayDays,
} from "@/utils/format-month-day";

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
</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">
        {{ cityStore.currentCity.cityName || "默认城市" }}
      </div>
      <div class="position" @click="getPositionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range" @click="dateRangeClick">
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
}
</style>
