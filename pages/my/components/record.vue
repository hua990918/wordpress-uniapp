<template>
    <view class="record">
        <xCard>
            <!-- 标题 -->
            <view class="record-title">
                <u-icon
                    color="#0081ff"
                    size="44rpx"
                    name="bookmark-fill"></u-icon>
                <view class="record-title-my">我的记录</view>
            </view>
            <!-- 我的记录 -->
            <view class="record-hot">
                <u-grid
                    :border="false"
                    col="4">
                    <u-grid-item
                        v-for="(listItem, listIndex) in list"
                        @click="handleClick(listItem)"
                        :key="listIndex">
                        <u-icon
                            :customStyle="{ paddingTop: 20 + 'rpx' }"
                            :color="listItem.color"
                            :name="listItem.name"
                            :size="26"></u-icon>
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
            name: 'photo-fill',
            color: '#9fc80e',
            title: '浏览',
        },
        {
            name: 'clock-fill',
            color: '#fead0c',
            title: '评论',
        },
        {
            name: 'star-fill',
            color: '#57b9e8',
            title: '点赞',
        },
        {
            name: 'hourglass-half-fill',
            color: '#fa757c',
            title: '订阅',
        },
    ])
</script>

<style lang="scss" scoped>
    .record {
        margin-top: 100rpx;
        &-title {
            display: flex;
            align-items: center;
            &-my {
                font-size: 34rpx;
                font-weight: 600;
            }
        }
        &-hot {
            padding-top: 20rpx;
        }
        .grid-text {
            padding-top: 8rpx;
            font-size: 30rpx;
        }
    }
</style>
