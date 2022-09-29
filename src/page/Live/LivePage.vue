<template>
    <div class="live_container">
        <NavHeadComp />
        <LiveContentComp />
    </div>
</template>

<script lang="ts" setup>
import NavHeadComp from './LiveComp/NavHeadComp.vue';
import LiveContentComp from './LiveComp/liveContentComp.vue';
</script>

<style lang="less" scoped>
    .live_container {
        position: relative;
    }
</style>