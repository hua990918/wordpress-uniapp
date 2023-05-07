<template>
  <view
    :class="{
      'x-card--round': round,
    }"
    class="x-card"
  >
    <view v-if="showHeader" class="x-card-header">
      <view v-if="showTitle" class="x-card-header__title">
        <template v-if="showTitleSlot">
          <slot name="title"></slot>
        </template>
        <template v-else>{{ title }}</template>
      </view>
      <view v-if="showExtra" class="x-card-header__extra">
        <slot name="extra"></slot>
      </view>
    </view>
    <view :style="bodyStyle" class="x-card-body">
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import { useSlots, computed } from 'vue';

/**
 * @description 卡片
 * @params {string | number} title	卡片标题
 * @params {boolean} round	是否圆角，默认：true
 * @params {object | string} 样式
 */
const props = defineProps({
  title: {
    type: [String, Number],
    default: '',
  },
  round: {
    type: Boolean,
    default: true,
  },
  bodyStyle: {
    type: [Object, String],
    default: '',
  },
});

const slots = useSlots();

const showTitleSlot = computed(() => slots.title);
const showExtra = computed(() => slots.extra);
const showTitle = computed(() => showTitleSlot.value || '' !== props.title);
const showHeader = computed(() => showTitle.value || showExtra.value);
</script>

<style lang="scss" scoped>
.x-card {
  background: #fff;
  z-index: 999;

  &--round {
    border-radius: 25rpx;
    overflow: hidden;
  }

  &-header {
    display: flex;
    align-items: center;
    padding: 30rpx 30rpx 0;

    &__title {
      flex: 1;
      font-size: $uni-font-size-base;
      font-weight: bold;
      color: #333;
      line-height: 48rpx;
    }

    &__extra {
      flex-shrink: 0;
    }
  }

  &-body {
    padding: 30rpx;
    line-height: 1.5175;
  }
}
</style>
