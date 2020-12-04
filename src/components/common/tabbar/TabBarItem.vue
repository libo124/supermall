<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * link 点击跳转的目标路由
   * activeColor 当前组件活跃状态显示的颜色
   */
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {type: String, default: '#ffa1c0'}
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
      // 判断当前路由的路径是否包含自己，不包含自己表示不是活跃状态，否则是活跃状态
      //
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link).catch(err=>{
        console.log('重复点击');
      })
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /*tab-bar一般是49px*/
  font-size: 12px;

}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  padding-top: 3px;
  vertical-align: middle;
  /*vertical-align 属性设置元素的垂直对齐方式。*/
}

.active {
  color: #ffa1c0;
}

</style>
