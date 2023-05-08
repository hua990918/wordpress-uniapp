<template>
    <view class="category-wrap">
        <!-- 左侧 -->
        <scroll-view
            class="left"
            scroll-y="true">
            <view
                class="parent-item"
                :class="{ active: currentParentId === item.id }"
                @click="handelClick(item, index)"
                v-for="(item, index) in cateList"
                :key="index">
                {{ item.name }}
            </view>
        </scroll-view>
        <!-- 右侧 -->
        <scroll-view
            class="right"
            scroll-y="true">
            <block
                v-for="(item, index) in selectCateList"
                :key="index">
                <view class="list-item">
                    <view>
                        <image
                            src="https://www.watch-life.net/images/2019/11/minapper-300x168.jpg"
                            class="cover"
                            mode="aspectFill"></image>
                    </view>
                    <view class="content-title">
                        <view class="topic-name">
                            <text>{{ item.name }}</text>
                        </view>
                    </view>
                    <view class="content-brief">
                        <text>{{ item.description }}</text>
                    </view>
                </view>
            </block>
        </scroll-view>
    </view>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { getCate } from '@/api'

    onMounted(() => {
        getCateList()
    })

    const currentParentId = ref(36)
    const cateList = ref([]) // 一级分类
    const allCateList = ref([]) // 总分类
    const selectCateList = ref([])

    /**
     * 获取分类信息
     */
    async function getCateList() {
        const res = await getCate(100)
        const records = res.filter((item) => item.parent === 0)
        const records2 = res.filter((item) => item.parent === currentParentId.value)
        selectCateList.value = records2
        cateList.value = records
        allCateList.value = res
    }

    /**
     * 点击分类
     */
    function handelClick(items, index) {
        currentParentId.value = items.id
        const records = allCateList.value.filter((item) => item.parent === items.id)

        selectCateList.value = records
    }
</script>

<style lang="scss" scoped>
    page {
        height: 100%;
    }
    .category-wrap {
        height: 100vh;
        /* #ifdef H5 */
        // height: 100%;
        height: calc(100vh - 100rpx);
        /* #endif*/
        display: flex;

        .left {
            width: 250rpx;
            height: 100vh;
            /* #ifdef H5 */
            // height: 100%;
            height: 100vh;
            /* #endif*/
            background-color: white;
            font-size: 28rpx;

            .parent-item {
                height: 100rpx;
                line-height: 100rpx;
                padding: 0 24rpx;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .active {
                position: relative;
                color: #118fff;
                font-weight: 500;
                background: #fff;
                background: #f5f7f7;
            }

            .active::before {
                content: '';
                display: block;
                width: 3px;
                height: 50rpx;
                background: #118fff;
                position: absolute;
                top: 25rpx;
                left: 0;
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
            }
        }

        .right {
            flex: 1;
            height: 100vh;
            /* #ifdef H5 */
            // height: 100%;
            height: 100vh;
            /* #endif*/
            padding: 10rpx 0 0;
            background: #f5f7f7;
            box-sizing: border-box;
            /* #ifdef H5 */
            padding-bottom: 100rpx;
            /* #endif */
            .list-item {
                position: relative;
                overflow: hidden;
                background: #fff;
                border-radius: 10rpx;
                box-shadow: 2px 2px 10px #eee;
                margin: 0 40rpx 40rpx;

                .cover {
                    width: 100%;
                    height: 140rpx;
                    display: block;
                }
            }

            .content-title {
                padding: 5rpx 30rpx 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .content-title text {
                font-size: 30rpx;
                line-height: 1;
                font-weight: 500;
                color: #333;
            }

            .content-brief {
                width: 70%;
                /* margin: 0 auto; */
                padding: 0 0 20rpx 30rpx;
                font-size: 26rpx;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #959595;
            }

            .topic-name {
                width: 55%;
            }

            .topic-img > image {
                width: 98rpx;
                height: 49rpx;
                display: block;
            }
        }
    }
</style>
