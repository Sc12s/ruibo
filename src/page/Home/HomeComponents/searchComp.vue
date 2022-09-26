<template>
    <div class="search_content_box">
        <h1>ruibo</h1>
        <div class="search_box">
            <!-- 搜索框 -->
            <div class="search_container">
                <a-input size="large" placeholder="请搜索要查找的商品" :bordered="false" class="search_info" />
                <div class="search_button_box">搜索</div>
            </div>
            <!-- 搜索历史 -->
            <div class="search_history"></div>
        </div>
        <!-- 网站二维码 -->
        <div class="qrcode"></div>
    </div>

</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.search_content_box {
    width: 1200px;
    height: 100px;
    margin: 0px auto 10px auto;
    display: flex;
    justify-content: space-between;

    h1 {
        width: 170px;
        margin: 0;
        color: #FF5000;
        font-size: 40px;
        font-style: italic;
        line-height: 100px;
        text-align: center;
    }

    // 二维码
    .qrcode {
        width: 170px;
    }


    .search_box {
        width: 650px;
        padding-top: 34px;
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
        .search_history {
            color: #666666;
            font-size: 12px;
            margin-top: 5px;
            margin-left: 7px;
        }
    }
}
</style>