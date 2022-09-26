<template>
  <div class="goods_box">
    <h1>猜你喜欢<span>个性推荐</span></h1>
    <ul class="goods_list">
        <li v-for="index in 10" :key="index">{{ index }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
    .goods_box {
        width: 100%;
        min-width: 1150px;
        margin-top: 35px;
        
        h1 {
            font-family: "宋体";
            font-weight: 700;
            color: #111111;
            span {
                font-size: 14px;
                font-family: "微软雅黑";
                color: #fff;
                padding: 0 5px;
                margin: 0 5px;
                background-image: linear-gradient(to right, #ff9000, #ff5000 77%);
                border-radius: 3px;
                font-weight: lighter;
            }
        }
        
        .goods_list {
            padding: 0;
            margin: 0;
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;

            li {
                width: 370px;
                height: 170px;
                border-radius: 12px;
                background: #f7f9fa;
                margin-bottom: 20px;
                cursor: pointer;
            }

            li:hover {
                border: 1px solid rgba(255,144,0, 0.5);
                box-shadow: 0 2px 12px 0 rgba(255,144,0, 0.2);
                background-color: #fff;
            }

            li:nth-child(3n+2) {
                margin: 0 20px;
            }
        }
    }
</style>