<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <!--轮播图地址填充-->
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
  name: "HomeSwiper",
  props: {
    banners: Array
  },
  components: {
    SwiperItem,
    Swiper
  }
}
</script>

<style scoped>

</style>
