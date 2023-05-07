<template>
    <view class="my">
        <Top />
        <view class="my-info"></view>
    </view>
</template>

<script setup>
    import Top from './components/top.vue'
</script>

<style lang="scss" scoped>
    .my {
        height: calc(100vh - 100rpx);
        background: #f1f1f1;
        &-info {
            padding: 3%;
        }
    }
</style>
