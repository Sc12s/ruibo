<template>
    <div class="sroll_search_box">
        <div class="search_box">
            <h1>ruibo</h1>
            <div class="search_container">
                <a-input size="large" placeholder="请搜索要查找的商品" :bordered="false" class="search_info" />
                <div class="search_button_box">搜索</div>
            </div>
            <div class="qrcode"></div>
        </div>

    </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.sroll_search_box {
    position: fixed;
    top: 0;
    width: 100%;
    height: 55px;
    background: #fff;
    z-index: 1;

    .search_box {
        width: 1200px;
        height: 100%;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;

        h1 {
            width: 170px;
            margin: 0;
            color: #FF5000;
            font-size: 40px;
            font-style: italic;
            line-height: 55px;
            text-align: center;
        }

        .qrcode {
            width: 170px;
        }

        .search_container {
            width: 650px;
            border: 2px solid #FF5000;
            display: inline-block;
            height: 44px;
            border-radius: 20px;
            display: flex;
            background: #fff;

            .search_info {
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                padding-left: 15px;
                font-size: 14px;
            }

            .search_button_box {
                width: 85px;
                background-image: linear-gradient(#ff9000, #ff5000 77%);
                border: 2px solid #fff;
                border-radius: 20px;
                text-align: center;
                line-height: 38px;
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                font-family: "宋体";
                cursor: pointer;
            }
        }
    }
}
</style>