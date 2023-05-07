<template>
    <view class="article">
        <view
            class="article-mg"
            v-for="(item, index) in 5">
            <xCard>
                <view class="article-item">
                    <view class="article-item-left">
                        <view class="article-item-left_title">3年轻人20万开店日营业额仅79元-热搜的看法店日营业额仅79元-热搜的看法店日营业额仅79元-热搜的看法</view>
                        <view class="article-item-left_desc">
                            <view class="article-item-left_date">2023-04-27</view>
                            <view class="article-item-left_infos">
                                <u-icon name="eye"></u-icon>
                                <view>356</view>
                            </view>
                        </view>
                    </view>
                    <view class="article-item-right">
                        <u--image
                            :showLoading="true"
                            src="https://www.watch-life.net/images/2023/04/大医-211x300.jpg"
                            width="202rpx"
                            height="134rpx"></u--image>
                    </view>
                </view>
            </xCard>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue'
    import xCard from '@/components/x-card/x-card.vue'
</script>

<style lang="scss" scoped>
    .article {
        margin-top: 35rpx;
        padding-bottom: 10rpx;
        .card {
            margin-top: 20rpx;
            /* #ifdef MP-WEIXIN */
            margin-bottom: 20px;
            /* #endif */
        }
        &-mg {
            margin-top: 25rpx;
        }
        &-item {
            display: flex;
            &-left {
                &_title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                &_desc {
                    display: flex;
                    align-items: center;
                    padding-top: 10rpx;
                    color: #9e9e9e;
                    font-size: 28rpx;
                }
                &_date {
                }
                &_infos {
                    display: flex;
                    align-items: center;
                    margin-left: 20rpx;
                    margin-top: 2rpx;
                }
            }
            &-right {
            }
        }
    }
</style>
