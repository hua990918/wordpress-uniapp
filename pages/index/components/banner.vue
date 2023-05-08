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
    import { ref, onMounted } from 'vue'
    import xCard from '@/components/x-card/x-card.vue'
    import { getSetting } from '@/api'

    const keyword = ref('')

    onMounted(() => {
        getSettings()
    })
    /**
     * 获取轮播图
     */
    const bannerList = ref([])
    async function getSettings() {
        const { expand } = await getSetting()
        const records = expand.swipe_nav.map((item) => item.image)
        bannerList.value = records
    }
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
