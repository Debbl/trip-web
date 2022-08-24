<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
import { computed } from "vue";
const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({}),
  },
});
const houseFacilitySort = computed(() =>
  props.houseFacility.houseFacilitys.filter((item) =>
    props.houseFacility.facilitySort.includes(item.groupId)
  )
);
console.log(houseFacilitySort.value);
</script>

<template>
  <div class="facility">
    <detail-section title="房屋设施">
      <div class="content">
        <template v-for="item in houseFacilitySort" :key="item.groupId">
          <div class="item">
            <div class="left">
              <img class="title-icon" :src="item.icon" :alt="item.groupName" />
              <h3 class="title">{{ item.groupName }}</h3>
            </div>
            <div class="right">
              <template
                v-for="facility in item.facilitys.slice(0, 4)"
                :key="facility.name"
              >
                <div class="item">
                  <i class="icon-check"></i>
                  <span>{{ facility.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.facility {
  .content {
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    background-color: #f7f9fb;
    border-radius: 3px;
    .item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      .left {
        text-align: center;
        width: 90px;
        .title {
          font-size: 12px;
          color: #666;
        }
        .title-icon {
          width: 28px;
          height: 28px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 50%;
          .icon-check {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: url(@/assets/img/detail/icon_check.png) 0 0 / 100% 100%;
          }
        }
      }
    }
  }
}
</style>
