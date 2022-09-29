<template>
    <div class="nav_head_box">
        <h1 class="logo"><youtube-outlined class="video_logo" />瑞博直播</h1>
    </div>
</template>

<script lang="ts" setup>
import { YoutubeOutlined } from '@ant-design/icons-vue';
</script>

<style lang="less" scoped>
.nav_head_box {
    position: sticky;
    top: 0;
    width: 100%;
    height: 75px;
    background: #fff;

    .logo {
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        color: #FF5000;
        font-size: 23px;
        font-weight: 600;
        line-height: 75px;
        .video_logo {
            padding: 0 calc(60px/8);
        }
    }
}
</style>