<template>
    <view class="article">
        <view
            class="article-mg"
            v-for="(item, index) in articleList">
            <xCard>
                <view class="article-item">
                    <view class="article-item-left">
                        <view class="article-item-left_title">{{ item.title?.rendered }}</view>
                        <view class="article-item-left_desc">
                            <view class="article-item-left_date">{{ item._time }}</view>
                            <view class="article-item-left_infos">
                                <u-icon name="eye"></u-icon>
                                <view>{{ item.pageviews }}</view>
                            </view>
                        </view>
                    </view>
                    <view class="article-item-right">
                        <u--image
                            :showLoading="true"
                            :src="item.post_frist_image"
                            width="202rpx"
                            height="134rpx"></u--image>
                    </view>
                </view>
            </xCard>
        </view>
    </view>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import xCard from '@/components/x-card/x-card.vue'
    import { getTime } from '@/utils/get.js'
    import { getArticle } from '@/api'
    import dayjs from 'dayjs'

    onMounted(() => {
        getArticleList()
    })
    /**
     * 获取最近10篇文章
     */
    const articleList = ref([])
    async function getArticleList() {
        const res = await getArticle()

        const records = res.map((item) => ({
            ...item,
            _time: getTime(item.date),
        }))
        console.log(dayjs(res.date).format('YYYY-MM-DD'))
        articleList.value = records
    }
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
                margin-left: auto;
            }
        }
    }
</style>
