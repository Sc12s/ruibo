<template>
  <ul class="notes_box">
    <li class="logo_notes">
      <div>
        <i class="iconfont icon-yduidunpaishixin"></i>
        <span>规则与协议</span>
      </div>
      <ul>
        <li>商城规则</li>
        <li>服务中心</li>
        <li>平台服务协议</li>
      </ul>
    </li>
    <li class="logo_notes">
      <div>
        <i class="iconfont icon-bangzhu"></i>
        <span>新手上路</span>
      </div>
      <ul>
        <li>新手专区</li>
        <li>在线帮助</li>
        <li>免费开店</li>
        <li>答疑解惑</li>
      </ul>
    </li>
    <li class="logo_notes">
      <div>
        <i class="iconfont icon-fukuanfangshisel"></i>
        <span>付款方式</span>
      </div>
      <ul>
        <li>快捷支付</li>
        <li>信用卡</li>
        <li>余额宝</li>
        <li>蚂蚁花呗</li>
      </ul>
    </li>
    <li class="logo_notes">
      <div>
        <i class="iconfont icon-kefufill"></i>
        <span>客服联系</span>
      </div>
      <ul>
        <li>物流问题</li>
        <li>付款问题</li>
        <li>商家问题</li>
        <li>商品问题</li>
      </ul>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.notes_box {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  .logo_notes {
    flex: 1;
    color: #999999;

    div {
      display: flex;
      justify-content: center;

      i {
        font-size: 40px;
      }

      span {
        line-height: 63px;
        padding-left: 5px;
        color: #3c3c3c;
        font-size: 16px;
      }
    }

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
      padding: 10px;
      justify-content: space-around;
    }
  }
}
</style>