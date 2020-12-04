<template>
  <div id="home">
    <nav-bar class="home-nav">
      <span slot="center">购物街</span>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend v-if="recommends.length" :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommend from "./childrenComps/HomeRecommend";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    // 获取数据
    getHomeMultiData()
      .then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
  },
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
