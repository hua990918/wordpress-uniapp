<template>
  <view class="nav">
    <view class="nav-item">
      <u--image
        :showLoading="true"
        :src="src"
        width="200rpx"
        height="56rpx"
        @click="click"
      ></u--image>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const src = ref('https://www.watch-life.net/h5/static/images/logo.png');
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100rpx;
  background: $uni-color-theme;
  padding-left: 30rpx;
}
</style>
