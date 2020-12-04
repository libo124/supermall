<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item link="/home" active-color="#ffa1c0">
        <img src="~assets/img/tabbar/qrcode.png" alt="首页" slot="item-icon">
        <img src="~assets/img/tabbar/qrcode-alive.png" alt="首页" slot="item-icon-active">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img src="~assets/img/tabbar/order.png" alt="分类" slot="item-icon">
        <img src="~assets/img/tabbar/order-alive.png" alt="分类" slot="item-icon-active">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img src="~assets/img/tabbar/publish.png" alt="购物车" slot="item-icon">
        <img src="~assets/img/tabbar/publish-alive.png" alt="购物车" slot="item-icon-active">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img src="~assets/img/tabbar/people.png" alt="我的" slot="item-icon">
        <img src="~assets/img/tabbar/people-alive.png" alt="我的" slot="item-icon-active">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
