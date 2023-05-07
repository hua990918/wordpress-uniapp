<template>
    <view class="excellent">
        <xCard>
            <!-- 标题 -->
            <view class="excellent-title">
                <u-icon
                    color="#0081ff"
                    size="40rpx"
                    name="bookmark-fill"></u-icon>
                <view class="excellent-title-tip">精选栏目</view>
                <view class="excellent-title-info">热门栏目推荐</view>
            </view>
            <!--热门标签-->
            <view class="excellent-hot">
                <u-grid
                    :border="false"
                    col="4">
                    <u-grid-item
                        v-for="(listItem, listIndex) in list"
                        @click="handleClick(listItem)"
                        :key="listIndex">
                        <u--image
                            :showLoading="true"
                            src="https://www.watch-life.net/images/2021/01/watch-life.png"
                            shape="circle"
                            width="80rpx"
                            height="80rpx"></u--image>
                        <text class="grid-text">{{ listItem.title }}</text>
                    </u-grid-item>
                </u-grid>
            </view>
        </xCard>
    </view>
</template>

<script setup>
    import { ref } from 'vue'
    import xCard from '@/components/x-card/x-card.vue'

    const list = ref([
        {
            name: 'photo',
            title: '前端开发',
        },
        {
            name: 'lock',
            title: 'NodeJs',
        },
        {
            name: 'star',
            title: 'JavaScript',
        },
        {
            name: 'hourglass',
            title: '飞拍科技',
        },
    ])

    /**
     * 点击事件
     */
    function handleClick(val) {
        console.log(val)
    }
</script>

<style lang="scss" scoped>
    .excellent {
        padding-top: 70rpx;
        &-title {
            display: flex;
            align-items: center;
            &-tip {
            }
            &-info {
                font-size: 18rpx;
                color: #9e9e9e;
                margin-left: 10rpx;
                margin-top: 5rpx;
            }
        }
        &-hot {
            padding-top: 30rpx;
        }
        .grid-text {
            padding-top: 8rpx;
            font-size: 30rpx;
            color: #9e9e9e;
        }
    }
</style>
