<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.recommend {
  /*margin: 10px;*/
  display: flex;
  text-align: center;
  font-size: 10px;
  padding: 10px 10px 20px 10px;
  /*padding-bottom: 10px;*/
  border-bottom: 5px solid #dcdcdc;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 55px;
  height: 55px;
}
</style>
