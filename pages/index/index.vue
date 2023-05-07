<template>
    <view class="index">
        <Nav />
        <Banner />
        <view class="index-pad">
            <Excellent />
            <Article />
        </view>
    </view>
</template>

<script setup>
    import Nav from './components/nav.vue'
    import Banner from './components/banner.vue'
    import Excellent from './components/excellent.vue'
    import Article from './components/article.vue'
</script>

<style lang="scss" scoped>
    .index {
        height: 100%;
        background: #f1f1f1;
        &-pad {
            padding: 3%;
        }
    }
</style>
