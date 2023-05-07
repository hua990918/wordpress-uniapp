<template>
    <view class="article">
        <xCard
            v-for="(item, index) in 5"
            style="margin-top: 20rpx">
            <view class="article-item">
                <view class="article-item-left">
                    <view class="article-item-left_title">3年轻人20万开店日营业额仅79元-热搜的看法</view>
                    <view class="article-item-left_desc">
                        <view>2023-04-27</view>

                        <view>
                            <u-icon name="eye"></u-icon>
                            356
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
</template>

<script setup>
    import { ref } from 'vue'
    import xCard from '@/components/x-card/x-card.vue'
</script>

<style lang="scss" scoped>
    .article {
        margin-top: 35rpx;
        &-item {
            display: flex;
            &-left {
                &_title {
                }
                &_desc {
                }
            }
            &-right {
            }
        }
    }
</style>
