<template>
    <view class="nav">
        <view class="nav-item">
            <u--image
                :showLoading="true"
                :src="src"
                width="200rpx"
                height="56rpx"
                @click="click"></u--image>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue'

    const src = ref('https://s1.ax1x.com/2023/05/08/p9wIXOe.png')
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

        /* #ifdef MP-WEIXIN */
        padding-top: 80rpx;
        /* #endif */
    }
</style>
