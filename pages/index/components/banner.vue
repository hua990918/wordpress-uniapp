<template>
    <view class="banner">
        <view class="banner-container">
            <xCard>
                <!-- 搜索框 -->
                <u-search
                    placeholder="搜索您感兴趣的内容~"
                    v-model="keyword"
                    :showAction="false"></u-search>
                <!-- 轮播图 -->
                <view class="banner-item">
                    <u-swiper
                        :list="bannerList"
                        indicator
                        indicatorMode="line"
                        circular></u-swiper>
                </view>
            </xCard>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue'
    import xCard from '@/components/x-card/x-card.vue'

    const keyword = ref('')

    const bannerList = ref([
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    ])
</script>

<style lang="scss" scoped>
    .banner {
        margin-top: 100rpx;
        /* #ifdef MP-WEIXIN */
        margin-top: 170rpx;
        /* #endif */
        &-container {
            background: $uni-color-theme;
            border-bottom-left-radius: 20rpx;
            border-bottom-right-radius: 20rpx;
            height: 330rpx;
            padding: 3%;
        }
        &-item {
            padding-top: 20rpx;
        }
    }
</style>
