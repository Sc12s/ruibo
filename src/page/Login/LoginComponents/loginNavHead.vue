<template>
    <ul class="nav_head_container">
        <li>
            <h1 class="logo"><router-link to="/">ruibo</router-link></h1>
        </li>
        <li class="warning"><i class="iconfont icon-duanxin"></i> ”登录页面“改进建议</li>
    </ul>
</template>

<script setup lang="ts">
    // 图标导入
    import './icon/alibabaicon.css'
</script>

<style scoped lang="less">
.nav_head_container {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 1200px;
    margin: 0px auto;
    display: flex;
    justify-content: flex-start;

    li:nth-child(1) {
        margin-right: auto;

        .logo {
            margin: 0;
            color: #FF5000;
            font-size: 40px;
            font-style: italic;
            line-height: 88px;

            a {
                color: #FF5000;
            }
        }
    }

    .warning {
        line-height: 88px;
        color: #666666;
        font-size: 12px;
        cursor: pointer;
        transition: all .3s;
        
        i {
            font-size: 12px;
            color: #FF5000;
        }
    }
    .warning:hover {
        color: #FF5000;
    }
}
</style>