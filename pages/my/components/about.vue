<template>
    <view class="about">
        <xCard>
            <view class="about-item">
                <u-icon
                    name="heart-fill"
                    color="#f77b84"
                    size="45rpx"></u-icon>
                <view class="text">关于我们</view>
                <view class="right"><u-icon name="arrow-right"></u-icon></view>
            </view>
            <view class="about-item">
                <u-icon
                    name="weixin-fill"
                    color="#f4b61b"
                    size="45rpx"></u-icon>
                <view class="text">联系我们</view>
                <view class="right"><u-icon name="arrow-right"></u-icon></view>
            </view>
            <view class="about-item">
                <u-icon
                    name="server-man"
                    color="#93b8e5"
                    size="45rpx"></u-icon>
                <view class="text">意见反馈</view>
                <view class="right"><u-icon name="arrow-right"></u-icon></view>
            </view>
        </xCard>
        <view class="about-copyright">@ 消失的云言 yyink.cn</view>
    </view>
</template>

<script setup>
    import xCard from '@/components/x-card/x-card.vue'
</script>

<style lang="scss" scoped>
    .about {
        margin-top: 25rpx;
        &-item {
            display: flex;
            align-items: center;
            padding: 20rpx 0;
            .text {
                margin-left: 10rpx;
            }
            .right {
                margin-left: auto;
            }
        }
        &-copyright {
            margin-top: 20rpx;
            font-size: 28rpx;
            text-align: center;
            color: #a3a3a3;
        }
    }
</style>
