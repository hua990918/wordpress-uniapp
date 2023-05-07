<template>
    <view class="top">
        <view class="top-user">
            <xCard class="top-card">
                <u-avatar
                    class="img"
                    src="https://cdn.uviewui.com/uview/album/1.jpg"
                    size="100rpx"></u-avatar>
                <view class="top-card-login">
                    <view class="click">点此登录</view>
                    <view class="lv">lv</view>
                </view>
                <view class="top-card-info">
                    <view>登录以后查看角色</view>
                    <view>清楚缓存</view>
                </view>
            </xCard>
        </view>
    </view>
</template>

<script setup>
    import xCard from '@/components/x-card/x-card.vue'
</script>

<style lang="scss" scoped>
    .top {
        height: 320rpx;
        background: $uni-color-theme;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
        padding: 3%;

        &-user {
            padding-top: 120px;
        }
        &-card {
            &-login {
                display: flex;
                .click {
                    font-size: 42rpx;
                    font-weight: 600;
                    margin: 16rpx 0;
                }
                .lv {
                    margin-left: 10rpx;
                    margin-top: 30rpx;
                    font-size: 14rpx;
                    font-weight: 600;
                    background: $uni-color-theme;
                    color: #fff;
                    width: 50rpx;
                    height: 35rpx;
                    text-align: center;
                    border-radius: 10rpx;
                }
            }
            &-info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 26rpx;
                color: #747474;
            }

            .img {
                position: absolute;
                top: 200rpx;
                left: 50rpx;
            }
        }
    }
</style>
